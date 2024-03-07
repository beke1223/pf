import { useEffect, useRef } from "react";
import About from "./about";
import AboutMe from "./about_me";
import ContactMe from "./contact_me";
import Projects from "./projects";
import SkillList from "./skill_list";
import "../home_page.css";

function HomePage({topRef, skillRef, projectsRef, contact_meRef,scrollToSection }) {
   
 

  return (
    <div className="">
      
      <About  contact_meRef={contact_meRef} scrollToSection={scrollToSection}/>
     
      
      <AboutMe />
      <div ref={skillRef}  >
        <SkillList />
      </div>
      <div ref={projectsRef}  >
        <Projects />{" "}
      </div>
      <div ref={contact_meRef}  >
        <ContactMe />{" "}
      </div>
    </div>
  );
}

export default HomePage;
