import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          <img
            src="/images/logo.png"
            alt="Union LOgo"
            className="navbar-logo-img"
          />
          <span>UNION</span>
        </Link>
        <ul className="navbar-links">
          {/* <li>
            <Link to="/home">HOME</Link>
          </li> */}
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <Link to="/login" className="navbar-logout">
          SIGN IN
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;


