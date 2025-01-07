import React from 'react';

function Hero() {
    return ( <div className='container p-5 mb-5 text-center border-bottom'>
        <div className='row '>
          
        <h1 className='mt-5 mb-4   ' style={{fontSize:"45px"}}>Pricing  </h1>
        <p className='text-muted mb-4 fs-5' >Free equity investment and flat rs 20 intraday and F&O trades</p>
        <div className='col'>
        <img
          src="media/images/pricingEquity.svg"
          className="mx-4 mb-3 "
          style={{ width: "80%" }}
        ></img>
        <h2>Free equity delivery</h2>
        <p style={{ fontSize: "15px",opacity:"0.5" }}>
          All equity delivery investment(NSE,BSE),are absolutely free - 0 brokerage fee
        </p>
        </div>
        <div className='col'>
        <img
          src="media/images/intradayTrades.svg"
          className="mx-4 mb-3 "
          style={{ width: "80%" }}
        ></img>
        <h2>Intraday and F&O trades</h2>
        <p style={{ fontSize: "15px",opacity:"0.5" }}>
          Flat rs 20 or 0.03%(whichever is lower) per executed order on intraday trades accross equity,currency and commodity trades
        </p>
        </div>
        <div className='col'>
        <img
          src="media/images/pricingEquity.svg"
          className="mx-4 mb-3 "
          style={{ width: "80%" }}
        ></img>
        <h2>Free direct MF</h2>
        <p style={{ fontSize: "15px",opacity:"0.5" }}>
          All direct mutual funds are absolutely free
        </p>
        </div>
        </div>
    </div> );
}

export default Hero;