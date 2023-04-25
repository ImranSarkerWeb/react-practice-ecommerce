import React from "react";
import "./OrderBtn.css";

const OrderBtn = ({ children }) => {
  return (
    <div className="order-btn">
      <button>{children}</button>
    </div>
  );
};

export default OrderBtn;
