import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">Formify</Link>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Login</Link>
          </li>
          <li className="nav-link">
            <Link to="/">Sign up</Link>
          </li>
          <li className="nav-link">
            <Link to="/demo" className="btn-black">Demo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
