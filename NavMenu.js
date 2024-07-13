//Nav Bar component with use of Link
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavMenu = () => {
  return (
    <header className="header">
      {" "}
      {/* Header section for the navigation bar */}
      <nav className="nav-bar">
        {" "}
        {/* Navigation container */}
        <ul className="nav-bar-ul">
          {" "}
          {/* Unordered list to hold the navigation links */}
          <li>
            {/* Link to the Home page */}
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            {/* Link to the Products page */}
            <Link className="link" to="/products">
              Products
            </Link>
          </li>
          <li>
            {/* Link to the About page */}
            <Link className="link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
