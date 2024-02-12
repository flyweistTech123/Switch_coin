import React from 'react'
import './Historical.css'
import Navbar from '../../Components/Navbar/Navbar'

import { IoIosArrowDown } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";


import img from '../../images/img41.png'
import Footer from '../../Components/Footer/Footer';

const Historical = () => {
  return (
    <>
      <div className='homenav'>
        <Navbar />
      </div>
      <div className='historical1'>
        <h2>Historical Market Data</h2>
      </div>

      <div className='historical'>
        <div className='historical2'>
          <p>We’ve made Candlesticks, Trade, and AggTrade data for all pairs available for download.</p>

          <h6>What Data Is Available?</h6>
          <p>We provide data at daily and monthly intervals. Data for a day is uploaded the following day, and we begin to upload data for a month at the beginning of the following month.</p>

          <div className='historical3'>
            <div className='historical4'>
              <h6>Data Products</h6>
              <h5>Open API  <LuExternalLink size={20} /> </h5>
            </div>
            <div className='historical5'>
              <div className='historical6'>
                <span>Candlestick</span>
                <p>Also known as k-line, is distinguished by its open time and supports multiple intervals for analysis and interpretation.</p>
              </div>

              <div className='historical7'>
                <button>Download</button>
                <IoIosArrowDown size={25} />
              </div>
            </div>
            <div className='historical5'>
              <div className='historical6'>
                <span>Trades</span>
                <p>Executed transactions updated at tick level throughout daily or monthly intervals.</p>
              </div>

              <div className='historical7'>
                <button>Download</button>
                <IoIosArrowDown size={25} />
              </div>
            </div>
            <div className='historical5'>
              <div className='historical6'>
                <span>Aggregated Trades</span>
                <p>Combines the aggregate total volume of orders filled at a given price at daily or monthly intervals.</p>
              </div>

              <div className='historical7'>
                <button>Download</button>
                <IoIosArrowDown size={25} />
              </div>
            </div>
          </div>

          <div className='historical8'>
            <h6>How To Download Programmatically</h6>

            <div className='historical9'>
              <span># download a single file</span>
              <p><span>curl -s</span>  "https://data.binance.us/public_data/spot/daily/klines/BNBUSDT/12h/BNBUSDT-12h-2023-01-01.zip"  <span>-o BNBUSDT-12h-2023-01-01.zip </span></p>
            </div>
            <div className='historical20'>
              <p>OR</p>
            </div>
            <div className='historical9'>
              <p><span>wget</span>"https://data.binance.us/public_data/spot/daily/klines/BNBUSDT/12h/BNBUSDT-12h-2023-01-01.zip"</p>
            </div>

            <div className='historical9'>
              <p>Put the URL <span style={{ color: '#ecbf35' }}>https://www.binance.us/finder </span>into your browser to check all your historical market data files.</p>
            </div>
            <div className='historical9'>
              <p>We will expand this section with more methods in the future.</p>
            </div>
          </div>

          <div className='historical8'>
            <h6>CHECKSUM</h6>

            <p style={{ marginTop: '20px', color: "gray" }}> Each zip file has a checksum file together in the same folder to verify data integrity. To check:</p>

            <div className='historical9'>
              <span># download a single file</span>
              <p><span>curl -s</span>  "https://data.binance.us/public_data/spot/daily/klines/BNBUSDT/12h/BNBUSDT-12h-2023-01-01.zip.CHECKSUM"  <span>-o BNBUSDT-12h-2023-01-01.zip.CHECKSUM   </span></p>
            </div>
            <div className='historical20'>
              <p>OR</p>
            </div>
            <div className='historical9'>
              <p><span>wget</span>"https://data.binance.us/public_data/spot/daily/klines/BNBUSDT/12h/BNBUSDT-12h-2023-01-01.zip.CHECKSUM"</p>
            </div>

            <div className='historical9'>
              <p>#From MacOS
                shasum -a 256 -c BNBUSDT-12h-2023-01-01.zip.CHECKSUM</p>
            </div>
          </div>

          <div className='historical22'>
            <h6>Data Disclaimer</h6>
            <p>Historical Market Data is provided for general informational purposes only and should NOT be: (1) considered an individualized recommendation, endorsement, or offer of any digital asset or services discussed herein; or (2) relied upon for any investment activities. All information is provided on an as-is basis and is subject to change without notice. While we strive to keep the information up to date and accurate, we make no representation or warranty of any kind, express or implied, regarding the accuracy, validity, reliability, availability, or completeness of any such information.
            </p>
            <p>Without written consent from Binance.US, the following commercial uses of Binance.US data are prohibited:</p>

            <ul>
              <li>(1)Trading services that make use of Binance.US quotes or market bulletin board information;</li>
              <li>(2)Data feeding or streaming services that make use of any market data of Binance.US; or</li>
              <li>(3)Any other websites/apps/services that charge for or otherwise profit from (including through advertising or referral fees) market data obtained from Binance.US.</li>
            </ul>

            <p>All use of Historical Market Data is subject to <span style={{ color: 'rgb(240, 185, 11)' }}>Binance.US’ Terms of Use</span>. You hereby understand and agree that Binance.US will not be liable for any losses or damages arising out of or relating to: (a) any inaccuracy, defect, or omission of digital assets price data, (b) any error or delay in the transmission of such data, (c) interruption in any such data, (d) regular or unscheduled maintenance carried out by Binance.US and service interruption and change resulting from such maintenance, (e) any damages incurred by other users’ actions, omissions or violations <span style={{ color: 'rgb(240, 185, 11)' }}>Binance.US’ Terms of Use</span>, (f) any damage caused by illegal actions of other third parties or actions without authorization by Binance.US; and (g) other exemptions mentioned in disclaimers and platform rules issued by Binance.US.</p>
          </div>
        </div>
      </div>

      <div className='home30'>
        <Footer />

      </div>
    </>
  )
}

export default Historical