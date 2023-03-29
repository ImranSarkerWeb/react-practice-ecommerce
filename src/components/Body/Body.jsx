import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
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
    addToDb(product.id);
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
          <Cart items={cartItems}></Cart>
        </div>
      </section>
    </main>
  );
};

export default Body;
