import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";

const NavBar = ({ skillRef, projectsRef, contact_meRef, scrollToSection }) => {
  const pdfUrl = `${import.meta.env.VITE_REACT_APP_PDF_URL}`;
  const openPdfInNewTab = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    console.log(pdfUrl);

    link.click();
    document.body.removeChild(link); // Clean up the anchor element
  };

  const [showNavBar, setShowNavBar] = useState(false);
  const Toggle = () => {
    setShowNavBar(!showNavBar);
  }; 
  const handleNavLinkClick = (sectionId) => {
    // Pass the selected section as a URL parameter
    scrollToSection(sectionId);
  };
  return (
    <div>
      <nav
        className={`relative top-0 flex ${
          !showNavBar
            ? "flex-row"
            : "flex-col transition-all duration-700 ease-in-out"
        }  md:flex-row justify-around py-5 rounded-bl-lg rounded-br-lg bg-blue-950 px-5 md:px-20 text-white items-center`}
      >
        <div className="w-full md:w-1/2 flex justify-between">
          <Link to="/">
            <h2 className="text-3xl  font-bold cursor-pointer">Bekalu Atto</h2>
          </Link>

          <div onClick={Toggle} className="md:collapse cursor-pointer">
            {!showNavBar ? (
              <RxHamburgerMenu size={35} />
            ) : (
              <ImCancelCircle size={35} />
            )}
          </div>
        </div>

        <div
          className={` ${
            showNavBar ? "flex w-full" : "hidden"
          } md:flex  md:flex-row flex-col md:gap-5  text-lg font-semibold`}
        >
          <Link
            to={{ pathname: "/", search: "?section=skill" }}
            onClick={() => handleNavLinkClick(skillRef)}
          >
            <h2 className="hover:bg-red-500 hover:text-white md:px-9 py-3 rounded-md cursor-pointer">
              Skills
            </h2>
          </Link>
          <Link
            to={{ pathname: "/", search: "?section=projects" }}
            onClick={() => handleNavLinkClick(projectsRef)}
          >
            <h2 className="hover:bg-red-500 hover:text-white md:px-5 py-3 rounded-md cursor-pointer">
              Projects
            </h2>
          </Link>
          <Link
            to={{ pathname: "/", search: "?section=contact_me" }}
            onClick={() => handleNavLinkClick(contact_meRef)}
          >
            <h2 className="hover:bg-red-500 hover:text-white  md:px-5 py-3 rounded-md cursor-pointer">
              Contact me
            </h2>
          </Link>
          <Link onClick={openPdfInNewTab}>
            <h2 className="hover:bg-red-500 hover:text-white md:px-5 py-3   rounded-md cursor-pointer">
              Get CV
            </h2>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
