import React from "react";

function Awards() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" alt="img" />
        </div>
        <div className="col-6 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className=" mb-5">
            2+ million Zerodha client contibutes to over 15% of all retail order
            volume in india daily by trading and investing in:
          </p>
          <div className="row mb-3">
          <div className="col-6">
            <ul>
                <li className="p-2">Future and Options</li>
                <li className="p-2">Commodity Derivatives</li>
                <li className="p-2">Currency Derivatives</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
                <li className="p-2">Stocks & IPOs</li>
                <li className="p-2">Direct Mutual Funds</li>
                <li className="p-2">Bonds and Govt.Security</li>
            </ul>
          </div>
          </div>
          <img src="media/images/pressLogos.png" alt="img Loading" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
