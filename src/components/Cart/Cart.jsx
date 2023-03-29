import React from "react";
import "./Cart.css";
const Cart = ({ items }) => {
  console.log(items);
  let total = 0;
  let shipping = 0;

  for (const item of items) {
    total += item.price;
    shipping += item.shipping;
  }
  let tax = (total * 0.07).toFixed(2);
  return (
    <div className="order-summery">
      <p>Selected Items: {items.length}</p>
      <p>Total Price:$ {total} </p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: {+total + +shipping + +tax} $</h4>
    </div>
  );
};

export default Cart;
