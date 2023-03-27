import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, ratings } = props.product;
  return (
    <div className="cart">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings} Stars</p>
      </div>
      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
