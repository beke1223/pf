import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const NavBar = () => {

    const scrollToComponent = (componentId) => {
        scroll.scrollTo(componentId, {
          duration: 500, // Duration of the scroll animation (in milliseconds)
          offset: -300, // Offset from the top (adjust as needed)
          smooth: true, // Enable smooth scrolling
        });
      };


  return (
    <div>
      <nav className="flex justify-around py-5 rounded-bl-lg rounded-br-lg bg-blue-950 px-20 text-white">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold">Bekalu Atto</h2>
        </div>
        <div className="flex gap-10  text-lg font-semibold">
          <h2 className="hover:bg-red-500 hover:text-white px-9 py-3 rounded-md cursor-pointer"
          onClick={() => {console.log("skill"); scrollToComponent("skills")}}
          >
            Skills
          </h2>
          <h2 className="hover:bg-red-500 hover:text-white px-5 py-3 rounded-md cursor-pointer"
          onClick={() => scrollToComponent("Projects")}
          >
            Projects
          </h2>
          <h2 className="hover:bg-red-500 hover:text-white px-5 py-3 rounded-md cursor-pointer"
          onClick={() => scrollToComponent("Contact_me")}
          >
            Contact me
          </h2>
          <h2 className="hover:bg-red-500 hover:text-white px-5 py-3 rounded-md cursor-pointer"
           
          >
            Get CV
          </h2>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
