import React from "react";
import { Link } from "react-router-dom";
import "./HomeNav.css"; 


function HomeNav() {
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
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/abouthome">ABOUT</Link>
          </li>
          <li>
            <Link to="/galleryhome">GALLERY</Link>
          </li>
          <li>
            <Link to="/contacthome">CONTACT</Link>
          </li>
        </ul>
        <Link to="/welcome" className="navbar-logout">
          LOG OUT
        </Link>
      </div>
    </nav>
  );
}

export default HomeNav;

