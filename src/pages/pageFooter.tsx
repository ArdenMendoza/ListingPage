import React from 'react';
import { Nav } from 'react-bootstrap';
import Logo from '../components/logo';

function Footer() {
  return (
    <Nav className={'navbar navbar-light navFooter'} style={{ display: 'flex', margin: '0px auto', borderTop: '1px black solid' }}>
      <a className='navbar-brand' href="#" style={{ width: '80px' }}>
        <Logo />
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

export default Footer;
