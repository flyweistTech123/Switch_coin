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
              <a href="/otc_trading"><li>Trade</li></a>
              <a href="/staking"><li>Staking</li></a>
              <li>Pay</li>
              <a href="/institutional_service"><li>Institutions</li></a>
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
