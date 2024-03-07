import React from "react";
import person from "../assets/person.jpg";
import { Link } from "react-router-dom";
const About = ({ contact_meRef, scrollToSection }) => {
  const handleNavLinkClick = (sectionId) => {
    // Pass the selected section as a URL parameter
    scrollToSection(sectionId);
  };
  return (
    <div className="xl:py-20">
      <div className="grid grid-cols-1 xl:grid-cols-3 my-10 space-y-5 xl:space-x-28  md:px-5 xl:px-20">
        <div className=" w-full space-y-5 px-5 mx-auto  col-span-2">
          <div className="py-5 xl:px-20 space-y-5">
            <div className="xl:pt-10 xl:px-20 ">
              <h2 className="text-lg font-semibold text-blue-400">
                Hello, i am
              </h2>

              <h1 className="text-4xl md:text-6xl font-bold">Bekalu Atto</h1>
              <h1 className="text-5xl md:text-6xl w-screen font-bold text-slate-500">
                Software Developer
              </h1>
            </div>
            <div className="xl:px-20 mt-4 md:mt-auto ">
              <p className="text-md ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quibusdam ab quis ex, id laborum dolores odio adipisci
                necessitatibus, perferendis culpa molestias magni corrupti
                quidem doloremque sit asperiores quia fugit.
              </p>
            </div>
            <div className="xl:px-20 mt-5">
              <button className="bg-red-500 text-white font-semibold hover:bg-white hover:text-red-500 hover:border hover:border-red-500 duration-300 py-3 px-5 rounded-lg">
                <Link
                  to={{ pathname: "/", search: "?section=contact_me" }}
                  onClick={() => handleNavLinkClick(contact_meRef)}
                >
                  Contact me
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-1/2  items-center lg:w-full xl:w-2/3 hidden md:block md:m-auto">
          <img src={person} alt="Bekalu Atto" className="md:rounded-3xl lg:rounded-full lg:mt-14" />
        </div>
      </div>
    </div>
  );
};
export default About;
