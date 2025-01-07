import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container mt-4 p-5">
      <div className="row ">
        <div className="col mt-2 pt-4   px-5 pb-5 ml-5 lh-lg">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col mt-2 pt-4 px-5 pb-5 ml-5 lh-lg">
          <p >
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
      <div className="row p-5">
        <div className="col-5 mt-5">
          <img src="media/images/nithinKamath.jpg" className="mt-5 mx-5 rounded-circle" style={{ width: "70%" }} />
          <div className="text-center mt-4" style={{marginRight:"20px"}}><h5>Nithin Kamath</h5>
          <p>Founder, CEO</p></div>
          
        </div>
        <div className="col-7 mt-3 ">
          <h2 className="pb-5">People</h2>
          <p className="mt-5  lh-lg" style={{marginRight:"20px"}}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p className="lh-lg">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="lh-lg">Playing basketball is his zen.</p>
          <p>
            Connect on <Link to="/" style={{textDecoration:"none"}}>HomePage </Link> / 
              <Link to="/" style={{textDecoration:"none"}}>TradingQ&A </Link> / <Link to="/" style={{textDecoration:"none"}}>Twitter </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Team;
