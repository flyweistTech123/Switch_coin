import React, { useEffect, useState } from 'react'
import './Price.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { IoSearch } from "react-icons/io5";
import { RiExpandUpDownFill } from "react-icons/ri";
import { RiStockFill } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



import img8 from '../../images/img8.png'
import img12 from '../../images/img12.png'

const data = [
    {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    },
    {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    },
    {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    },
    {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    },
    {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    },
    {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    },
    {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    },
    {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    }, {
        imageUrl: img8,
        pairName: 'Bitcoin',
        pairFullName: 'BTC/USDT',
        pairPrice: '43,330.22',
        dailyChanges: '+2.76%',
        dailyHigh: '43,330.22',
        dailyLow: '43,330.22',
        volume: '3.51M',
        marketCap: '$825.20B'
    },
    // Add more objects for additional rows
];


const Prices = () => {
    return (
        <>
            <div className='homenav'>
                <Navbar />
            </div>

            <div className='buycrpto'>
                <div className='buycrpto1'>
                    <h3>Cryptocurrency prices, charts, and trends</h3>
                    <h6>The global cryptocurrency market cap today is <span>$1.66T</span>, a <span>+2.31%</span> change in the oast 24 hours.</h6>
                    <div className='buycrpto2'>
                        <IoSearch size={20} />
                        <input type="search" placeholder='Search' />
                    </div>
                </div>


                <div className='buycrpto3'>
                    <div className='buycrpto4'>
                        <img src={img12} alt="" />
                        <h6>USD</h6>
                        <h6>BTC Pairs</h6>
                        <h6>ETH Pairs</h6>
                    </div>

                    <div className='buycrpto5'>
                        <div className='buycrpto6'>
                            <p>All (161)</p>
                        </div>
                        <div className='buycrpto6'>
                            <p>Top Gainers</p>
                        </div>
                        <div className='buycrpto6'>
                            <p>Top Losers</p>
                        </div>
                    </div>


                    <div className='buycrpto7'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Pair Name</th>
                                    <th>Pair Price <RiExpandUpDownFill /></th>
                                    <th>Daily Changes <RiExpandUpDownFill /></th>
                                    <th>Daily High <RiExpandUpDownFill /></th>
                                    <th>Daily Low <RiExpandUpDownFill /></th>
                                    <th>Volume <IoMdInformationCircleOutline /> <RiExpandUpDownFill /></th>
                                    <th>Market Cap <IoMdInformationCircleOutline /> <RiExpandUpDownFill /></th>
                                    <th>Chart</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className='buycrpto8'>
                                                <div className='buycrpto9'>
                                                    <img src={item.imageUrl} alt="" />
                                                </div>
                                                <div className='buycrpto10'>
                                                    <span>{item.pairName}</span>
                                                    <span>{item.pairFullName}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{item.pairPrice}</p>
                                        </td>
                                        <td>
                                            <div className='buycrpto11'>
                                                <p>{item.dailyChanges}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{item.dailyHigh}</p>
                                        </td>
                                        <td>
                                            <p>{item.dailyLow}</p>
                                        </td>
                                        <td>
                                            <p>{item.volume}</p>
                                        </td>
                                        <td>
                                            <p>{item.marketCap}</p>
                                        </td>
                                        <td>
                                            <p>{item.marketCap}</p>
                                        </td>
                                        <td>
                                            <div className='buycrpto12'>
                                                <button><RiStockFill />Trade</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    
                    </div>

                    <div className='buycrpto13'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <IoIosArrowForward  size={20}/>
                    </div>


                </div>
            </div>

            <div className='home30'>
                <Footer />

            </div>
        </>
    )
}

export default Prices