
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import CartItem from "./CartItem";
import axios from "axios";

const CartList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setItems(res.data);
    });
  }, []);

  const { id } = useParams();

  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <Nav />
        <p>Product not found</p>
        <div className="mt-44">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <CartItem product={product} />
      <div className="mt-96">
        <Footer />
      </div>
    </div>
  );
};

export default CartList;

