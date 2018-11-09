import React from 'react';
import { Link } from 'react-router-dom';

const AuthLinks = (props) => {
  const { currentUser: { isLoggedIn }, logout, closeMenu } = props;
  const handleLogout = (e) => {
    e.preventDefault();
    closeMenu();
    logout();
  }

  return (
    <ul className='nav-links auth-links'>
      {
        isLoggedIn
        ? <li onClick={handleLogout}>
            <Link to='/'>Logout</Link>
          </li>
        : [
            <li key='login' onClick={closeMenu}>
              <Link to='/login'>Login</Link>
            </li>,
            <li key='signup' onClick={closeMenu}>
              <Link to='/signup'>Sign Up</Link>
            </li>
          ]
      }
    </ul>
  );
  
}

export default AuthLinks;
