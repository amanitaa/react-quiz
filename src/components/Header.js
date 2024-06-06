import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav>
      <ul className="nav-list">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/gallery">Gallery</Link></li>
        <li className="nav-item"><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
