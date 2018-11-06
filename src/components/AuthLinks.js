import React from 'react';
import { Link } from 'react-router-dom';

const AuthLinks = (props) => {
  const links = [
    { text: 'Login', url: '/login', },
    { text: 'Sign Up', url: '/register', },
  ]

  return (
    <ul className='nav-links auth-links'>
      { 
        links.map((link) => {
          return (
            <li key={link.url} onClick={props.closeMenu}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        }) 
      }
    </ul>
  );
}

export default AuthLinks;
