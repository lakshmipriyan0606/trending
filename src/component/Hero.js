
import React, { useState } from "react";
import bg_hero1 from "../img/hero/hero-1.jpg";
import bg_hero2 from "../img/hero/hero-2.jpg"; 
import { FaArrowLeft, FaArrowRight,FaFacebookF,FaTwitter,FaPinterest ,FaInstagram} from "react-icons/fa";

const Hero = () => {

  const arrow= <FaArrowRight/>

  const backgroundImages = [bg_hero1, bg_hero2]; 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [content, setContent] = useState(false);
  const handleLeftArrowClick = () => {
    if (!content) {
      setContent(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
        );
        setContent(false);
      }, 300); 
    }
  };

  const handleRightArrowClick = () => {
    if (!content) {
      setContent(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setContent(false);
      }, 300);
    }
  };
  
  const currentBackgroundImage = backgroundImages[currentImageIndex];

  return (
    <div
      style={{ backgroundImage: `url(${currentBackgroundImage})` }}
      className="w-full h-[600px] bg-cover bg-center lg:h-[750px]"
    >
      <div className={`flex flex-col gap-8 justify-center h-[500px] p-4 pt-32   ${content ? 'opacity-0 transition-all duration-500' : 'opacity-1 transition-all duration-500'}`}>
       <div className="lg:pt-52 lg:pl-28 lg:flex lg:gap-11 lg:flex-col flex flex-col gap-14 mt-20">
       <h6 className="text-[#E53637] text-xl">Summer Collection</h6>
        <h2 className="text-black font-bold text-4xl">Fall - Winter Collections 2030</h2>
        <p className="text-[#3D3D3D] md:w-[400px]">    
          A specialist label creating luxury essentials. Ethically crafted with
          an unwavering commitment to exceptional quality.
        </p>
        <button className='w-40 bg-black flex justify-center items-center text-white rounded p-1 text-lg hover:bg-black hover:bg-opacity-70 transition-opacity duration-500  gap-3'>Shop Now  {arrow}</button>
       </div>
        <div className="flex justify-between mt-5 w-full">
          <FaArrowLeft
            className="text-3xl cursor-pointer"
            onClick={handleLeftArrowClick}
          />
          <FaArrowRight
            className="text-3xl cursor-pointer transition-all duration-500"
            onClick={handleRightArrowClick}
          />
        </div>
        <div className="flex gap-10 mt-7 lg:mt-2 lg:ml-16">
         <FaFacebookF/> <FaInstagram/> <FaTwitter/> <FaPinterest/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
