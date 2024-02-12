import React from "react";
import skill from "../assets/lang/skill.png";
import { Link } from "react-scroll";

const projectSet = [
  {
    cover: skill,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis tenetur beatae saepe accusantium dolores officiis nobis dignissimos perspiciatis reiciendis deserunt totam accusamus modi eligendi aliquid placeat, molestias est inventore!",
    path: "#",
    title: "Project",
  },
  {
    cover: skill,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis tenetur beatae saepe accusantium dolores officiis nobis dignissimos perspiciatis reiciendis deserunt totam accusamus modi eligendi aliquid placeat, molestias est inventore!",
    path: "#",
    title: "Project",
  },
  {
    cover: skill,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis tenetur beatae saepe accusantium dolores officiis nobis dignissimos perspiciatis reiciendis deserunt totam accusamus modi eligendi aliquid placeat, molestias est inventore!",
    path: "#",
    title: "Project",
  },
];

const Projects = () => {
  return (
    <div className=" " id="Projects">
      <div className="bg-gray-300 mb-5 px-20">
        <h2 className="text-red-500 text-3xl py-4 font-extrabold stroke-slate-950">
          Projects
        </h2>
      </div>

      <div className="grid  space-y-5 md:grid-cols-2 lg:grid-cols-3 m-auto bg-blue-950 py-24 md:px-16">
        {projectSet.map((project, index) => {
          return (
            <div
              key={index}
              className="md:w-3/4 border flex flex-col justify-center p-5 gap-5 text-white "
            >
              <img src={project.cover} alt={project.title} />
              <p>{project.title}</p>
              <p>{project.desc}</p>
              <Link to="./ProjectDetail">
                <button className="border py-3">Learn more ...</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
