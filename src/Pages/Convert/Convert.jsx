import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Convert.css'
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdElectricBolt } from "react-icons/md";
import { LiaCompressArrowsAltSolid } from "react-icons/lia";
import { BsPlusCircle } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";



import img from '../../images/img48.png'
import img1 from '../../images/img49.png'
import img2 from '../../images/img50.png'
import img3 from '../../images/img51.png'
import img4 from '../../images/img52.png'
import img5 from '../../images/img53.png'
import img7 from '../../images/img55.png'
import img8 from '../../images/img56.png'
import Footer from '../../Components/Footer/Footer';







const Convert = () => {
    return (
        <>
            <div className='homenav'>
                <Navbar />
            </div>

            <div className='convert-container'>
                <div className='convert1'>
                    <div className='convert2'>
                        <h1>BitBot Exchange
                            Crypto Converter</h1>
                        <p>Convert crypto and stablecoins instantly with
                            0% transaction fees. Discover the fast and easy
                            way to change crypto between 2,750+ convert
                            pairs or USD. </p>
                        <button>Sign Up & Convert <BsArrowUpRight className='btnicon' /></button>
                    </div>

                    <div className='convert3'>
                        <div className='convert4'>
                            <div className='convert5'>
                                <h6>Convert Calculator</h6>

                                <hr />
                            </div>

                            <div className='convert6'>
                                <div className='convert14'>
                                    <div className='convert7'>
                                        <label htmlFor="">From</label>
                                        <div className='convert8'>
                                            <input type="text" placeholder='0' />
                                            <div className='convert9'>
                                                <img src={img} alt="" />
                                                <span>BTC</span>
                                                <IoIosArrowForward />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='convert10'>
                                        <LuArrowUpDown size={25} />
                                    </div>

                                    <div className='convert7'>
                                        <label htmlFor="">To</label>
                                        <div className='convert8'>
                                            <input type="text" placeholder='0' />
                                            <div className='convert9'>
                                                <img src={img} alt="" />
                                                <span>BTC</span>
                                                <IoIosArrowForward />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className='convert13'>
                                    <div className='convert11'>
                                        <button>Log In to Convert</button>
                                    </div>
                                    <div className='convert12'>
                                        <p>Last updated 2024/01/30 09:07 (UTC)</p>
                                        <span>Refresh</span>
                                    </div>
                                </div>

                            </div>




                        </div>
                    </div>
                </div>



                <div className='convert15'>
                    <div className='convert16'>
                        <AiOutlinePercentage size={40} color="black" />
                        <h5>0% Fees</h5>
                        <p>Convert crypto or USD with no
                            transaction fees.</p>
                    </div>
                    <div className='convert16'>
                        <MdElectricBolt size={40} color="black" />
                        <h5>Quick & Easy</h5>
                        <p>Exchange crypto near instantly, in just a
                            few clicks </p>
                    </div>

                    <div className='convert16'>
                        <LiaCompressArrowsAltSolid size={40} color="black" />
                        <h5>Start Small</h5>
                        <p>Begin converting from as little as 1
                            USDT.</p>
                    </div>
                </div>

                <div className='convert17'>
                    <h3>Convert 150+ Cryptocurrencies</h3>
                    <p>Get real-time conversion rates for top cryptocurrencies like Bitcoin, Ethereum,
                        Cardano, BNB, and more. Exchange popular stablecoins, altcoins,
                        and even USD in a few clicks.</p>
                </div>

                <div className='convert18'>
                    <h3>Popular Cryptocurrency Pairs</h3>

                    <div className='convert19'>

                        <div className='convert22'>
                            <div className='convert201'>
                                <h6>Ethereum To BTC</h6>

                                <div className='convert21'>
                                    <img src={img1} alt="" />
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className='convert20'>
                                <h6>Solana To ETH</h6>

                                <div className='convert21'>
                                    <img src={img2} alt="" />
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr />
                        </div>
                        <div className='convert22'>
                            <div className='convert201'>
                                <h6>Bitcoin To USDT</h6>

                                <div className='convert21'>
                                    <img src={img} alt="" />
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                            <div className='convert20'>
                                <h6>Ethereum To USDT</h6>

                                <div className='convert21'>
                                    <img src={img1} alt="" />
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr />
                        </div>
                        <div className='convert22'>
                            <div className='convert201'>
                                <h6>Solana To BTC</h6>

                                <div className='convert21'>
                                    <img src={img2} alt="" />
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className='convert20'>
                                <h6>TetherUS To USD</h6>

                                <div className='convert21'>
                                    <img src={img3} alt="" />
                                    <img src={img4} alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr />
                        </div>
                        <div className='convert22'>
                            <div className='convert201'>
                                <h6>USD Coin To USDT</h6>

                                <div className='convert21'>
                                    <img src={img5} alt="" />
                                    <img src={img3} alt="" />
                                </div>
                            </div>
                            <div className='convert20'>
                                <h6>Solana To USDC</h6>

                                <div className='convert21'>
                                    <img src={img2} alt="" />
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr />
                        </div>
                        <div className='convert22'>
                            <div className='convert201'>
                                <h6>Bitcoin To USDC</h6>

                                <div className='convert21'>
                                    <img src={img} alt="" />
                                    <img src={img5} alt="" />
                                </div>
                            </div>
                            <div className='convert20'>
                                <h6>BNB To ETH</h6>

                                <div className='convert21'>
                                    <img src={img7} alt="" />
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <hr />
                        </div>
                        <div className='convert22'>
                            <div className='convert201'>
                                <h6>BNB To BTC</h6>

                                <div className='convert21'>
                                    <img src={img7} alt="" />
                                    <img src={img} alt="" />
                                </div>
                            </div>
                            <div className='convert20'>
                                <h6>Cardano To USDT</h6>

                                <div className='convert21'>
                                    <img src={img8} alt="" />
                                    <img src={img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='convert23'>
                        <button>Start Converting</button>
                    </div>
                </div>


                <div className='staking9'>
                    <div className='staking10'>
                        <h2>Frequently Asked
                            Questions</h2>
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
            </div>

            <div className='home30'>
                <Footer />

            </div>
        </>

    )
}

export default Convert
