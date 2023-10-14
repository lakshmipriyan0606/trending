import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import axios from "axios";
import Loading from "./Loading/Loading";

const Product = ({ itemCount, setItemCount }) => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setItems(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(true);
    }
  }, []);

  const filterItems = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  return (
    <div className="mt-7">
      <h1 className="text-4xl my-3 font-bold p-4">
        Product <span className="text-[#E53637]">Overview</span>
      </h1>
      <div className="flex gap-2 p-2 mt-5 justify-around items-center">
        <button
          className="border-2 border-black bg-white text-dark p-3 text-lg hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded"
          onClick={() => filterItems("women's clothing")}
        >
          Clothing
        </button>
        <button
          className="border-2 border-black bg-white text-dark p-3 hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded text-lg"
          onClick={() => filterItems("electronics")}
        >
          Electronics
        </button>
        <button
          className="border-2 border-black bg-white text-dark p-3 hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded text-lg"
          onClick={() => filterItems("jewelery")}
        >
          Jewelry
        </button>
      </div>

      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className={`mt-6 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-opacity  gap-3 p-6 md:gap-5`}>
          {filteredItems.map((item, index) => (
            <ProductList
              key={index}
              itemImg={item.image}
              title={item.title}
              price={item.price}
              ratingValue={item.rating.count}
              id={item.id}
              itemCount={itemCount}
              setItemCount={setItemCount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
