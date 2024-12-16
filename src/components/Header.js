import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../index.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/details">Details</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
