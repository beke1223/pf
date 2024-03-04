import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import skill from "../assets/lang/skill.png";
import { FaRegCircle } from "react-icons/fa6";
const projectSet = [
  {
    cover: skill,
    desc: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis tenetur beatae saepe accusantium dolores officiis nobis dignissimos perspiciatis reiciendis deserunt totam accusamus modi eligendi aliquid placeat, molestias est inventore!",
    path: "#",
    title: "Project",
    for: "mobile",
  },
  {
    cover: skill,
    desc: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis tenetur beatae saepe accusantium dolores officiis nobis dignissimos perspiciatis reiciendis deserunt totam accusamus modi eligendi aliquid placeat, molestias est inventore!",
    path: "#",
    title: "Project",
    for: "web",
  },
  {
    cover: skill,
    desc: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis tenetur beatae saepe accusantium dolores officiis nobis dignissimos perspiciatis reiciendis deserunt totam accusamus modi eligendi aliquid placeat, molestias est inventore!",
    path: "#",
    title: "Project",
    for: "mobile",
  },
  {
    cover: skill,
    desc: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis tenetur beatae saepe accusantium dolores officiis nobis dignissimos perspiciatis reiciendis deserunt totam accusamus modi eligendi aliquid placeat, molestias est inventore!",
    path: "#",
    title: "Project",
    for: "web",
  },
  {
    cover: skill,
    desc: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis tenetur beatae saepe accusantium dolores officiis nobis dignissimos perspiciatis reiciendis deserunt totam accusamus modi eligendi aliquid placeat, molestias est inventore!",
    path: "#",
    title: "Project",
    for: "web",
  },
  {
    cover: skill,
    desc: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis tenetur beatae saepe accusantium dolores officiis nobis dignissimos perspiciatis reiciendis deserunt totam accusamus modi eligendi aliquid placeat, molestias est inventore!",
    path: "#",
    title: "Project",
    for: "mobile",
  },
];

const ProjectDetail = () => {
  const location = useLocation();
  const state = location.state;
  const [activeState, setActiveState] = useState();

  let filteredProjectList = projectSet.filter(
    (project, index) => index != state
  );

  useEffect(()=>{
    !activeState && setActiveState(projectSet[state]);
  },[])


  function NotNull(){
    if (state && !activeState ){return projectSet[state];}
    else {return activeState;}
  }
 
  return (
    <div className="md:space-y-10 lg:px-32  md:py-4 md:px-5">
      {  activeState && (
        <div className="  border flex flex-col  items-center p-3 md:p-10 space-y-3">
          {activeState.for == "mobile" && (
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <img
                  src={activeState.cover}
                  className="hidden dark:block w-[272px] h-[572px]"
                  alt={activeState.title}
                />
              </div>
            </div>
          )}
          {activeState.for == "web" && (
            <div className="w-full h-full">
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                  <img
                    src={activeState.cover}
                    className="h-[156px] md:h-[278px] w-full rounded-xl"
                    alt={activeState.title}
                  />
                </div>
              </div>
              <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>
            </div>
          )}

          <p className=" md:w-2/3   text-2xl font-bold">
            {activeState.title}
          </p>
          <p className="md:w-2/3   text-wrap">{activeState.desc}</p>
        </div>
      )}
      <div className="grid md:space-x-5   space-y-5 md:grid-cols-2 lg:grid-cols-3 px-4   py-4 lg:py-10 ">
        {filteredProjectList.map((project, index) => {
          return (
            <div
              key={index}
              className={` border border-black flex flex-col justify-center p-5 gap-5  lg:mr-16 ${
                index == 0 ? "hidden" : ""
              }  `}
            >
              <img src={project.cover} alt={project.title} />
              <p>{project.title}</p>
              <p>{project.desc}</p>

              <button className="border py-3 px-5  hover:bg-white hover:text-blue-950 hover:border hover:border-blue-950 duration-300" onClick={()=>{
                setActiveState(project);
              }}>
                Learn more ...
              </button>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};
export default ProjectDetail;
