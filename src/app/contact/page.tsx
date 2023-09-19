import React from "react";
import TransitionEffect from "../Components/TransitionEffect";

export default function Contact() {
  return (
    <>
    <TransitionEffect />

    <div className=" bg-500 bg-white -mt-14 dark:bg-black">
      <div
        className=" flex items-center max-w-7xl mx-auto leading-8 mb-10 "
        id="contact"
      >
        <div className="text-purple-700 px-10 mt-32 mx-auto">
          <h1 className="text-center text-6xl text-black font-bold dark:text-white ">Contact</h1>
          <p className="text-center my-5 text-black font-semibold text-3xl dark:text-white">Take A Coffee & Chat With Me</p>
          <form action="https://formspree.io/f/xdordpne" method="POST">
            <div className=" text-black ml-12" >
              <input
                placeholder="Whats your good name?"
                type="text"
                required
                name="name"
                className="p-2 w-80 bg-transparent border-2 rounded-md  focus:outline-pink-600 outline-double text-black dark:text-white"
              />
            </div>
            <div className="my-5 ml-12">
              <input
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-pink-600 outline-double text-black dark:text-white"
                placeholder="Your email"
                type="email"
                name="email"
              />
            </div>
            <div className=" ml-12">
              <textarea
                rows={8}
                name="meraMessage"
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-pink-600 outline-double text-black dark:text-white"
                placeholder="What you want to say..."
              />
            </div>
            <button
              type="submit"
              
              className="mx-auto block px-6 py-4 text-2xl font-semibold  rounded-md  bg-gradient-to-b text-white dark:bg-white dark:text-black bg-black hover:animate-pulse"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div>
      <h1 className=' bg-white text-white dark:bg-black dark:text-black'>
      mamammamam
      </h1>
     </div>
    </div>
    </>
  );
}
