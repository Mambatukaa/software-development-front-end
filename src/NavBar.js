import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ onLogout }) {
  return (
    <nav className='navbar has-shadow is-prime'>
      <div className='navbar-brand'>
        <div className='navbar-item'>
          <img
            src='https://i.pinimg.com/originals/4a/ff/9d/4aff9db9936e04513fde6a461fa1ee4a.png'
            alt='logo'
            style={{ maxHeight: '60px' }}
            className='py-2 xy-2'
          />
        </div>
        <Link className='navbar-item' to='/lessons'>
          Сургалтууд
        </Link>
        <Link className='navbar-item' to='/login'>
          Нэвтрэх
        </Link>
      </div>

      <div className='navbar-end'>
        <a href='/' className='navbar-item' onClick={onLogout}>
          Гарах
        </a>
      </div>
    </nav>
  );
}
