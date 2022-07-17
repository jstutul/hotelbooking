import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="logo" to="/">
        <span className="">LamaBooking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Login</button>
          <button className="navButton">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
