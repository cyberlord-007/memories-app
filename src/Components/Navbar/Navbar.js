import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1 style={{ color: '#0094cc', fontFamily: 'Cinzel' }}>
            Down The Lane
          </h1>
        </div>
        <div className="nav-content">
          <Link className="button" to="/login" className="button">
            LOG IN
          </Link>
          <Link to="/register" className="button">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
