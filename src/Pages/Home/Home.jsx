import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';

// icons

import { GoPerson } from "react-icons/go";
import { BsBank } from "react-icons/bs";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { BsArrowUpRight } from "react-icons/bs";
import { PiLightbulb } from "react-icons/pi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FiGift } from "react-icons/fi";
import { PiCoinBold } from "react-icons/pi";




// imgages

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.png'
import img7 from '../../images/img7.png'
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';









const Home = () => {
    const [prices, setPrices] = useState([
        { currency: "OP", price: 0.08053, percentage: 0.07 },
        { currency: "ETH", price: 0.08053, percentage: 0.07 },
        { currency: "BTC", price: 0.08053, percentage: 0.07 },
        { currency: "DOGE", price: 0.08053, percentage: 0.07 },
    ]);
    useEffect(() => {
        const interval = setInterval(() => {
            const newPrices = prices.map(item => ({
                ...item,
                price: item.price + (Math.random() - 0.5) * 0.01,
                percentage: (Math.random() - 0.5) * 0.2
            }));
            setPrices(newPrices);
        }, 7000);

        return () => clearInterval(interval);
    }, [prices]);

    const navigate = useNavigate();


    return (
        <>
            <div className='homenav'>
                <Navbar />
            </div>
            <div  className="homeconatainer">
                <div className='home'>
                    <div className='home1'>
                        <h1>Buy, Sell & Trade
                            Cryptocurrencies</h1>
                        <p>Securely but crypto and earn rewards with
                            BitBot Exchange. Sign up today to trade Bitcoin for free on
                            select pairs.</p>

                        <div className='home3'>
                            <input type="email" name="" id="" placeholder='Enter your email address' />

                            <button onClick={() => navigate('/')}>Sign Up <BsArrowUpRight className='btnicon' /></button>
                        </div>
                    </div>

                    <div className='home2'>
                        <img src={img1} alt="" />
                    </div>
                </div>

                <div className='home4'>
                    <div className="price-container">
                        {prices.map((item, index) => (
                            <div key={index} className="price-item">
                                <span className="price">{item.currency} ${item.price.toFixed(5)}</span>
                                <span className={`percentage ${item.percentage >= 0 ? 'green' : 'red'}`}>({item.percentage.toFixed(2)}%)</span>
                            </div>
                        ))}
                        {prices.map((item, index) => (
                            <div key={index} className="price-item">
                                <span className="price">{item.currency} ${item.price.toFixed(5)}</span>
                                <span className={`percentage ${item.percentage >= 0 ? 'green' : 'red'}`}>({item.percentage.toFixed(2)}%)</span>
                            </div>
                        ))}
                    </div>


                    <div className='home6'>
                        <button>Check Prices <BsArrowUpRight className='btnicon' /></button>
                    </div>
                </div>

                <div className="home7">
                    <h2>
                        <span>Buy</span>
                        <span>Crypto</span>
                        <span>In</span>
                        <span>Minutes</span>
                    </h2>
                    <p>Sign up today to buy and sell 150+ cryptocurrencies.</p>

                    <div className='home8'>
                        <div className='home9'>
                            <GoPerson size={40} />
                            <h6>Ready</h6>
                            <p>Create your free BitBot Exchange account in seconds</p>
                        </div>
                        <div className='home9'>
                            <BsBank size={40} />
                            <h6>Set</h6>
                            <p>Make a deposit to your account</p>
                        </div>
                        <div className='home9'>
                            <PiCurrencyDollarSimpleBold size={40} />
                            <h6>Buy</h6>
                            <p>Buy crypto in a tap</p>
                        </div>
                    </div>

                    <div className='home10'>
                        <button onClick={() => navigate('/')}>Sign Up <BsArrowUpRight className='btnicon' /></button>
                    </div>
                </div>

                <div className='home11'>
                    <div className='home13'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='home12'>
                        <h6>Be crypto confident</h6>
                        <p>We maintain 1:1 reserves for all customer assets, so your funds are always safe, secure, and available.</p>
                    </div>

                    <div className='home14'>
                        <button>Learn More  <BsArrowUpRight className='btnicon' /></button>
                    </div>
                    <div className='home13'>
                        <img src={img3} alt="" />
                    </div>
                </div>



                <div className='home15'>
                    <div className='home16'>
                        <h2>Trade like a pro</h2>
                        <p>Make smarter trades with deep liquidity, powerful
                            charting capabilities, and ultra-low fees you won’t find
                            on other crypto exchanges. Our scalable trading
                            solutions are built for everyone from active traders to
                            institutional-grade API traders.</p>

                        <div className='home17'>
                            <button>Spot Trading <BsArrowUpRight className='btnicon' /></button>
                        </div>
                    </div>

                    <div className='home18'>
                        <img src={img4} alt="" />
                    </div>
                </div>


                <div className='home19'>
                    <h2>Build Your Portfolio with Staking</h2>
                    <p>Start staking ETH, BNB, and ADA, alongside 15+ Proof-of-Stake cryptocurrencies. Support your favorite projects and help secure their respective blockchain networks.</p>

                    <button>Earn Rewards <BsArrowUpRight className='btnicon' /></button>
                </div>

                <div className='home7'>
                    <h2>Why BitBot Exchange?</h2>
                    <p className='homep'>Unlike other crypto exchanges, we charge 0% transaction fees when you buy or
                        trade Bitcoin on select pairs, and we offer some of the lowest fees on
                        cryptocurrencies you love.</p>

                    <div className='home8'>
                        <div className='home9'>
                            <PiLightbulb size={40} />
                            <h6>Simple</h6>
                            <p>Discover the easy way to buy,
                                sell, trade, and stake crypto</p>
                        </div>
                        <div className='home9'>
                            <MdOutlineVerifiedUser size={40} />
                            <h6>Secure</h6>
                            <p>Keep your crypto safe and secure
                                with our industry-leading
                                security program.</p>
                        </div>
                        <div className='home9'>
                            <FiGift size={40} />
                            <h6>Rewarding</h6>
                            <p>Pocket more crypto with 0% free
                                BTC trading* and double digit
                                staking rewards.</p>
                        </div>
                    </div>
                </div>

                <div className='home20'>
                    <div className='home21'>
                        <h2>Trusted By Millions Of People</h2>

                        <div className='home22'>
                            <div className='home23'>
                                <img src={img5} alt="" />
                                <h6>5,660</h6>
                                <p>5,660 convert trade
                                    pairs supported</p>
                            </div>
                            <div className='home23'>
                                <img src={img6} alt="" />
                                <h6>5,660</h6>
                                <p>5,660 convert trade
                                    pairs supported</p>
                            </div>
                            <div className='home23'>
                                <img src={img7} alt="" />
                                <h6>5,660</h6>
                                <p>5,660 convert trade
                                    pairs supported</p>
                            </div>
                        </div>

                        <div className='home10'>
                            <button onClick={() => navigate('/')}> Sign Up <BsArrowUpRight className='btnicon' /></button>
                        </div>
                    </div>
                </div>

                <div className='home24'>
                    <div className='home27'>
                        <h2>Crypto Is Calling</h2>
                        <p>Join millions of customers on the best crypto platform for low fees. Sign up today and buy
                            your first crypto in as little as 2 minutes.</p>
                    </div>


                    <div className='home10'>
                        <button onClick={() => navigate('/')}>Sign Up <BsArrowUpRight className='btnicon' /></button>
                    </div>

                    <div className='home25'>
                        <div className='home26'>
                            <p>So I am new in learning the crypto market
                                and I feel, though this is a good place to
                                start huge variety of tokens to choose from.
                                So far it’s been nice to understand this new
                                market. Thanks to this platform and many
                                others.</p>

                            <div className='home28'>
                                <span>Mike</span>
                                <span>iOS User</span>
                            </div>
                        </div>
                        <div className='home26'>
                            <p>So I am new in learning the crypto market
                                and I feel, though this is a good place to
                                start huge variety of tokens to choose from.
                                So far it’s been nice to understand this new
                                market. Thanks to this platform and many
                                others.</p>

                            <div className='home28'>
                                <span>Mike</span>
                                <span>iOS User</span>
                            </div>
                        </div>
                        <div className='home26'>
                            <p>So I am new in learning the crypto market
                                and I feel, though this is a good place to
                                start huge variety of tokens to choose from.
                                So far it’s been nice to understand this new
                                market. Thanks to this platform and many
                                others.</p>

                            <div className='home28'>
                                <span>Mike</span>
                                <span>iOS User</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home30'>
                <Footer />

            </div>
        </>
    )
}

export default Home