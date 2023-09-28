import React, { useEffect } from "react";
import blog1 from "../img/blog/blog-1.jpg";
import blog2 from "../img/blog/blog-2.jpg";
import blog3 from "../img/blog/blog-3.jpg";
import { FaCalendarCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"
const NewTrends = () => {


  useEffect(()=>{
    AOS.init({duration:2000})
  },[])


  return (
    <div >
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-[#E53637] mt-6 text-xl  text-center mb-5">
          LATEST NEWS
        </h1>
        <h2 className="text-4xl font-semibold text-center mb-5">
          Fashion New Trends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-4"  >
        <div className="p-4 flex flex-col" data-aos="flip-left" >
          <img src={blog1} alt="blog-img" />
          <div className="bg-white text-black relative bottom-8 w-[200px] p-2  mx-auto  ">
            <h1 className="text-gray-600 font-normal flex justify-center items-center gap-2  py-2  ">
              {" "}
              <FaCalendarCheck /> 18 February 2020
            </h1>
            <p className="font-semibold p-3 text-lg text-center">
              What Curling Irons  Are the Best Ones
            </p>
          </div>
        </div>
        <div className="p-4  flex flex-col" data-aos="flip-left" >
          <img src={blog2} alt="blog-img" />
          <div className="bg-white text-black relative bottom-8 w-[200px] p-2 mx-auto  ">
            <h1 className="text-gray-600 font-normal flex justify-center items-center gap-2  py-2 ">
              {" "}
              <FaCalendarCheck /> 26 May 2020
            </h1>
            <p className="font-semibold p-3 text-lg text-center">
             Eternity Brans Do Last Forever
            </p>
          </div>
        </div>
        <div className="p-4  flex flex-col" data-aos="flip-left" >
          <img src={blog3} alt="blog-img" />
          <div className="bg-white text-black relative bottom-8 w-[200px] p-2 mx-auto  flex flex-col justify-center items-center  ">
            <h1 className="text-gray-600 font-normal flex justify-center items-center gap-2  py-2 ">
              {" "}
              <FaCalendarCheck /> 02 July 2021
            </h1>
            <p className="font-semibold p-3 text-lg text-center">
             The Health Benefits Of Sunglasses
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewTrends;
