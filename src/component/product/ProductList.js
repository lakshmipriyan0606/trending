import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css" 

const ProductList = ({id, itemImg, title, price, feature, ratingValue }) => {
  const [fav, setFav] = useState(false);

  function favitem() {
    setFav(!fav);
  }

  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <div className="mt-6 flex flex-col justify-center items-center gap-3 shadow-lg hover:shadow-2xl rounded-2xl cursor-pointer p-4"  data-aos="zoom-in">
      <div className="relative group mt-3">
        <img
          src={itemImg}
          className="cursor-pointer rounded-lg"
          alt="product-img"
        />
        <p
          className={
            feature === "NEW"
              ? "absolute top-5 left-0 bg-white  text-base font-semibold  w-16 text-center border-2 border-gray-800"
              : "absolute top-5 left-0 bg-black text-white  text-base font-semibold  w-16 text-center"
          }
        >
          {feature}
        </p>
        <div className="absolute right-5 top-7 text-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <FaHeart
            onClick={favitem}
            className={
              fav
                ? "text-red-600 cursor-pointer transition-colors duration-300"
                : "cursor-pointer transition-colors duration-300"
            }
          />
        </div>
      </div>
      <h5 className="text-xl font-semibold">{title}</h5>
      <p className="text-2xl  font-semibold ">$ {price} <span className="text-base pl-2 text-[#E53637] line-through ">$77.89</span></p>
      <Rating rating={ratingValue} />
      <Link to={`/product/${id}`} className="text-decoration-none">
        <button className="border-2 text-base border-black bg-white text-dark p-3 hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded-md">
          Buy Now
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
