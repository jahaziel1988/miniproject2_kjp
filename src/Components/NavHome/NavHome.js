import React, { useState } from 'react';
import logo from '../../img/2KLC_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './NavHome.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar" style={{ backgroundColor: '#38117A' }}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="" className="navbar-lebrown-city-link">
            <img src={logo} alt="2KLC Logo" className="navbar-logo-img" />
          </a>
          <h2 className="display-5">Showcase 360</h2>
        </div>
        <div className={`menu-icon ${click ? 'active' : ''}`} onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`nav-menu ${click ? 'active' : ''}`}>
          <div className="dropdown">
            <button className="dropdown-button">
              Profile <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="dropdown-content">
              <a href="profile">Edit Profile</a>
              <a href="/">Log Out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
