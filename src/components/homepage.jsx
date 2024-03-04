import { useEffect, useRef } from "react";
import About from "./about";
import AboutMe from "./about_me";
import ContactMe from "./contact_me";
import Projects from "./projects";
import SkillList from "./skill_list";
import "../home_page.css";

function HomePage({ skillRef, projectsRef, contact_meRef }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedSection = params.get("section");

    // Scroll to the appropriate section based on the URL parameter
    if (selectedSection === "skill") {
      skillRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedSection === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedSection === "contact_me") {
      contact_meRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [skillRef, projectsRef, contact_meRef]);

  return (
    <div className="">
      <About />
      <AboutMe />
      <div ref={skillRef} id="skill" className="scroll-sections1">
        <SkillList />
      </div>
      <div ref={projectsRef} id="projects" className="scroll-sections1">
        <Projects />{" "}
      </div>
      <div ref={contact_meRef} id="contact_me" className="scroll-sections1">
        <ContactMe />{" "}
      </div>
    </div>
  );
}

export default HomePage;
