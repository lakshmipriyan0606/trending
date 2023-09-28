import React from "react";
import Nav from "./Nav";
import blog4 from "../img/blog/blog-4.jpg"
import blogDetail from "./blogdetail";
import { FaCalendarCheck } from "react-icons/fa";
import Footer from "./Footer";

const Blog = () => {
  return (
    <div>
        <Nav/>
      <div
        style={{ backgroundImage: `url(${blog4})` }}
        className="w-full h-[300px]  md:h-[450px]  bg-cover bg-center mt-20"
      >
        <h1 className="flex justify-center  text-3xl text-white font-semibold items-center h-[250px]"> OUR BLOG</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            blogDetail.map(blog=>{
                return <div key={blog.id} >
                   <div className="p-4 flex flex-col">
                <img src={blog.img} alt="blog-img" />
                <div className="bg-white text-black relative bottom-8 w-[200px] p-2  mx-auto  ">
                  <h1 className="text-gray-600 font-normal flex justify-center items-center gap-2  py-2  ">
                    <FaCalendarCheck /> {blog.date}
                  </h1>
                  <p className="font-semibold p-3 text-lg text-center">
                 {blog.desc}
                  </p>
                </div>
              </div>
                </div> 
            })
          }
      </div>
      <Footer/>
    </div>
  );
};

export default Blog;
