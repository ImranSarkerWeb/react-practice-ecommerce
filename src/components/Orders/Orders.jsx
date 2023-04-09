import React from "react";
import Cart from "../Cart/Cart";
import "./Orders.css";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const cart = useLoaderData();
  return (
    <div className="orders">
      <div className="items">
        {cart.map((product) => (
          <ReviewItem key={product.id} product={product}></ReviewItem>
        ))}
      </div>
      <div>
        Order summery
        <Cart items={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
