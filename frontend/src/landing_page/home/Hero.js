import React from 'react';
import {Link} from "react-router-dom";

function Hero() {
    return ( 
        <div className='container p-5 text-center'>
            <div className='row '>
                <img src='media/images/homeHero.png' alt='hero img' className='mb-5 '></img>
            </div>
            <h1 className='mt-5 '>Invest In EveryThing</h1>
            <p className='mb-4' >Online platform to invest in Stocks,Derivatives,Mutual Funds,and more</p>
            <Link to={"/signup"} style={{textDecoration:"none" , color:"white"}}><button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"25%",margin:"0 auto"}} >SignUp Now</button></Link>
        </div>
    );
}

export default Hero;