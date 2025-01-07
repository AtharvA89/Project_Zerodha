import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
      
        <div className="col-4 mt-3 ">
          <h2 className="mb-2">{productName}</h2>
          <p className=" mb-5 lh-lg">{productDescription}</p>
        
          <a
            className="mx-4"
            href={learnMore}
            style={{ textDecoration: "none" }}
          >
            {learnMore}<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
