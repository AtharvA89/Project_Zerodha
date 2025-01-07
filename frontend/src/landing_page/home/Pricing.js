import React from "react";

function Pricing() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 ">
            <h1 className="mb-3 fs-3">Unbeatable pricing</h1>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="">
              see pricing<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-2"></div>
          <div className="col-6">
            <div className="row">
              <div className="col border p-2 ">
                <h1 className="text-center fs-1 mt-3 mb-3">र0</h1>
                <p className="text-center ">Free equity delivery and direct mutual funds</p>
              </div>
              <div className="col border">
              <h1 className="text-center fs-1 mt-3 mb-3">र20</h1>
              <p className="text-center">Intraday and F&0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
