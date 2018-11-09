import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
  const { currentUser: { isLoggedIn, user: { isadmin } }, closeMenu } = props;

  let links = [
    { text: 'Browse Menu', url: '/menu', }
  ]

  if (isLoggedIn ) {
    if (isadmin) {
      links = [ { text: 'Admin', url: '/admin', }, ]
    } else {
      links.push(
        { text: 'My Orders', url: '/order-history', },
        { text: 'Cart', url: '/cart', }
      )
    }
  }

  return (
    <ul className='nav-links'>
      { 
        links.map((link) => {
          return (
            <li key={link.url} onClick={closeMenu}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          );
        }) 
      }
    </ul>
  );
}

export default NavLinks;
