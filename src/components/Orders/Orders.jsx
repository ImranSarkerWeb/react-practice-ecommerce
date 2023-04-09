import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Orders.css";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const handleRemoveItem = (id) => {
    if (savedCart) {
      const remaining = cart.filter((product) => product.id !== id);
      setCart(remaining);
      removeFromDb(id);
    }
  };
  return (
    <div className="orders">
      <div className="items">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
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
