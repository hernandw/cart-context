import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";


const CartElement = () => {
  const { cart } = useContext(MyContext);
  return (
    <div>
      {cart.map((p) => (
        <div className="cart-content" key={p.id}>
            <img src={p.img} alt="" />
            <h3 className="name">{p.name}</h3>
            <h4 className="price">{p.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default CartElement;
