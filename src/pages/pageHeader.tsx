import React from 'react';
import { Nav } from 'react-bootstrap';
import Logo from '../components/logo';

function Header() {
  return (
    <Nav className={'navbar navbar-light navHeader'}  style={{ display: 'flex', margin: '0px auto' }}>
      <a className='navbar-brand' href="#" style={{ width: '80px' }}>
        <Logo/>
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
