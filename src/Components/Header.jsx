import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const Header = () => {
  // Get the current location using react-router's useLocation hook
  const location = useLocation();

  return (
    <header>
      <h1>Michael Ikonomou</h1>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Link>
        <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>My Work</Link>
        <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;