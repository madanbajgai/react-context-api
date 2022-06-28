import { useContext, useState } from "react";
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import cartContext from "../../CartContext";

const Card = ({ name, price }) => {
  const { addToCart } = useContext(cartContext);
  return (
    <div onClick={() => addToCart(name, price)} className="card">
      <div className="product-box">
        <IoShirtOutline />
      </div>
      <div className="purchase">
        <h3>{name}</h3>
        <AiFillShopping />
      </div>
      <h4>${price}</h4>
    </div>
  );
};

export default Card;
