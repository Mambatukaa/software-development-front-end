import React, { Component } from 'react';

export default class SignIn extends Component {
  render() {
    return (
      <div>
        <div className='field'>
          <label className='label'>Email</label>
          <input
            className='input'
            name='email'
            type='text'
            onChange={this.handleType}
          />
        </div>

        <div className='field'>
          <label className='label'>Нууц үг</label>
          <input
            className='input'
            name='password'
            type='password'
            onChange={this.handleType}
          />
        </div>
        <div className='field'>
          <label className='label'>Нууц үгээ давтана уу</label>
          <input
            className='input'
            name='password'
            type='password'
            onChange={this.handleType}
          />
        </div>

        <div className='field'>
          <button className='button is-danger' onClick={console.log('create')}>
            Бүртгүүлэх
          </button>
        </div>
      </div>
    );
  }
}
