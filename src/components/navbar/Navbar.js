import "./Navbar.css";
import {Link,useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import React, { useContext } from 'react';
const Navbar = () => {
  const navigate=useNavigate();
  const {user}=useContext(AuthContext)
  const handleGoLoginPage=()=>{
    navigate("/login");
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link className="logo" to="/">
        <span className="">LamaBooking</span>
        </Link>
        { user ? <span>Welcome back <b>{user.username} </b></span> :<div className="navItems">
          <button onClick={handleGoLoginPage} className="navButton">Login</button>
          <button className="navButton">Register</button>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
