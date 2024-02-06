// Navbar.js

import React from 'react';
import './Navbar.css';
import { RiArrowDownSFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
       <span>BITBOT</span>
       <span>EXCHANGE</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>Buy Crypto</li>
          <li>Prices</li>
          <li>Trade</li>
          <li>Staking</li>
          <li>Pay</li>
          <li>Institutions</li>
        </ul>
      </div>
      <div className="buttons">
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
