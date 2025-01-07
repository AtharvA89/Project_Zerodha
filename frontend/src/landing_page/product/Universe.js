import React from "react";
import UniverseComponent from "./UniverseCoponent";
import {Link} from "react-router-dom";

function Universe() {
  return (
    <div className="container p-5 mb-5 text-center ">
      <div className="row ">
        <p className="mb-5 fs-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="" style={{ textDecoration: "none" }}>
            Zerodha.tech{" "}
          </a>
          blog.
        </p>
        <h1 className="mt-5 mb-4 fs-1  " style={{ fontSize: "45px" }}>
          The Zerodha Universe{" "}
        </h1>
        <p className="mb-4 ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col">
          <UniverseComponent
            imageURL="media/images/zerodhafundhouse.png"
            productDescription="Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
"
          />
          <UniverseComponent imageURL="media/images/streakLogo.png"
            productDescription="Systematic trading platform
that allows you to create and backtest
strategies without coding.
"/>
        </div>
        <div className="col">
        <UniverseComponent
            imageURL="media/images/sensibullLogo.svg"
            productDescription="Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

"
          />
          <UniverseComponent imageURL="media/images/smallcaseLogo.png"
            productDescription="Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
"/>
        </div>
        <div className="col">
        <UniverseComponent
            imageURL="media/images/goldenpiLogo.png"
            productDescription="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
"
          />
          <UniverseComponent imageURL="media/images/dittoLogo.png"
            productDescription="Personalized advice on life
and health insurance. No spam
and no mis-selling.

"/>
        </div>
      </div>
      <Link to={"/signup"} style={{textDecoration:"none" , color:"white"}}><button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"25%",margin:"0 auto"}} >SignUp Now</button></Link>
    </div>
  );
}

export default Universe;
