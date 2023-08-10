import React, { useContext } from "react";
import cartContext from "../Store/cart-context";
import ButtonData from "./ButtonData";

const Display = () => {
  const { products } = useContext(cartContext);
  return (
    <div>
      <h1>Diplay</h1>
      {products.map((pro) => {
        return (
          <p>
            {pro.candyname} - {pro.describtion} - Rs. {pro.price}
            <ButtonData />
          </p>
        );
      })}
    </div>
  );
};

export default Display;