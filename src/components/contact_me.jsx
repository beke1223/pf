import React, { useState } from "react";
import './firebase_config';
import contact_me from "../assets/contact_me.png";
  // Import the functions you need from the SDKs you need

import {getFirestore,addDoc,collection} from 'firebase/firestore';
const ContactMe = () => {

 const [email,setEmail]=useState("");
 const [msg,setMessage]=useState("");

//  apiKey: "AIzaSyBrXHuYKylc3-SEfv71TtoNWl8R4_Vbl7E",
//  authDomain: "my-portifolio-c3e65.firebaseapp.com",
//  databaseURL: "https://my-portifolio-c3e65-default-rtdb.firebaseio.com",
//  projectId: "my-portifolio-c3e65",
//  storageBucket: "my-portifolio-c3e65.appspot.com",
//  messagingSenderId: "282426099987",
//  appId: "1:282426099987:web:8c4914878f7a72a32272e6",
//  measurementId: "G-WNNY462HMF"
 

const db=getFirestore();

const sendDataToFirestore=async()=>{
  const docRef=await addDoc(
    collection(db,'Contact_me_messages'),{
      email:email,
      message:msg
    }
  );
  alert("Thank you for your feedback");
}

  return (
    <div className="" id="Contact_me">
      <div className="bg-gray-300 mb-5 mt-5">
        <h2 className="px-20 text-red-500 text-3xl py-4 font-extrabold stroke-slate-950">
          Contact Me
        </h2>
      </div>

      <div className="space-y-3 px-3 md:px-20 grid md:grid-cols-2 w-full h-full py-20">
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
            onChange={(e)=>setEmail(e.target.value)}
          />
          <textarea name="message" id="message" cols="30" rows="10" className="border w-full outline-none p-5" placeholder="Enter Your message" onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button onClick={sendDataToFirestore} className="bg-blue-950 py-3 px-5 text-white rounded-md  hover:bg-white hover:text-blue-950 hover:border hover:border-blue-950 duration-300">Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
