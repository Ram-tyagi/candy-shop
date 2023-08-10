import React, { useContext } from "react";

import cartContext from "../Store/cart-context";

const Cart = () => {
  const { cartdata } = useContext(cartContext);

  
  console.log(cartdata);

  return (
    <div>
      <h1>Cart</h1>
      <h2>{cartdata}</h2>
    </div>
  );
};

export default Cart;