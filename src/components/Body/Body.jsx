import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Body.css";
import { Link } from "react-router-dom";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCartItems(savedCart);
  }, [products]);

  const addToCart = (product) => {
    // const newCart = [...cartItems, product];
    let newCart = [];
    const exists = cartItems.find((pd) => pd.id == product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cartItems, product];
    } else {
      product.quantity = exists.quantity + 1;
      const remaining = cartItems.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCartItems(newCart);
    addToDb(product.id);
  };
  const handleClearCart = () => {
    setCartItems([]);
    deleteShoppingCart();
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
          <Cart items={cartItems} handleClearCart={handleClearCart}>
            <Link to="/order"> Order Preview</Link>
          </Cart>
        </div>
      </section>
    </main>
  );
};

export default Body;
