import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="item-details">
        <p>{name}</p>
        <p>
          Price: <span className="text-orange">${price}</span>
        </p>
        <p>
          Order Quantity: <span className="text-orange">${quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveItem(id)} className="delet-btn">
        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ReviewItem;
