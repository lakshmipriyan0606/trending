import React from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidenavbar = ({ sideNavbar, setSideNavbar }) => {
  function closeBtn() {
    setSideNavbar(!sideNavbar);
  }

  return (
    <div>
      <div
        className={
          sideNavbar
            ? "fixed top-0  shadow-2xl bg-[#FFFFFF] w-[80%] z-50 h-screen text-black transition-all duration-700 left-0"
            : "  transition-all duration-700 -left-3/4 "
        }
      >
        {sideNavbar ? (
          <div className="pt-8">
            <div className="flex justify-end items-end mr-6 pb-5 text-2xl cursor-pointer">
              <FaXmark onClick={closeBtn} />
            </div>
            <ul className="mt-3 p-4 flex gap-5 flex-col text-xl">
              <Link to={`/`} className="border-b border-gray-300 text-center">
                <li>Home</li>
              </Link  >
              <Link to={`/product`}  className="border-b border-gray-300 text-center"> <li>Product</li></Link>
              <Link to={`/about`}  className="border-b border-gray-300 text-center">
                <li>About</li>
              </Link>
              <Link to={`/blog`}  className="border-b border-gray-300 text-center">
                <li>Blog</li>
              </Link>
              <Link to={"/contact"}  className="border-b border-gray-300 text-center"><li>Contact</li></Link>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Sidenavbar;
