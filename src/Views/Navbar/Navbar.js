import React from "react";
import logo from "../../img/2KLC_logo.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#B755F2" }}>
      <div className="navbar-logo">
        <a href="/"><img src={logo} alt="2KLC Logo" className='logo' style={{ width: "100px", height: "auto", margin: "10px" }} /></a>
        <h2>Lebrown City</h2>
      </div>
      <div className="navbar-links">
        <a href="about" className="navbar-link">About Us</a>
        <a href="registration" className="navbar-link">Registration Form</a>
        <a href="gallery" className="navbar-link">Gallery</a>
      </div>
    </nav>
  );
};

export default Navbar;







