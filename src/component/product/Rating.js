import React from 'react'
import { FaStarHalfStroke,FaStar} from "react-icons/fa6";
const Rating = ({rating}) => {
  return (
    <div className='flex gap-1 text-yellow-500'>
     {
        rating >=1 ?  <FaStar/> :  rating >=0.5 ?  <FaStarHalfStroke/> : <FaStar/>  
     }
     {
        rating >=2 ?  <FaStar/> :  rating >=1.5 ?  <FaStarHalfStroke/> : <FaStar/>  
     }
     {
        rating >=3 ?  <FaStar/> :  rating >=2.5 ?  <FaStarHalfStroke/> : <FaStar/>  
     }
     {
        rating >=4 ?  <FaStar/> :  rating >=3.5 ?  <FaStarHalfStroke/> : <FaStar/>  
     }
     {
        rating >=5 ?  <FaStar/> :  rating >=4.5 ?  <FaStarHalfStroke/> : <FaStar/>  
     }
    </div>
  )
}

export default Rating













