import React from "react";

function Stats() {
  return (
    <>
      <div className="container p-5 mt-5 ">
        <div className="row p-5">
          <div className="col-6" >
            <h1 className="mb-5">Trust with Confidence</h1>
            <h3 className="mt-5 fs-5">Customer-fist always</h3>
            <p className="text-muted fs-7">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of equity investments
            </p>
            <h3 className="mt-4 fs-5">No Spams and Gimmicks</h3>
            <p className="text-muted fs-7">
              No spam or gimmicks No gimmicks, spam, "gamification", or annoying
              push notifications. High quality apps that you use at your pace,
              the way you like.
            </p>
            <h3 className="mt-4 fs-5">The Zerodha Universe</h3>
            <p className=" text-muted fs-7">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h3 className="mt-4 fs-5">Do better with money</h3>
            <p className="text-muted fs-7">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6">
            <img
            className="mb-5"
              src="media/images/ecosystem.png"
              alt="img Loading"
              style={{ width: "90%" }}
            />
            <div className="text-center mt-5 p-2">
                <a  href="" className="mx-5" style={{textDecoration:"none"}}>Explore our product<i class="fa-solid fa-arrow-right"></i></a>
                <a href="" style={{textDecoration:"none"}}>Try Kite<i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
