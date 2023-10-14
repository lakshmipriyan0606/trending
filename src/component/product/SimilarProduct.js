import React, { useState , useEffect } from "react";
import ProductList from "./ProductList";
import axios from "axios";

const SimilarProduct = () => {
  const [items , setItems] = useState([]);
  useEffect(() => {
    try {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setItems(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  const filteredItems = items.filter((item) => item.category === "men's clothing");

  return (
    <div>
      <div className="mt-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5 transition-opacity">
        {filteredItems.map((item, index) => (
          <ProductList
            key={index}
            itemImg={item.image}
            title={item.title}
            price={item.price}
            feature={item.feature}
            ratingValue={item.rating}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SimilarProduct;
