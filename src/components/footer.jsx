import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaArrowAltCircleUp } from "react-icons/fa";
const Footer = ({ topRef, scrollToSection }) => {
  const handleNavLinkClick = (sectionId) => {
    // Pass the selected section as a URL parameter
    scrollToSection(sectionId);
  };
  return (
    <div className="flex justify-center mt-10 w-full bg-blue-950 h-28 md:h-60 items-center rounded-tl-full">
      <div className="space-y-4">
        <h2 className="font-semibold text-lg text-white text-center">
          Social Media
        </h2>
        <div className="flex gap-5 text-white">
          <a href="http://">
            {" "}
            <FaLinkedin className="h-7 w-7" />
          </a>
          <a href="http://">
            {" "}
            <SiWhatsapp className="h-7 w-7" />{" "}
          </a>
          <a href="http://">
            {" "}
            <MdEmail className="h-7 w-7" />
          </a>
          <a href="http://">
            {" "}
            <FaGithub className="h-7 w-7" />{" "}
          </a>
        </div>
      </div>

      <div className="absolute right-5  md:right-20  shadow-lg hover:shadow-slate-300  rounded-full cursor-pointer  animate-bounce">
        <Link
          to={{ pathname: "/", search: "?section=top" }}
          onClick={() => handleNavLinkClick(topRef)}
        >
          <FaArrowAltCircleUp
            size={35}
            color="white"
            className="hover:scale-125 ease-in-out transition-all duration-700"
          />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
