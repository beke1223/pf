import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-center mt-10 w-full bg-blue-950 h-60 items-center rounded-tl-full">
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
    </div>
  );
};
export default Footer;
