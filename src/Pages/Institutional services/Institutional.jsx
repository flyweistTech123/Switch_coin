import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Institutional.css'


import { BsArrowUpRight } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";







import img from '../../images/img42.png'
import img1 from '../../images/img43.png'
import img2 from '../../images/img44.png'
import img3 from '../../images/img45.png'
import img4 from '../../images/img46.png'
import img5 from '../../images/img47.png'
import Footer from '../../Components/Footer/Footer';


const Institutional = () => {
    return (
        <>
            <div className='homenav'>
                <Navbar />
            </div>

            <div className='insti'>
                <div className='insti1'>
                    <div className='insti2'>
                        <h2>Institutional Services</h2>
                        <p>BitBot Exchange Institutional Services
                            connects the world’s leading financial
                            institutions to the digital asset economy.
                            Our solutions are market tested to
                            deliver best-in-class experiences for
                            institutional clients and individuals.</p>


                        <button>Create Institutional Account <BsArrowUpRight className='btnicon' /></button>
                    </div>

                    <div className='insti3'>
                        <div className='insti4'>
                            <img src={img} alt="" />
                        </div>
                        <div className='insti5'>
                            <img src={img1} alt="" />
                        </div>

                        <div className='insti6'>
                            <h2>Trusted &
                                Market-tested
                                Technology</h2>

                            <div className='insti7'>
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                                <img src={img4} alt="" />
                            </div>

                            <div className='insti8'>
                                <p>Our 99.9% uptime rate and leading marker=t-tested matching engine allow our clients to
                                    trade with confidence on BitBot Exchange Leading financial institutions around the world
                                    rely on our robust APIs to access digital asset markets.</p>

                                <p>As one of the most licensed crypto platform with 43 Money Transmitter Licenses,
                                    our platform and processes are regularly audited to maintain some of the highest
                                    international security standards.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='insti9'>
                    <div className='insti10'>
                        <h6>Get in touch</h6>
                        <p>Learn how BitBot Exchange Institutional Services can help power
                            your platform.</p>
                    </div>
                    <div className='insti11'>
                        <button>Create Institutional Account <BsArrowUpRight className='btnicon' /></button>
                    </div>
                </div>


                <div className='insti12'>
                    <div className='insti13'>
                        <FaArrowTrendUp size={35} />
                        <span>Exchange Trading</span>
                    </div>
                    <div className='insti13'>
                        <FaCode size={35} />
                        <span>API</span>
                    </div>
                    <div className='insti13'>
                        <TbActivityHeartbeat size={35} />
                        <span>Exchange Trading</span>
                    </div>
                </div>
                <div className='insti12'>
                    <div className='insti13'>
                        <LiaCoinsSolid size={35} />
                        <span>Exchange Trading</span>
                    </div>
                    <div className='insti13'>
                        <IoShieldCheckmarkOutline size={35} />
                        <span>Exchange Trading</span>
                    </div>
                    <div className='insti13'>
                        <CiViewList size={35} />
                        <span>Exchange Trading</span>
                    </div>
                </div>


                <div className='insti14'>
                    <div className='insti15'>
                        <h2>Dedicated
                            Support &
                            Coverage</h2>

                        <p>Get individualized support from priority onboarding and
                            funding to execution. Our institutional services team
                            partners with institutions to deliver customized
                            solutions, combining deep domain knowledge with
                            unparalleled services to help institutions meet their
                            objectives.</p>

                        <p>Our clients include many of the world’s largest market
                            makers, trading firms, asset managers, hedge funds,
                            family offices, and venture capital firms.</p>
                    </div>

                    <div className='insti16'>
                        <div className='insti17'>
                            <h6>Contact Us</h6>
                            <div className='insti20'>
                            <div className='insti18'>
                                <label htmlFor="">Name</label>
                                <input type="text" />
                            </div>
                            <div className='insti18'>
                                <label htmlFor="">Email</label>
                                <input type="email" />
                            </div>
                            <div className='insti18'>
                                <label htmlFor="">Company/Organization</label>
                                <input type="text" />
                            </div>
                            <div className='insti18'>
                                <label htmlFor="">Product Interested</label>
                                <select name="" id="">
                                    <option value="">Select an option</option>
                                </select>
                            </div>
                            <div className='insti18'>
                                <label htmlFor="">Questions / Comments</label>
                                <textarea type="text" maxlength="200"  spellcheck="false"/>
                            </div>
                            <div className='insti19'>
                                <p>0/200</p>
                            </div>

                            <div className='insti21'>
                                <button>Submit <BsArrowUpRight className='btnicon' /></button>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </div>


                <dir className="insti22">
                    <img src={img5} alt="" />
                </dir>
            </div>

            <div className='home30'>
                <Footer />
            </div>
        </>
    )
}

export default Institutional