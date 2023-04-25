import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./ClearCart.css";

const ClearCart = ({ handleClearCart }) => {
  return (
    <div className="clear-cart">
      <button onClick={handleClearCart}>
        Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default ClearCart;
