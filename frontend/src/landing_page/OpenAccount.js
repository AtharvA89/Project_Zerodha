import React from 'react';

import {Link} from "react-router-dom";

function OpenAccout() {
    return ( 
        <div className='container p-5 text-center'>
            <div className='row '>
            <h1 className='mt-5 '>Open a Zerodha Account</h1>
            <p className='mb-4' >Modern platform and app,र0 investment,and flat र20 Intraday and F&O trade</p>
            <Link to={"/signup"} style={{textDecoration:"none" , color:"white"}}><button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"25%",margin:"0 auto"}} >SignUp Now</button></Link>
            </div>
        </div>
    );
}

export default OpenAccout;