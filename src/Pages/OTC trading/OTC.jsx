import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './OTC.css'


import img from '../../images/img8.png'
import img1 from '../../images/img13.png'
import img2 from '../../images/img14.png'
import img3 from '../../images/img15.png'
import img4 from '../../images/img16.png'
import img5 from '../../images/img17.png'
import img6 from '../../images/img18.png'


import { LuArrowUpDown } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";



const OTC = () => {
  return (
    <>

      <div className='otccaontainer'>
        <div className='homenav'>
          <Navbar />
        </div>

        <div className='otc1'>
          <div className='otc2'>
            <h2>OTC Trading Portal</h2>
            <div className='otc3'>
              <div className='otc4'>
                <h6>Request a Quote</h6>
                <div className='otc4_1'>
                  <div className='otc5'>
                    <label htmlFor="">From</label>
                    <label htmlFor="">0 BTC</label>
                  </div>

                  <div className='otc6'>
                    <input type="text" name="" id="" placeholder='min.0.000009' />
                    <div className='otc7'>
                      <img src={img} alt="" />
                      <span>BTC</span>
                      <IoIosArrowDown size={22} />
                    </div>
                  </div>
                </div>
                <div className='otc8'>
                  <LuArrowUpDown size={25} />
                </div>
                <div>
                  <div className='otc5'>
                    <label htmlFor="">To</label>
                  </div>

                  <div className='otc6'>
                    <input type="text" name="" id="" placeholder='min.0.0002' />
                    <div className='otc7'>
                      <img src={img1} alt="" />
                      <span>ETH</span>
                      <IoIosArrowDown size={22} />
                    </div>
                  </div>
                </div>

                <div className='otc9'>
                  <button>Preview Quote</button>
                </div>

              </div>
              <div className='otc10'>

                <img src={img2} alt="" />
                <p>Please fill out the form to receive a
                  quote from one of our traders.</p>
              </div>
            </div>

            <div className='otc11'>
              <div className='otc12'>
                <h6>OTC Trading</h6>
              </div>
              <hr />

              <div className='otc13'>
                <img src={img3} alt="" />
                <div className='otc14'>
                  <h4>What does OTC Trading mean?</h4>
                  <p>OTC stands for over-the-counter. Through  this portal, trades are
                    negotiated directly between the buyer and the seller. It does not provide
                    a public order book listing all the trades. This enables large sums to move
                    quitely-without the potential to distrupt markets.</p>
                </div>
              </div>
              <div className='otc13'>
                <img src={img4} alt="" />
                <div className='otc14'>
                  <h4>Is there a minimum trade amount?</h4>
                  <p>Cryptocurrencies have different minimum trading amounts. If you would
                    like to trade a consider able amount of cryptocurrency, please reach out
                    to OTC@BitbotExchange.com</p>
                </div>
              </div>
              <div className='otc13'>
                <img src={img5} alt="" />
                <div className='otc14'>
                  <h4>What are the fees?</h4>
                  <p>We do not charge any fees for OTC trades. However, there will be a
                    spread (if you are buying, our prices will be ablove the market price. If you
                    are selling, our price will be below the market price).</p>
                </div>
              </div>
              <div className='otc15'>
                <img src={img6} alt="" />
                <div className='otc14'>
                  <h4>What is Bitbot Exchange OTC Trading?</h4>
                  <p>Bitbot Exchange OTC trading allows you to place buy and sell large
                    orders. OTC trading is beneficial for placing large orders where
                    a market or limit order could impact liquidity and cause price
                    slippage.</p>
                </div>
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

export default OTC