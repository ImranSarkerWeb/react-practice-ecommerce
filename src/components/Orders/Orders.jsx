import React from "react";
import Cart from "../Cart/Cart";
import "./Orders.css";

const Orders = () => {
  return (
    <div className="orders">
      <div className="products">Products here</div>
      <div>
        Order summery
        <Cart items={[]}></Cart>
      </div>
    </div>
  );
};

export default Orders;
