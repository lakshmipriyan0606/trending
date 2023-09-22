import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidenavbar from "./Sidenavbar";
import { Link } from "react-router-dom";

const Nav = () => {
  const [sideNavbar, setSideNavbar] = useState();

  function sidenav() {
    setSideNavbar(!sideNavbar);
  }

  return (
    <div>
      <div className="flex justify-between  items-center p-4 md:hidden">
        <h1 className="text-3xl font-bold md:pt-2">
          Trend<span className=" text-[#E53637] ">ing</span>
        </h1>
        <FaBarsStaggered
          className="text-2xl cursor-pointer md:hidden"
          onClick={sidenav}
        />
      </div>
      <div className="hidden md:flex md:justify-between p-3 ">
      <h1 className="text-3xl font-bold md:pt-2">
          Trend<span className=" text-[#E53637] ">ing</span>
        </h1>
        <ul className="mt-3 md:gap-10  lg:gap-20  text-xl hidden md:flex ">
              <Link to={`/`} className=" text-center hover:text-[#E53637] duration-500 transition-colors">
                <li>Home</li>
              </Link  >
              {/* <Link  className=" text-center hover:text-[#E53637] duration-500 transition-colors"> <li>Shop</li></Link> */}
              <Link to={`/about`}  className=" text-center">
                <li className="hover:text-[#E53637] duration-500 transition-colors">About</li>
              </Link>
              <Link to={`/blog`}  className=" text-center hover:text-[#E53637] duration-500 transition-colors">
                <li>Blog</li>
              </Link>
              <Link to={"/contact"}  className=" text-center hover:text-[#E53637] duration-500 transition-colors"><li>Contact</li></Link>
            </ul>
        </div>
      <Sidenavbar sideNavbar={sideNavbar} setSideNavbar = {setSideNavbar}/>
    </div>
  );
};

export default Nav;
