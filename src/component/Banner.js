import React, { useEffect } from 'react'
import banner1 from "../img/banner/banner-1.jpg"
import banner2 from "../img/banner/banner-2.jpg"
import banner3 from "../img/banner/banner-3.jpg"
import AOS from "aos";
import "aos/dist/aos.css"
import { Link } from 'react-router-dom';



const Banner = () => {

  
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
    <div className='mt-9 p-5 flex flex-col gap-3 lg:justify-center lg:items-center group ' data-aos="zoom-out-down" >
        <img src={banner1} alt="banner-img" className="w-[400px] h-[300px] relative " / >
          <div className='absolute top-0 left-0 bg-[#F3F2EE] bg-opacity-0  w-full h-full group-hover:bg-opacity-70 transition-all duration-500  flex justify-center items-center'>
           <Link to="/product" ><button className='opacity-0 group-hover:opacity-100 text-2xl text-gray-800 font-normal transition-all duration-500  hover:border-b-[#E53637] hover:border-b-2'  >ShopNow</button></Link> 
          </div>
        <h1 className='text-2xl font-bold'>Clothing Collection 2030</h1>
    </div>
    <div className='mt-9 p-5 flex flex-col gap-3 lg:justify-center lg:items-center group ' data-aos="zoom-out-down" >
        <img src={banner2} alt="banner-img" className="w-[400px] h-[300px] relative " / >
          <div className='absolute top-0 left-0 bg-[#F3F2EE] bg-opacity-0  w-full h-full group-hover:bg-opacity-70 transition-all duration-500  flex justify-center items-center'>
           <Link to="/product" ><button className='opacity-0 group-hover:opacity-100 text-2xl text-gray-800 font-normal transition-all duration-500  hover:border-b-[#E53637] hover:border-b-2'  >ShopNow</button></Link> 
          </div>
        <h1 className='text-2xl font-bold'>Clothing Collection 2030</h1>
    </div>
    <div className='mt-9 p-5 flex flex-col gap-3 lg:justify-center lg:items-center group ' data-aos="zoom-out-down" >
        <img src={banner3} alt="banner-img" className="w-[400px] h-[300px] relative " / >
          <div className='absolute top-0 left-0 bg-[#F3F2EE] bg-opacity-0  w-full h-full group-hover:bg-opacity-70 transition-all duration-500  flex justify-center items-center'>
           <Link to="/product" ><button className='opacity-0 group-hover:opacity-100 text-2xl text-gray-800 font-normal transition-all duration-500  hover:border-b-[#E53637] hover:border-b-2'  >ShopNow</button></Link> 
          </div>
        <h1 className='text-2xl font-bold'>Accessories</h1>
    </div>
</div>
  )
}

export default Banner