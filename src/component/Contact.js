import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="mt-20">
        <iframe
          className="w-full h-[400px]"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=dharmapuri+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        >
          <a href="https://www.maps.ie/population/">Population calculator map</a>
        </iframe>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5">
        <div>
          <div className="mt-6">
            <h1 className="text-[#E53637] text-lg pl-4">INFORMATION</h1>
            <h2 className="text-4xl p-3">Contact Us </h2>
            <p className="text-gray-500 p-3">
              As you might expect of a company that began as a high-end interiors
              contractor, we pay strict attention.
            </p>
          </div>
          <h3>
            <span className="text-2xl font-semibold p-3">Tamil Nadu</span>
            <p className="text-gray-500 p-3"> 195 E Parker Square Dr, Parker, CO 801 +43 982-314-0958</p>
          </h3>
          <h4>
            <span className="text-2xl font-semibold p-3">Dharmapuri </span>
            <p className="text-gray-500 p-3">
              109 Avenue Léon, 63 Clermont-Ferrand +12 345-423-9893
            </p>
          </h4>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center pt-4">
          <input
            type="text"
            placeholder="Name"
            className="w-5/6 h-10 text-lg border border-gray-300 rounded-md p-2 outline-none text-gray-400"
          />
          <input
            type="text"
            placeholder="Email"
            className="w-5/6 h-10 text-lg border border-gray-300 rounded-md p-2 outline-none text-gray-400"
          />
          <textarea
            placeholder="Message"
            className="w-5/6 h-26 text-lg border border-gray-300 rounded-md p-2 outline-none text-gray-400"
          />
          <button
            className="border-2 mt-4 border-black bg-white text-dark p-3 hover:bg-black hover:text-white cursor-pointer transition-colors duration-500 rounded-md mb-6"
          >
            Send Message
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
