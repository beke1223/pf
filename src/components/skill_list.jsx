import React from "react";
import html from "../assets/lang/html.jpg";
import skill from "../assets/lang/skill.png";

import css from "../assets/lang/css.png";
import tailwind from "../assets/lang/tailwind-css.png";
import bootstrap from "../assets/lang/bootstrap.jpg";
import js from "../assets/lang/js.jpg";
import reactjs from "../assets/lang/react-js.png";
import django from "../assets/lang/django.png";
import laravel from "../assets/lang/laravel.png";
import node from "../assets/lang/node-js.png";
import express from "../assets/lang/express.png";
import flutter from "../assets/lang/flutter.png";
import git from "../assets/lang/git.jpg";
import python from "../assets/lang/python.png";
import java from "../assets/lang/java.png";
import mongo from "../assets/lang/mongo-db.png";
import mysql from "../assets/lang/mysql.jpg";
import figma from "../assets/lang/figma.png";
import php from "../assets/lang/php.jpg";

const skillset = [
  { text: "HTML", cover: html },
  { text: "CSS", cover: css },
  { text: "Tailwind css", cover: tailwind },
  { text: "Bootstrap", cover: bootstrap },
  { text: "JS", cover: js },
  { text: "Python", cover: python },
  { text: "Java", cover: java },
  { text: "React js", cover: reactjs },
  { text: "Php", cover: php },
  { text: "laravel", cover: laravel },
  { text: "django", cover: django },
  { text: "node js", cover: node },
  { text: "express js", cover: express },
  { text: "Mongo db", cover: mongo },
  { text: "mysql", cover: mysql },
  { text: "Flutter", cover: flutter },
  { text: "Git", cover: git },
  { text: "Figma", cover: figma },
];

const SkillList = () => {
  return (
    <div >
      <div className="bg-gray-300 px-20">
        <h2 className="text-red-500 text-3xl py-4 font-extrabold stroke-slate-950">
          Skills
        </h2>
      </div>

      <div className="md:px-20 grid  lg:grid-cols-2 w-full h-full py-32">
        <div className="flex justify-center ">
          <img src={skill} className=" " alt="skill" />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:space-x-7 lg:space-y-7 space-y-5">
          {skillset.map((skill, index) => {
            return (
           <div key={index}  className={`text-center  flex flex-col  ${index==0&& 'mt-5'}   items-center justify-center p-2 hover:scale-125 `}>
              <div
                key={index}
                className="w-28 h-28"
              >
                <img src={skill.cover} alt={skill.text} className="border border-red-500 rounded-full w-full h-full hover:border-blue-500 hover:border-4 transition-all duration-300"/>
                <p className="decoration underline decoration-blue-500 decoration-2">{skill.text}</p>
              </div>     
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SkillList;
