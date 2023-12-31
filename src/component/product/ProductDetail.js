
import { Link, useParams } from "react-router-dom";
import Rating from "./Rating";
import Footer from "../Footer";
import Nav from "../Nav";
import SimilarProduct from "./SimilarProduct";
import { useEffect, useState } from "react";
import ProductDescription from "./ProductDescription";
import AOS from "aos";
import "aos/dist/aos.css" 
import axios from "axios";

const ProductDetail = () => {

  const  [item , setItem] = useState([])

  useEffect(()=>{
   axios.get("https://fakestoreapi.com/products").then(res=>setItem(res.data))
    AOS.init({duration:2000})
  },[])

  const { id } = useParams();
  const product = item.find((item) => item.id === parseInt(id));

 const  sizeList = [
    {
    id : 1,
    size : "S"
    },
    {
    id : 2,
    size : "L"
    },
    {
    id : 3,
    size : "M"
    },
    {
    id : 4,
    size : "XL"
    },
]

   const  [sizes,setSize] = useState("")

   
   function handleSize(e) {
    setSize(e.target.value)
   }

  if (!product) {
    return (
      <div className="p-5 text-2xl font-semibold text-center">
        Product not found
      </div>
    );
  }
  const { review, description, price, title, rating, image } = product;
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center   shadow m-6  mt-24 rounded-lg p-4 ">
        <div className="shadow-lg lg:w-[400px] lg:h-[350px] rounded-lg " data-aos="zoom-in">
          <img src={image} alt="product-img" className=" w-full md:h-full rounded-3xl object-cover p-8" />
        </div>
        <div className="flex flex-col gap-4 p-6 justify-center items-center" data-aos="flip-left">
          <h1 className=" font-semibold text-base  lg:text-3xl text-center ">{title}</h1>
          <h2 className="text-center w-[250px] md:w-[300px]  text-gray-600">{description}</h2>
          <h3 className="text-xl font-bold ">
           $ {price}{" "}
            <span className="line-through ml-3 text-red-600 text-base">
              $69.65
            </span>
          </h3>
          <h1 className="flex justify-center items-center gap-2">
            <Rating rating={rating} /> <span>{review} (review)</span>
          </h1>
          <div>
             <h1 className="text-center text-2xl">Size</h1>
            <div className="flex gap-3">
            {
            sizeList.map(function(sizeitem){
              return <input key={sizeitem.id} className= {sizes === sizeitem.size ?  " bg-black text-white border text-lg   mt-4 border-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer  " : "rounded-full cursor-pointer w-10 h-10 flex items-center justify-center border text-lg mt-4 border-black"} type="button" value={sizeitem.size} onClick={handleSize}/>
            })
          }
            </div>
          </div>
          <Link to={`/cart/${id}`} className="text-decoration-none">
          <button className="border-2 mt-4 border-black bg-white text-dark p-3 hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded-md"
          >
            Add to cart
          </button>
      </Link>
        </div>
      </div>
      <ProductDescription/>
      <div className="text-center font-semibold pt-6 text-2xl">
        <h1>
          Similar <span className="text-[#E53637]">Product</span>
        </h1>
        <SimilarProduct />
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
