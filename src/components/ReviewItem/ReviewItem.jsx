import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  console.log(product);
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
    </div>
  );
};

export default ReviewItem;
