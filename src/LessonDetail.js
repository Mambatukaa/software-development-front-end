import React, { Component } from 'react';
import axios from 'axios';

export default class LessonDetail extends Component {
  state = {
    name: null,
    price: null,
    content: null,
    photo: null,
    rating: null,
    bestseller: null,
    error: null,
    success: null,
    deleted: null,
    loading: false
  };

  goBack = () => {
    this.props.history.goBack();
  };

  handleType = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value, error: null, success: null });
  };

  // AXIOS ашиглан back-end рүү хүсэлт явуулах
  // Render хийгдсэний дараа server ээс татах
  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get('http://localhost:8000/api/v1/lessons/' + this.props.match.params.id)
      .then((result) =>
        this.setState({ ...result.data.data, error: null, loading: false })
      )
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
          loading: false
        });
      });
  };

  handleSave = () => {
    const token = localStorage.getItem('token');
    this.setState({ loading: true, success: null });
    axios
      .put(
        'http://localhost:8000/api/v1/lessons/' + this.props.match.params.id,
        {
          name: this.state.name,
          price: this.state.price,
          content: this.state.content,
          bestseller: this.state.bestseller,
          rating: this.state.rating
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((result) => {
        this.setState({
          ...result.data.data,
          error: null,
          loading: false,
          success: 'Амжилттай хадгалагдлаа...'
        });
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.error.message,
          loading: false
        });
      });
  };

  handleDelete = () => {
    const token = localStorage.getItem('token');
    this.setState({ loading: true, success: null });
    axios
      .delete(
        'http://localhost:8000/api/v1/lessons/' + this.props.match.params.id,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then((result) => {
        this.setState({
          deleted: true
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: err.response.data.error.message,
          loading: false
        });
      });
  };

  render() {
    if (this.state.deleted) {
      return (
        <div className='notification is-danger'>
          Ном амжилттай устгагдлаа...
        </div>
      );
    }

    return (
      <>
        {this.state.error && (
          <div className='notification is-warning'>{this.state.error}</div>
        )}

        {this.state.success && (
          <div className='notification is-success'>{this.state.success}</div>
        )}

        <h1 className='title'>{this.state.name}</h1>
        <div className='media'>
          <div className='media-left'>
            <img
              alt='zurag'
              src={`https://img-a.udemycdn.com/course/240x135${this.state.photo}`}
            />
          </div>

          <div className='media-content'>
            <div className='field'>
              <label className='label'>Нэр</label>
              <input
                className='input'
                name='name'
                value={this.state.name}
                onChange={this.handleType}
              />
            </div>

            <div className='field'>
              <label className='label'>Үнэ</label>
              <input
                className='input'
                name='price'
                value={this.state.price}
                onChange={this.handleType}
              />
            </div>

            <div className='field'>
              <label className='label'>Агуулга</label>
              <textarea
                style={{ height: '10em' }}
                className='input'
                name='content'
                value={this.state.content}
                onChange={this.handleType}
              />
            </div>

            <div className='field'>
              <button className='button is-success' onClick={this.goBack}>
                Буцах
              </button>
              &nbsp;
              <button className='button is-link' onClick={this.handleSave}>
                Хадгалах
              </button>
              &nbsp;
              <button className='button is-danger' onClick={this.handleDelete}>
                Устгах
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
