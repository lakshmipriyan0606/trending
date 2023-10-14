import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css" 
import data from "../../data";
import Nav from "../Nav";
import Footer from "../Footer";

const MainProduct = () => {
    const [fav, setFav] = useState(false);
    AOS.init(
        {
            duration: 3000
        }
    )

    function favitem() {
      setFav(!fav);
    }
  
  return (
    <div>
        <Nav/>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5 my-12" >
        {data.map(function (item) {
          return (
            <div
              className="mt-6 flex flex-col justify-center items-center gap-3 shadow-lg hover:shadow-2xl rounded-2xl cursor-pointer p-4"
              data-aos="fade-down" key={item.id}
           >
              <div className="relative group mt-3">
                <img
                  src={item.img}
                  className="cursor-pointer rounded-lg"
                  alt="product-img"
                />
                <p
                  className={
                    item.feature === "NEW"
                      ? "absolute top-5 left-0 bg-white  text-base font-semibold  w-16 text-center border-2 border-gray-800"
                      : "absolute top-5 left-0 bg-black text-white  text-base font-semibold  w-16 text-center"
                  }
                >
                  {item.feature}
                </p>
                <div className="absolute right-5 top-7 text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaHeart
                    onClick={favitem}
                    className={
                      fav
                        ? "text-red-600 cursor-pointer transition-colors duration-100"
                        : "cursor-pointer transition-colors duration-300"
                    }
                  />
                </div>
              </div>
              <h5 className="text-xl font-semibold">{item.title}</h5>
              <p className="text-2xl  font-semibold ">
                $ {item.price}{" "}
                <span className="text-base pl-2 text-[#E53637] line-through ">
                  $77.89
                </span>
              </p>
              <Rating rating={item.ratingValue} />
              <Link to={`/product/${item.id}`} className="text-decoration-none">
                <button className="border-2 text-base border-black bg-white text-dark p-3 hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded-md">
                  Buy Now
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default MainProduct;
