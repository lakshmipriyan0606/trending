import React, { useEffect } from "react";
import img1 from "../img/about/about-us.jpg";
import img2 from "../img/about/testimonial-author.jpg";
import team1 from "../img/about/team-1.jpg";
import team2 from "../img/about/team-2.jpg";
import team3 from "../img/about/team-3.jpg";
import team4 from "../img/about/team-4.jpg";
import Nav from "./Nav";
import { FaQuoteRight } from "react-icons/fa";
import clientImg from "./client-img";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

    const About = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({ duration: 2000 });
      }, []);


  return (
    <div>
      <Nav />
      <div className="mt-16 flex flex-col justify-center ">
        <div>
          <img src={img1} alt="about-img" className="p-3 w-full object-fill" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-5 mb-5 ">
          <div>
            <h1 className="p-3 text-2xl font-semibold">Who We Are ?</h1>
            <p className="p-2 text-gray-700">
              Contextual advertising programs sometimes have strict policies
              that need to be adhered too. Let’s take Google as an example.
            </p>
          </div>
          <div>
            <h1 className="p-3 text-2xl font-semibold">Who We Do ?</h1>
            <p className="p-2 text-gray-700">
              In this digital generation where information can be easily
              obtained within seconds, business cards still have retained their
              importance.
            </p>
          </div>
          <div>
            <h1 className="p-3 text-2xl font-semibold">Why Choose Us</h1>
            <p className="p-2 text-gray-700">
              A two or three storey house is the ideal way to maximise the piece
              of earth on which our home sits, but for older or infirm people.
            </p>
          </div>
        </div>
        <div className="bg-[#F3F2EE] p-10 flex flex-col gap-5 ">
          <FaQuoteRight className="text-[#E53637] mx-auto text-4xl " />
          <p className="font-semibold text-xl text-center pt-3">
            “Going out after work? Take your butane curling iron with you to the
            office, heat it up, style your hair before you leave the office and
            you won’t have to make a trip back home.”
          </p>
          <div className="flex gap-4 justify-center items-center">
            <img src={img2} alt="person-img" className="rounded-full" />
            <div className="text-lg font-semibold">
              <h1>Augusta Schultz</h1>
              <h2 className="text-gray-700">Fashion Design</h2>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h1 className="text-[#E53637] text-center text-base">OUR TEAM</h1>
          <h2 className="text-center p-4 text-2xl">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              className="flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <img
                src={team1}
                alt="person-img"
                className="rounded-3xl p-2 mx-auto "
              />
              <h1 className="text-2xl font-semibold p-3">John Simth</h1>
              <h2 className="text-lg text-gray-700 pl-3">Fashion Design</h2>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              data-aos="zoom-out"
            >
              <img
                src={team2}
                alt="person-img"
                className="rounded-3xl p-2 mx-auto "
              />
              <h1 className="text-2xl font-semibold p-3">Christine Wise</h1>
              <h2 className="text-lg text-gray-700 pl-3">C.E.O</h2>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              data-aos="zoom-in"
            >
              <img
                src={team3}
                alt="person-img"
                className="rounded-3xl p-2 mx-auto "
              />
              <h1 className="text-2xl font-semibold p-3">Sean Robbins</h1>
              <h2 className="text-lg text-gray-700 pl-3">Manager</h2>
            </div>
            <div
              className="flex flex-col justify-center items-center"
              data-aos="zoom-out"
            >
              <img
                src={team4}
                alt="person-img"
                className="rounded-3xl p-2 mx-auto "
              />
              <h1 className="text-2xl font-semibold p-3">Lucy Myner</h1>
              <h2 className="text-lg text-gray-700 pl-3">Techincal Assisant</h2>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#E53637] text-center text-base">PARTNER</h1>
          <h2 className="text-center p-4 text-2xl">Happy Client</h2>
          <div className="bg-[#F3F2EE] px-2 py-5  ">
            <div className="grid grid-cols-2 md:grid-cols-4  place-items-center gap-4 ">
              {clientImg.map((client) => {
                return (
                  <img key={client.id} src={client.img} alt="client-img" />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
