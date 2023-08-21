import React from "react";

const CheckoutComponent = ({ product, allTotal, tax }) => {
  return (
    <div className="flex items-start justify-between">
      <div className="">
        <h1>{product?.title}</h1>
        <p>{product?.quantity}</p>
      </div>
      <p>{product?.price * product?.quantity} ks</p>
    </div>
  );
};

export default CheckoutComponent;
