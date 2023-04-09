import React from "react";
import Cart from "../Cart/Cart";
import "./Orders.css";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const cart = useLoaderData();
  return (
    <div className="orders">
      <div className="products">Products here {cart.length}</div>
      <div>
        Order summery
        <Cart items={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
