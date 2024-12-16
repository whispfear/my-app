import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 My Website. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
