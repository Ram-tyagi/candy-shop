import React, { useState } from "react";
import cartContext from "./cart-context";

const ContextProvider = (props) => {
  const [products, Setproducts] = useState([]);
  const [cartdata, Setcartdata] = useState(0);

  const addtocart = (newcandyname, newdescribtion, newprice) => {
    Setproducts((newaddtocart) => {
      return [
        ...newaddtocart,
        {
          candyname: newcandyname,
          describtion: newdescribtion,
          price: newprice,
          key: Math.random().toString()
        }
      ];
    });
  };

  const totalcartvalue = (newinputdata) => {
    const totalvalue = cartdata + newinputdata;
    Setcartdata(totalvalue);
  };

  return (
    <cartContext.Provider
      value={{ products, addtocart, totalcartvalue, cartdata }}
    >
      {props.children}
    </cartContext.Provider>
  );
};

export default ContextProvider;