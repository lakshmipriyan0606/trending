import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidenavbar from "./Sidenavbar";
import { Link } from "react-router-dom";

const Nav = () => {
  const [sideNavbar, setSideNavbar] = useState(false);

  function toggleSidenav() {
    setSideNavbar(!sideNavbar);
  }

  return (
    <div>
      <div className=" bg-[#F3F2EE] fixed top-0 z-50  w-full ">
        <div className="flex  justify-between items-center p-4 md:hidden">
          <h1 className="text-3xl font-bold md:pt-2">
            Trend<span className="text-[#E53637]">ing</span>
          </h1>
          <FaBarsStaggered
            className="text-2xl cursor-pointer md:hidden mr-7"
            onClick={toggleSidenav}
          />
        </div>
        <div className="hidden md:flex md:justify-between  p-3">
          <h1 className="text-3xl font-bold md:pt-2">
            Trend<span className="text-[#E53637]">ing</span>
          </h1>
          <ul className="mt-3 md:gap-9 md:mr-10 lg:gap-20 text-xl hidden md:flex">
            <li>
              <Link to="/" className="text-center hover:text-[#E53637] duration-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-center hover:text-[#E53637] duration-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-center hover:text-[#E53637] duration-500 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-center hover:text-[#E53637] duration-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Side Navigation Bar */}
      <Sidenavbar sideNavbar={sideNavbar} setSideNavbar={setSideNavbar} />
    </div>
  );
};

export default Nav;
