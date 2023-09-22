
import React from 'react'
import in1 from "../img/instagram/instagram-1.jpg"
import in2 from "../img/instagram/instagram-2.jpg"
import in3 from "../img/instagram/instagram-3.jpg"
import in4 from "../img/instagram/instagram-4.jpg"
import in5 from "../img/instagram/instagram-5.jpg"
import in6 from "../img/instagram/instagram-6.jpg"

const Gallery = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-6 place-items-center gap-5 '>

        <img src={in1} alt='img' className='w-[300px]'/>
        <img src={in2} alt='img' className='w-[300px]'/>
        <img src={in3} alt='img' className='w-[300px]'/>
        <img src={in4} alt='img' className='w-[300px]'/>
        <img src={in5} alt='img' className='w-[300px]'/>
        <img src={in6} alt='img' className='w-[300px]'/>
    </div>
  )
}

export default Gallery