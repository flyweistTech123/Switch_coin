import React from 'react'
import './Footer.css'

import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";





const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div className='footer3'>
                    <div className='footer1'>
                        <div>
                            <h6>Company</h6>
                            <ul>
                                <li>Trust</li>
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Announcements</li>
                                <li>Licenses</li>
                                <li>Careers</li>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                                <li>Law Enforcement Guide</li>
                                <li>Do Not Sell My Personal Information</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Products</h6>
                            <ul>
                                <li>Buy & Sell</li>
                                <li>Convert</li>
                                <li>Spot Trading</li>
                                <li>OTC</li>
                                <li>Staking</li>
                                <li>Pay</li>
                                <li>Institutions</li>
                                <li>Crypto Domains</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Support</h6>
                            <ul>
                                <li>Help Center</li>
                                <li>Tax</li>
                                <li>Fees</li>
                                <li>Trading Rules</li>
                                <li>Trade Limits</li>
                                <li>Listing on</li>
                                <li>BitBot Exchange</li>
                                <li>API Documentation</li>
                                <li>Status</li>
                            </ul>
                        </div>
                        <div>
                            <h6>Learn</h6>
                            <ul>
                                <li>Crypto Prices</li>
                                <li>Crypto Education</li>
                                <li>Crypto For Beginners</li>
                                <li>What is a Blockchain?</li>
                                <li>What is Bitcoin?</li>
                                <li>What is Ethereum?</li>
                                <li>Crypto Staking Explained</li>
                                <li>Crypto Tokens vs. Coins</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer2'>
                        <FaFacebookF />
                        <RiTwitterXFill />
                        <FaYoutube />
                        <FaInstagram />
                        <FaLinkedin />
                        <BiLogoTelegram />
                        <FaDiscord />
                        <FaTiktok />
                    </div>
                    <div className='footer4'>
                        <hr />
                    </div>

                    <div className='footer5'>
                        <div className="footer6">
                            <span>BITBOT</span>
                            <span>EXCHANGE</span>
                        </div>

                        <div className='footer7'>
                            <p>© 2024 BAM Trading Services Inc. d.b.a.Binance.US - All rights reserved.NMLS ID: 1906829</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer