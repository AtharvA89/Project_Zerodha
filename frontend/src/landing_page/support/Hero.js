import React from 'react';

function Hero() {
    return (<div className='container' style={{backgroundColor:"#3498eb", color:"white"}}>
        <div className='row' id='supportWrapper' >
            <div className='col p-5 mx-5'>
                <h5 className='mb-5'>Support portal</h5>

                <h4 className='mt-5'>Search for an answer or browse help topics to create a ticket</h4>
                <input placeholder='Eg:how do I activate F&O,why is my order getting rejected.' className='p-4 mb-3 mt-3' style={{width:"95%"}}></input><br></br>
                <a href='' style={{color:"white"}}>Track account opening</a>&nbsp;
                <a href='' style={{color:"white"}}> Track segment activation</a>&nbsp;
                <a href='' style={{color:"white"}}> intraday</a>&nbsp;
                <a href='' style={{color:"white"}}>margins</a>&nbsp;
                <a href='' style={{color:"white"}}> kite user manual</a>&nbsp;
            </div>
            <div className='col p-5'>
                <a href='' style={{color:"white"}} >Track ticket</a>
                <h4 className='mt-5'>Featured</h4>
                <p>1.<a style={{color:"white"}} href=''>current takeover and Delisitling -january 2024</a></p>
                <p>2.<a style={{color:"white"}} href=''>Latest intraday leverage - MIS % CO</a></p>
            </div>
        </div>
    </div>);
}

export default Hero;