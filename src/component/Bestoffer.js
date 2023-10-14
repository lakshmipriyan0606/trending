import React, { useEffect } from 'react'
import bagImage from "../img/product-sale.png"
import Timer from './TimeCounter'
import { Link } from 'react-router-dom'
// import AOS from "aos";
// import "aos/dist/aos.css"

const Bestoffer = () => {

  // useEffect(()=>{
  //   AOS.init({duration:2000})
  // },[])


  return (
    <div className='bg-[#F3F2EE] p-6  flex flex-col justify-center items-center  mt-32' >
       <div className='relative' >
           <div >
                <img src={bagImage} alt='bag-img'/>
           </div>
         <div className='absolute bottom-36 left-48 bg-black w-28 h-28 rounded-full p-5 text-white flex flex-col justify-center items-center text-lg'>
            <h5>Sale of</h5>
            <h5>$29.99</h5>
         </div>
       </div>
       <div className='flex flex-col gap-3 mb-2'>
        <h1 className='uppercase text-[#E53637] text-lg mt-3  font-medium'>Deal of the Week</h1>
        <h2 className='text-4xl'>Multi-pocket Chest Bag Black</h2>
       </div>
     <Timer/>
 <Link to="/product"> <button className='w-28 mt-8 bg-black text-white rounded p-1 text-lg hover:bg-black hover:bg-opacity-70 transition-opacity duration-500 '>Shop Now</button></Link>
    </div>
  )
}

export default Bestoffer