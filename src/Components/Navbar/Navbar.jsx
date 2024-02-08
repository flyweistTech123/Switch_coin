// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate()
  return (
    <>
      <div className='navbarcontainer'>
        <nav className="navbar">
          <Link to={'/'}>
            <div className="logo">
              <span>BITBOT</span>
              <span>EXCHANGE</span>
            </div>
          </Link>

          <div className={`nav-items ${showMenu ? 'active' : ''}`}>
            <ul>
              <a href="/buycrypto"><li >Buy Crypto</li></a>
              <a href="/prices"><li>Prices</li></a>
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
      </div>

    </>



  );
};

export default Navbar;
