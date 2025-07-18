import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">My App</div>
        <nav>
          <ul className="footer-links">
            <li><Link to="/">Form</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/api">API</Link></li>
          </ul>
        </nav>
        <p className="footer-copy">© {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
