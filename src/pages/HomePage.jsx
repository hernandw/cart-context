import React, { useContext } from "react";
import { MyContext } from "../components/context/MyContext";
import Product from "../components/products/Product";
import "../components/products/Product.css";
import Navbar from "../components/navbar/Navbar";
const HomePage = () => {
  const { data, cart, setCart } = useContext(MyContext);
  return (
    <>
    <Navbar />
      <div className="product-card-container">
      {data.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
    </>
  );
};

export default HomePage;
