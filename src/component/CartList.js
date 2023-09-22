import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import data from "../data";
import CartItem from "./CartItem";

const CartList = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));

  return (
    <div>
      <Nav />
      <CartItem product={product} />
      <div className="mt-44">
      <Footer/>
      </div>
    </div>
  );
};

export default CartList;
