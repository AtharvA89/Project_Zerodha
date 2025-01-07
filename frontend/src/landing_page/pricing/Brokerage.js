import React from "react";

function Brokerage() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-8">
          <h3 className="text-center mb-5" ><a href="" style={{textDecoration:"none"}}> Brokerage calculator</a></h3>
          <ul className="text-muted lh-lg fs-6" >
            <li style={{fontSize:"14px"}}>
              Cal & Trade and RMS auto-squareoff: Additional charges of 250 +
              GST per order
            </li>
            <li style={{fontSize:"14px"}}>Digital contract notes will be sent via e-mail.</li>
            <li style={{fontSize:"14px"}}>
              Physical copies of contract notes, & required, shal be charged ₹20
              per contract note. Courier charges apply.
            </li>
            <li style={{fontSize:"14px"}}>
              Forr NRIJ account (non-PiS), 0.5% or 2100 per executed order-for
              equity (whichever is lower).
            </li>
            <li style={{fontSize:"14px"}}>
              Forr NRIJ account (non-PiS), 0.5% or 2100 per executed order-for
              equity (whichever is lower).
            </li>
            <li style={{fontSize:"14px"}} className="mb-5"> 
              the account is in debit balance, any order placed will be charged
              240 per- executed order instead of 220 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h3 className="text-center mb-5 "><a href="" style={{textDecoration:"none"}}> List of charges</a></h3>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
