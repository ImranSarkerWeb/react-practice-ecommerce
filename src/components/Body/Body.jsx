import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Body.css";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cartItems, product];
    setCartItems(newCart);
  };

  const totalItemPrice = (arrOfitem) => {
    const price = arrOfitem
      .map((item) => item.price)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    return price;
  };
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(totalItemPrice(cartItems));
  }, [cartItems]);
  return (
    <main>
      <section>
        <div className="products">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
        <div className="order-summery">
          Order summery
          <p>Selected Items: {cartItems.length}</p>
          <p>Total Price: ${totalPrice}</p>
        </div>
      </section>
    </main>
  );
};

export default Body;
