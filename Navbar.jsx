import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">Dev@Deakin</Link> 
        <input type="text" placeholder="Search..." />
        <div className="login-button">
          <Link to="/login">Login</Link> 
        </div>
        <div className="post-button">
          <a href="/">Post</a> 
        </div>
        <div className="signout-button">
          <Link to="/signout">Sign Out</Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
