import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {
  const links = [
    { text: 'Browse Menu', url: '/menu', },
    { text: 'My Orders', url: '/order-history', },
    { text: 'Cart', url: '/cart', },
  ]

  return (
    <ul className='nav-links'>
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

export default NavLinks;
