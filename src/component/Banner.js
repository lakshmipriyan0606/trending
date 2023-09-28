import React, { useEffect } from 'react'
import banner1 from "../img/banner/banner-1.jpg"
import banner2 from "../img/banner/banner-2.jpg"
import banner3 from "../img/banner/banner-3.jpg"
import AOS from "aos";
import "aos/dist/aos.css"



const Banner = () => {

  
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
    <div className='mt-9 p-5 flex flex-col gap-3 lg:justify-center lg:items-center' data-aos="zoom-out-down" >
        <img src={banner1} alt="banner-img" className="w-[400px]" / >
        <h1 className='text-2xl font-bold'>Clothing Collection 2030</h1>
    </div>
    <div className=' p-5 flex flex-col gap-3 mt-10 lg:justify-center lg:items-center' data-aos="fade-up">
        <img src={banner2} alt="banner-img" className="w-[400px] "/>
        <h1 className='text-2xl font-bold'>Accessories</h1>
    </div>
    <div className='p-5 flex flex-col gap-3 md:mt-5 lg:mt-9 lg:justify-center lg:items-center' data-aos="fade-down">
        <img src={banner3} alt="banner-img" className="w-[400px] lg:h-[380px]"/>
        <h1 className='text-2xl font-bold'>Shoes Spring 2030</h1>    
    </div>
</div>
  )
}

export default Banner