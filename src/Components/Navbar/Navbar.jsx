// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import NavbarModal1 from '../Modal/Navbarmodal1';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"; // Import both icons
import { HiMiniArrowPath } from "react-icons/hi2";
import { RiStockFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
import { BsBarChartLineFill } from "react-icons/bs";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isNavbarModalOpen, setNavbarModalOpen] = useState(false);
  const [isNavbarModalOpen1, setNavbarModalOpen1] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openNavbarModal = () => {
    setNavbarModalOpen(true);
  };

  const closeNavbareModal = () => {
    setNavbarModalOpen(false);
  };

  const openNavbarModal1 = () => {
    setNavbarModalOpen1(true);
  };

  const closeNavbareModal1 = () => {
    setNavbarModalOpen1(false);
  };

  const navigate = useNavigate();

  return (
    <div className='navbarcontainer'>
      <nav className="navbar">
        <Link to={'/home'}>
          <div className="logo">
            <span>BITBOT</span>
            <span>EXCHANGE</span>
          </div>
        </Link>

        <div className={`nav-items ${showMenu ? 'active' : ''}`}>
          <ul>
            <a href="/buycrypto"><li>Buy Crypto</li></a>
            <a href="/prices"><li>Prices</li></a>
            <li onClick={() => openNavbarModal()}  className={`${isNavbarModalOpen ? 'css' : ''}`}>
              Trade {isNavbarModalOpen ? <IoMdArrowDropup size={20} className='ppp' /> : <IoMdArrowDropdown size={20} className='ppp' />}
            </li>
            <a href="/staking"><li>Staking</li></a>
            <li>Pay</li>
            <li onClick={() => openNavbarModal1()} className={`${isNavbarModalOpen1 ? 'css' : ''}`}>
              Institutions {isNavbarModalOpen1 ? <IoMdArrowDropup size={20} className='ppp' /> : <IoMdArrowDropdown size={20} className='ppp' />}
              </li>
          </ul>
        </div>

        <div className="buttons">
          <button>Log In</button>
          <button onClick={() => navigate('/')}>Sign Up</button>
        </div>
      </nav>

      {/* Modal */}
      {isNavbarModalOpen && (
        <NavbarModal1 onClose={closeNavbareModal}>
          <div className='Modal1'>
            <Link to={'/convert'} className='link'>
              <div className='Modal2'>
                <div className='modal3'>
                  <HiMiniArrowPath size={25} color={'grey'} />
                </div>
                <div className='modal4'>
                  <h6>Convert</h6>
                  <p>Exchange one crypto for another with zero transaction fees.</p>
                </div>
              </div>
            </Link>

            <Link to={'/'} className='link'>
              <div className='Modal2'>
                <div className='modal3'>
                  <RiStockFill size={25} color={'grey'} />
                </div>
                <div className='modal4'>
                  <h6>Spot Trading</h6>
                  <p>Trade crypto using our Advanced Trading tools and interface.</p>
                </div>
              </div>
            </Link>

            <Link to={'/otc_trading'} className='link'>
              <div className='Modal2'>
                <div className='modal3'>
                  <TbWorld size={25} color={'grey'} />
                </div>
                <div className='modal4'>
                  <h6>OTC</h6>
                  <p>Place large orders and receive custom quotes instantly.</p>
                </div>
              </div>
            </Link>
          </div>
        </NavbarModal1>
      )}

      {isNavbarModalOpen1 && (
        <NavbarModal1 onClose={closeNavbareModal1}>
          <div className='Modal1'>
            <Link to={'/institutional_service'} className='link'>
              <div className='Modal2'>
                <div className='modal3'>
                  <BsBank size={25} color={'grey'} />
                </div>
                <div className='modal4'>
                  <h6>Institutional Services</h6>
                  <p>Connecting the world's leading financial Institutions to the digital asset economy</p>
                </div>
              </div>
            </Link>

            <Link to={'/historical_market_data'} className='link'>
              <div className='Modal2'>
                <div className='modal3'>
                  <BsBarChartLineFill size={25} color={'grey'} />
                </div>
                <div className='modal4'>
                  <h6>Historical Market Data</h6>
                  <p>Download Market Data</p>
                </div>
              </div>
            </Link>
          </div>
        </NavbarModal1>
      )}
    </div>
  );
};

export default Navbar;
