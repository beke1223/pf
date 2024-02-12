import React from "react";
import contact_me from "../assets/contact_me.png";
const ContactMe = () => {
  return (
    <div className="" id="Contact_me">
      <div className="bg-gray-300 mb-5 mt-5">
        <h2 className="px-20 text-red-500 text-3xl py-4 font-extrabold stroke-slate-950">
          Contact Me
        </h2>
      </div>

      <div className="px-20 grid md:grid-cols-2 w-full h-full py-20">
        <div className="flex">
          <img src={contact_me} alt="contact me" className="" />
        </div>
        <div className="space-y-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email"
            className="outline-none border w-full px-5 py-3"
          />
          <textarea name="message" id="message" cols="30" rows="10" className="border w-full outline-none p-5" placeholder="Enter Your message"></textarea>
        <button className="bg-blue-950 py-3 px-5 text-white rounded-md">Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
