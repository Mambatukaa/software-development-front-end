import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

export default class Lessons extends Component {
  state = {
    error: null,
    loading: false,
    lessons: []
  };

  componentDidMount = () => {
    this.setState({ loading: true });

    this.setState({ loading: true });
    axios
      .get('http://localhost:8000/api/v1/lessons?limit=50')
      .then((result) =>
        this.setState({ loading: false, lessons: result.data.data })
      )
      .catch((err) => this.setState({ loading: false, error: err.response }));
  };

  render() {
    return (
      <div>
        <h1 className='title'>Сургалтууд</h1>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='columns is-multiline'>
            {this.state.lessons.map((el) => (
              <div className='column is-one-quarter'>
                <Link to={`/lessons/${el._id}`}>
                  <img
                    alt='zurag'
                    src={`https://img-a.udemycdn.com/course/240x135${el.photo}`}
                  />
                </Link>
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
