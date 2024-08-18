// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/contact" className="navbar-item">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
