import React from 'react'
import payment_img from "../img/payment.png"
import { FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className='bg-black text-white p-4 flex flex-col gap-5 md:gap-7 pt-12 w-full md:text-center'>
         <div>
         <h1 className="text-3xl font-bold text-white">
          Trend<span className=" text-[#E53637] ">ing</span>
        </h1>
        <p className='text-gray-400 my-3'>The customer is at the heart of our unique business model, which includes design.</p>
        <img src={payment_img} alt='pay-img' className='md:mx-auto'/>
         </div>
         <div>
            <h1 className='text-lg font-semibold'>NEWLETTER</h1>
            <p className='text-gray-400 my-3'>Be the first to know about new arrivals, look books, sales & promos!</p>
         </div>
         <div className='flex justify-center items-center border-b-2 border-white w-3/4 md:w-[250px] placeholder-opacity-60 mx-auto '>
         <input type='text' className='bg-transparent outline-none  p-2' placeholder='Your email' />
         <FaEnvelope/>
         </div>
         <h1 className='w-full md:w-3/4 h-[2px] bg-gray-700  mx-auto'>  </h1>
         <div>
            <h2 className='text-base font-thin text-center'>Copyright © 20232 All rights reserved | Design By ❤️  <span className='text-[#E53637]'>Lakshmi Priyan</span> </h2>
         </div>
        </div>
    </div>
  )
}

export default Footer