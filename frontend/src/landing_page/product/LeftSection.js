import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-8">
          <img src={imageURL} />
        </div>
        <div className="col-4 mt-3 ">
          <h2 className="mb-2">{productName}</h2>
          <p className=" mb-5 lh-lg">{productDescription}</p>
          <a
            className="mx-4 "
            href={tryDemo}
            style={{ textDecoration: "none" }}
          >
            Try demo<i class="fa-solid fa-arrow-right"></i>
          </a>
          <a
            className="mx-4"
            href={learnMore}
            style={{ textDecoration: "none" }}
          >
            Learn more<i class="fa-solid fa-arrow-right"></i>
          </a>
         <div className=""> <a src={googlePlay}>
            {" "}
            <img
              className="mt-4 "
              src="media/images/googlePlayBadge.svg"
              alt="img Loading"
              style={{ width: "50%" }}
            />
          </a>
          <a src={appStore}>
            {" "}
            <img
              className="mt-4 "
              src="media/images/appstoreBadge.svg"
              alt="img Loading"
              style={{ width: "45%" }}
            />
          </a></div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
