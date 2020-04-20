import React from 'react';
import { ReactComponent as Logo } from '../assets/adrenalin.svg';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Nav className={'navbar navbar-light bg-'} style={{ display: 'flex', minWidth: '1000px', maxWidth: '1400px', margin: '0px auto', borderTop: '1px black solid' }}>
      <a className='navbar-brand' href="#" style={{ width: '80px' }}>
        <Link to='/'>
          <Logo />
        </Link>
      </a>
      <ul style={{ listStyleType: 'none' }}>
        <li>Privacy</li>
        <li>Sitemap</li>
        <li>Facebook</li>
        <li>LinkedIn</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </Nav>
  );
}

export default Header;
