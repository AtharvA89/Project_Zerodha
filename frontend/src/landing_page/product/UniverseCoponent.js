import React from "react";

function UniverseComponent({ imageURL, productDescription }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <img
          src={imageURL}
          className="mx-4 mb-3 "
          style={{ width: "80%" }}
        ></img>
        <p style={{ fontSize: "15px",opacity:"0.5" }}>
          {productDescription}
        </p>
      </div>
    </div>
  );
}

export default UniverseComponent;
