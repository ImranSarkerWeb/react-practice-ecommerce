import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Body.css";

const Body = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <main>
      <section>
        <div className="products">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
        <div>Order summery</div>
      </section>
    </main>
  );
};

export default Body;
