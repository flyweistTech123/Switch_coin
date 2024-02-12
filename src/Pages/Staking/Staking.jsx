import React from 'react'
import './Staking.css'
import Navbar from '../../Components/Navbar/Navbar'


import { BsArrowUpRight } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";



import img from '../../images/img20.png'
import img1 from '../../images/img19.png'
import img2 from '../../images/img21.png'
import img3 from '../../images/img22.png'
import img4 from '../../images/img23.png'
import img5 from '../../images/img24.png'
import img6 from '../../images/img25.png'
import img7 from '../../images/img26.png'
import img8 from '../../images/img27.png'
import img9 from '../../images/img28.png'
import img10 from '../../images/img29.png'
import img11 from '../../images/img30.png'
import img12 from '../../images/img31.png'
import img13 from '../../images/img32.png'
import img14 from '../../images/img33.png'
import img15 from '../../images/img34.png'
import img16 from '../../images/img35.png'
import img17 from '../../images/img36.png'
import img18 from '../../images/img37.png'
import img19 from '../../images/img38.png'
import img20 from '../../images/img39.png'
import img21 from '../../images/img40.png'
import Footer from '../../Components/Footer/Footer';


const Staking = () => {
    return (
        <>
            <div className='homenav'>
                <Navbar />

                <div className='staking'>
                    <div className='staking1'>
                        <h1>Grow your crypto with a rewards rate of
                            up to 12.50%</h1>
                        <p>Start staking crypto to help support your favorite projects and contribute to the network’s security and operation while earning rewards.</p>

                        <button>Start Staking <BsArrowUpRight className='btnicon' /></button>
                    </div>

                    <div className='staking2'>
                        <h2>Crypto Staking</h2>

                        <div className='staking3'>
                            <div className='staking4'>
                                <img src={img} alt="" />
                                <div className='staking5'>
                                    <img src={img1} alt="" />
                                    <p>3.50%</p>
                                </div>
                                <h6>ETH</h6>
                                <span>Ethereum</span>
                            </div>
                            <div className='staking4'>
                                <img src={img2} alt="" />
                                <div className='staking5'>
                                    <img src={img3} alt="" />
                                    <p>1.60%</p>
                                </div>
                                <h6>BNB</h6>
                                <span>BNB</span>
                            </div>
                            <div className='staking4'>
                                <img src={img4} alt="" />
                                <div className='staking5'>
                                    <img src={img5} alt="" />
                                    <p>1.80%</p>
                                </div>
                                <h6>ADA</h6>
                                <span>Cardona</span>
                            </div>
                            <div className='staking4'>
                                <img src={img6} alt="" />
                                <div className='staking5'>
                                    <img src={img7} alt="" />
                                    <p>2.90%</p>
                                </div>
                                <h6>MATIC</h6>
                                <span>Polygon</span>
                            </div>
                        </div>
                        <div className='staking3'>
                            <div className='staking4'>
                                <img src={img8} alt="" />
                                <div className='staking5'>
                                    <img src={img9} alt="" />
                                    <p>1.20%</p>
                                </div>
                                <h6>BTC</h6>
                                <span>BTC</span>
                            </div>
                            <div className='staking4'>
                                <img src={img10} alt="" />
                                <div className='staking5'>
                                    <img src={img11} alt="" />
                                    <p>4.70%</p>
                                </div>
                                <h6>SOL</h6>
                                <span>Solana</span>
                            </div>
                            <div className='staking4'>
                                <img src={img12} alt="" />
                                <div className='staking5'>
                                    <img src={img13} alt="" />
                                    <p>11.00%</p>
                                </div>
                                <h6>Tether</h6>
                                <span>Tether</span>
                            </div>
                            <div className='staking4'>
                                <img src={img14} alt="" />
                                <div className='staking5'>
                                    <img src={img15} alt="" />
                                    <p>4.30%</p>
                                </div>
                                <h6>USDC</h6>
                                <span>USDC</span>
                            </div>
                        </div>
                    </div>


                    <div className='staking6'>
                        <h2>How Staking Works?</h2>
                        <div className='staking7'>
                            <div className='staking8'>
                                <img src={img16} alt="" />
                                <h6>Cold Storage Staking</h6>
                                <p>Third party service providers stake
                                    on your behalf and your funds are
                                    securely stored in offline cold
                                    storage wallets.</p>
                            </div>
                            <div className='staking8'>
                                <img src={img17} alt="" />
                                <h6>Cold Storage Staking</h6>
                                <p>Third party service providers stake
                                    on your behalf and your funds are
                                    securely stored in offline cold
                                    storage wallets.</p>
                            </div>
                            <div className='staking8'>
                                <img src={img18} alt="" />
                                <h6>Cold Storage Staking</h6>
                                <p>Third party service providers stake
                                    on your behalf and your funds are
                                    securely stored in offline cold
                                    storage wallets.</p>
                            </div>
                        </div>
                    </div>
                    <div className='staking1'>
                        <h1>Start Staking Crypto Today</h1>
                        <p>Put your crypto to work and stake with peace of mind.</p>

                        <button>Get Started <BsArrowUpRight className='btnicon' /></button>
                    </div>

                    <div className='staking9'>
                        <div className='staking10'>
                            <h2>Frequently Asked
                                Questions</h2>

                            <button>Learn More <IoIosArrowRoundForward size={25}/></button>
                        </div>

                        <div className='staking11'>
                            <div className='staking12'>
                                <h6>What is staking?</h6>
                                <BsPlusCircle size={28} />
                            </div>
                            <div className='staking12'>
                                <h6>How does staking work on Bitbot Exchange?</h6>
                                <BsPlusCircle size={28} />
                            </div>
                            <div className='staking12'>
                                <h6>What are bonding and unbonfing periods?</h6>
                                <BsPlusCircle size={28} />
                            </div>
                            <div className='staking12'>
                                <h6>When staking, what does the processing time refer to?</h6>
                                <BsPlusCircle size={28} />
                            </div>
                            <div className='staking12'>
                                <h6>Who can stake on BitBot Exchange?</h6>
                                <BsPlusCircle size={28} />
                            </div>
                            <div className='staking12'>
                                <h6>When will I receive my staking rewards?</h6>
                                <BsPlusCircle size={28} />
                            </div>
                            <div className='staking12'>
                                <h6>How do I unstake my crypto?</h6>
                                <BsPlusCircle size={28} />
                            </div>
                        </div>
                    </div>

                    <div className='staking13'>
                        <h2>Explore More Offerings</h2>

                        <div className='staking14'>
                            <div className='staking15'>
                                <img src={img19} alt="" />
                                <h6>Buy</h6>
                            </div>
                            <div className='staking15'>
                                <img src={img20} alt="" />
                                <h6>Convert</h6>
                            </div>
                            <div className='staking15'>
                                <img src={img21} alt="" />
                                <h6>Pay</h6>
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

export default Staking