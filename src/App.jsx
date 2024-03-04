import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import { ProjectProvider } from "./components/context";
import ProjectDetail from "./components/project_details";
import { useRef } from "react";
import CV from "./components/pdf_viewer";
function App() {
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contact_meRef = useRef(null);

  const scrollToSection = (ref) => {
    console.log("from scrollToSection", ref);
    ref.current.scrollIntoView({ behavior: "smooth" });

    // Add 'active' class to trigger the transition after scrolling
    ref.current.classList.add("active");

    // Remove 'active' class from other sections
    [skillRef, projectsRef, contact_meRef].forEach((sectionRef) => {
      if (sectionRef !== ref && sectionRef.current) {
        sectionRef.current.classList.remove("active");
      }
    });
  };
  return (
    <ProjectProvider>
      <BrowserRouter className="">
        <NavBar
          skillRef={skillRef}
          projectsRef={projectsRef}
          contact_meRef={contact_meRef}
          scrollToSection={scrollToSection}
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                skillRef={skillRef}
                projectsRef={projectsRef}
                contact_meRef={contact_meRef}
                scrollToSection={scrollToSection}
              />
            }
          />
          <Route path="/ProjectDetail" element={<ProjectDetail />} />
          <Route path="/getCv" element={<CV/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;
