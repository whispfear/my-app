import React from 'react';
import logo from './logo.svg';
import './index.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#videos">Videos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
