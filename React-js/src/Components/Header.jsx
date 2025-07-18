import React from 'react'
import { Link } from 'react-router-dom';    

const Header = () => {
  return (
    <div>
          <header className="navbar">
        <div className="logo">My App</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/">Form</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/api">API</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header;