import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const ProjectDetails = (props) => {
  return (
     <div>
          <h2>{props.title}</h2>
          <h2>{props.image}</h2>
          <h2>{props.desc}</h2>
           
     </div>
  );
};
export default ProjectDetails;
