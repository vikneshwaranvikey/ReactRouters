import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>ROUTER-DOM</h1>
      </div>
      <nav className="navigator">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/course">Developes</Link>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button type="button">Login</button>
      </div>
    </div>
  );
};
export default Navbar;
