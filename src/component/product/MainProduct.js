import React, { useState ,useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css" 
import Nav from "../Nav";
import Footer from "../Footer";
import axios from "axios";
import Loading from "./Loading/Loading";

const MainProduct = () => {
    const [fav, setFav] = useState(false);
    const [items ,setItems] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      setTimeout(() => {
        axios.get("https://fakestoreapi.com/products").then(res=>setItems(res.data))
        AOS.init({duration:3000})
       setLoading  (false)
      }, 3000);
     },[])
   

    function favitem() {
      setFav(!fav);
    }
  
  return (
    <div>
        <Nav/>
        {
          loading ? <div className="mt-20"> <Loading /></div>  :  
          <>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-5   xl:gap-5 my-12 xl:p-9" >
          {items.map(function (item) {
            return (
              <div
                className="mt-6 flex flex-col justify-center items-center gap-3 shadow-lg hover:shadow-2xl rounded-2xl cursor-pointer w-full  p-9 h-[500px] xl:w-[350px]"
                data-aos="zoom-in" key={item.id} 
             >
                <div className="relative group mt-3">
                  <img
                    src={item.image}
                    className="cursor-pointer rounded-lg w-[200px] h-[200px] object-fill"
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
                  <div className="absolute -right-6 top-7 text-lg opacity-0 group-hover:opacity-100 transition-opacity">
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
                <h5 className=" mx-3 text-center">{item.title}</h5>
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
           <Footer  />
          </>
        }
    </div>
  );
};

export default MainProduct;
