import React, { useState } from "react";
import data from "../../data";
import ProductList from "./ProductList";

const SimilarProduct = () => {
  const [items] = useState(data);
  const filteredItems = items.filter((item) => item.feature === "NEW");

  return (
    <div>
      <div className="mt-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-5 transition-opacity">
        {filteredItems.map((item, index) => (
          <ProductList
            key={index}
            itemImg={item.img}
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
