import React from 'react'
import img1 from '../../images/img1.png'
import './Home.css'
import { MdArrowOutward } from "react-icons/md";


const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home1'>
                    <h1>Buy, Sell & Trade
                        Cryptocurrencies</h1>
                    <p>Securely but crypto and earn rewards with
                        BitBot Exchange. Sign up today to trade Bitcoin for free on
                        select pairs.</p>

                        <div className='home3'>
                            <input type="email" name="" id="" placeholder='Enter your email address'/>

                            <button>Sign Up <MdArrowOutward /></button>
                        </div>
                </div>

                <div className='home2'>
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}

export default Home