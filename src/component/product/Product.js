import React, { useState, useEffect } from "react";
import data from "../../data";
import ProductList from "./ProductList";


const Product = ({itemCount,setItemCount}) => {
  const [items, setItems] = useState(data);
  const [showItems, setShowItems] = useState(false);

  const filterItems = (feature) => {
    setShowItems(false); 
    setTimeout(() => {
      const filteredItems = data.filter((item) => item.feature === feature);
      setItems(filteredItems);
      setShowItems(true); 
    }, 200); 
  };

  useEffect(() => {
    setShowItems(true); 
  }, []);

  return (
    <div className="mt-7">
      <div className="flex gap-2 p-2 mt-5 justify-around items-center">
        <button
          className="border-2 border-black bg-white text-dark p-3 text-lg hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded"
          onClick={() => filterItems("BEST")}
        >
          Best Seller
        </button>
        <button
          className="border-2 border-black bg-white text-dark p-3 hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded text-lg "
          onClick={() => filterItems("NEW")}
        >
          New Arrival
        </button>
        <button
          className="border-2 border-black bg-white text-dark p-3 hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded text-lg"
          onClick={() => filterItems("SALE")}
        >
          Hot Sales
        </button>
      </div>

      <div className={`mt-6 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 transition-opacity ${showItems ? 'opacity-100 transition-opacity duration-300' : 'opacity-0 transition-opacity duration-300'}`}  >
        {items.map((item, index) => (
          <ProductList
            key={index}
            itemImg={item.img}
            title={item.title}
            price={item.price}
            feature={item.feature}
            ratingValue={item.rating}
            id = {item.id}
            itemCount={itemCount} 
            setItemCount={setItemCount}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
