import React from "react";
import person from "../assets/person.jpg";
const About = () => {
  return (
    <div className="xl:py-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 my-10 space-y-5 xl:space-x-28  px-5 xl:px-20">
        <div className=" w-full space-y-5 px-5 py-10 mx-auto rounded-xl  border-2 border-red-500 ">
          <div className="py-5 xl:px-20">
            <div className="xl:py-10 xl:px-20">
              <h2 className="text-lg font-semibold">Hello I'm a</h2>
              <h1 className="text-2xl font-semibold">Software Developer</h1>
            </div>
            <div className="xl:px-20">
              <p className="text-md ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                quibusdam ab quis ex, id laborum dolores odio adipisci
                necessitatibus, perferendis culpa molestias magni corrupti
                quidem doloremque sit asperiores quia fugit.
              </p>
            </div>
            <div className="xl:px-20 mt-5">
              <button className="bg-red-500 text-white font-semibold hover:bg-red-300 py-3 px-5 rounded-lg">
                Contact me
              </button>
            </div>
          </div>
        </div> 
          <div className=" w-full xl:w-1/2  ">
            <img src={person} alt="Bekalu Atto" className="" />
          </div>
         
      </div>
    </div>
  );
};
export default About;
