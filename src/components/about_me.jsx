import React from "react";
import contact_me from "../assets/contact_me.png";
const AboutMe = () => {
  return (
    <div>
      <div className="bg-gray-300 mb-5 mt-5 ">
        <h2 className="px-20 text-red-500 text-3xl py-4 font-extrabold stroke-slate-950">
          About Me
        </h2>
      </div>

      <div className="md:px-20 bg-blue-950 py-32 flex lg:justify-center">
        <div className="lg:w-1/2 border-4 py-10 md:px-20 px-4 rounded-lg">
          <p className="text-white text-md first-letter:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            deleniti molestiae? Asperiores nobis nisi quidem culpa similique
            consequuntur impedit, obcaecati voluptate sed, ut sint odit alias
            quo quasi incidunt dolore. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi, deleniti molestiae? Asperiores nobis nisi
            quidem culpa similique consequuntur impedit, obcaecati voluptate
            sed, ut sint odit alias quo quasi incidunt dolore.

          </p>
          <div className="mt-5">

          <button className="bg-red-500 text-white font-semibold hover:bg-red-300 py-3 px-5 rounded-lg">Get CV</button>
          </div>
                
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
