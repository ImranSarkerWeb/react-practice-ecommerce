import React from "react";
import "./Cart.css";
import ClearCart from "../ClearCart/ClearCart";

const Cart = ({ items, handleClearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const item of items) {
    total += item.price * item.quantity;
    shipping += item.shipping * item.quantity;
    quantity = quantity + item.quantity;
  }
  let tax = (total * 0.07).toFixed(2);
  return (
    <div className="order-summery">
      <p>Selected Items: {quantity}</p>
      <p>Total Price:$ {total} </p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: {+total + +shipping + +tax} $</h4>
      <ClearCart handleClearCart={handleClearCart}></ClearCart>
      <button className="order-btn">{children}</button>
    </div>
  );
};

export default Cart;
