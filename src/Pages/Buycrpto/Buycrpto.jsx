import React from 'react'
import './Buycrpto.css'
import Navbar from '../../Components/Navbar/Navbar'

import { LuArrowUpDown } from "react-icons/lu";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


import img8 from '../../images/img8.png'
import img9 from '../../images/img9.png'
import img10 from '../../images/img10.png'
import img11 from '../../images/img11.png'
import Footer from '../../Components/Footer/Footer';


const BuyCrypto = () => {

    return (
        <>
            <div className='homenav'>
                <Navbar />
            </div>

            <div className='price1'>
                <div className='price2'>
                    <div className='price3'>
                        <img src={img9} alt="" />
                    </div>

                    <div className='price4'>
                        <h6>Buy</h6>
                        <hr />

                        <div className='price5'>
                            <div className='price6'>
                                <h1>0</h1>
                                <span> <FaArrowRotateRight size={15} /> One-time purchase</span>
                            </div>
                            <div className='price7'>
                                <LuArrowUpDown size={25} />
                            </div>
                        </div>

                        <div className='price13'>
                            <div className='price8'>
                                <div className='price9'>
                                    <div className='price10'>
                                        <img src={img8} alt="" />
                                    </div>
                                    <h6>BTC Bitcoin</h6>
                                </div>
                                <div className='price11'>
                                    <IoIosArrowForward />
                                </div>
                            </div>

                            <div className='price12'>
                                <button>Preview Purchase</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='price14'>

                    <div className='price15'>
                        <img src={img10} alt="" />
                    </div>

                    <div className='price16'>
                        <div className='price17'>
                            <h6>Recurring Buy Crypto</h6>
                            <span>Learn more</span>
                        </div>
                        <img src={img11} alt="" />
                    </div>
                </div>
            </div>

            <div className='home30'>
                <Footer />
            </div>
        </>
    )
}

export default BuyCrypto