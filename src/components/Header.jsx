import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
            alt="logo"
            className="logo"
          />
          <h2 className="logo-title">Wave</h2>
        </div>
        <ul className="nav-items">
          <li>
            <Link className="item"  to="/">Home</Link>
          </li>
          <li>
            <Link className="item" to="/about">About</Link>
          </li>
          <li>
            <Link className="item" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

{/* <a href="#home">Home</a>; */}
