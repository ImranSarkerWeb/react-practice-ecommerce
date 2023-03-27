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
        <div>
          Order summery
          <p>Selected Items: {cartItems.length}</p>
        </div>
      </section>
    </main>
  );
};

export default Body;
