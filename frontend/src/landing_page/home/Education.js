import React from "react";

function Education() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row">
          <div className="col-6">
            <img
              src="media/images/education.svg"
              alt="img"
              style={{ width: "90%" }}
            />
          </div>
          <div className="col-6 mt-3">
            <h2>Free and open market education</h2>
            <p className="mt-5 mb-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="">
              Versity<i class="fa-solid fa-arrow-right"></i>
            </a>

            <p className="mt-5 mb-3">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="">
              TradingQ&A<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
