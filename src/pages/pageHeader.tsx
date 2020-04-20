import React from 'react';
import { ReactComponent as Logo } from '../assets/adrenalin.svg';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Nav className={'navbar navbar-light navHeader'}  style={{ display: 'flex', margin: '0px auto' }}>
      <a className='navbar-brand' href="#" style={{ width: '80px' }}>
        <Link to='/'>
          <Logo />
        </Link>
      </a>
      <ul style={{ listStyleType: 'none' }}>
        <li>Culture</li>
        <li>Work</li>
        <li>Clients</li>
        <li>Careers</li>
        <li>Contact</li>
      </ul>
    </Nav>
  );
}

export default Header;
