import About from "./about"
import AboutMe from "./about_me"
import ContactMe from "./contact_me"
import Projects from "./projects"
import SkillList from "./skill_list"

function HomePage() {
 
  return (
    <div className=''>
    <About/>
    <AboutMe/>
    <SkillList/>
    <Projects/> 
    <ContactMe/> 
    </div>
  )
}

export default HomePage
