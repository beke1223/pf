import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import HomePage from "./components/homepage";
import { ProjectProvider } from "./components/context";
import ProjectDetail from "./components/project_details";
import { useEffect, useRef } from "react"; 
function App() {
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const contact_meRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedSection = params.get("section");

    // Scroll to the appropriate section based on the URL parameter
    switch (selectedSection) {
      case "skill":
        skillRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact_me":
        contact_meRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "top":
        topRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        // Scroll to the home section by default
         
    }
  }, []);

  const scrollToSection = (ref) => {
    console.log("from scrollToSection", ref);
    ref.current.scrollIntoView({ behavior: "smooth" });

    // Add 'active' class to trigger the transition after scrolling
    ref.current.classList.add("active");

    // Remove 'active' class from other sections
    [skillRef, projectsRef, contact_meRef , topRef].forEach((sectionRef) => {
      if (sectionRef !== ref && sectionRef.current) {
        sectionRef.current.classList.remove("active");
      }
    });
  };

  return (
    <ProjectProvider>
      <BrowserRouter className="">
        <div ref={topRef}>
        <NavBar
          topRef={topRef}
          skillRef={skillRef}
          projectsRef={projectsRef}
          contact_meRef={contact_meRef}
          scrollToSection={scrollToSection}
          />
          </div>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                topRef={topRef}
                skillRef={skillRef}
                projectsRef={projectsRef}
                contact_meRef={contact_meRef}
                scrollToSection={scrollToSection}
              />
            }
          />
          <Route path="/ProjectDetail" element={<ProjectDetail />} />
        </Routes>
        <Footer topRef={topRef} scrollToSection={scrollToSection}/>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;
