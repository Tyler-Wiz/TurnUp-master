import React from "react";
import { Link } from "react-router-dom";
import port from "../assets/port.jpg";

const Consent = () => {
  return (
    <section className="h-full bg-black overflow-auto ">
      <div className="px-5 flex flex-col h-screen bg-black font-Montserrat capitalize  md:max-w-screen-md mx-auto">
        <div className="flex justify-center items-center my-3">
          <img src={port} alt="" width="100%" />
        </div>
        <div className=" text-slate-100 mt-10">
          <h1 className="text-xl md:text-2xl ">Terms of Use</h1>
          <p className="text-sm md:text-2xl text-yellow-500">
            Last updated Friday May 19, 2023
          </p>
        </div>
        <div className=" my-10">
          <h1 className="text-lg md:text-2xl text-slate-100">Image Right</h1>
          <p className="text-md md:text-xl mt-2 text-gray-400 ">
            By taking part in this event, you grant the event organizers full
            right to use the images resulting from the photography/video
            filming, and any reproductions or adaptations of public purposes.
          </p>
          <p className="text-md md:text-xl mt-2 text-gray-400 ">
            This might include (but not limited to), the right to use them in
            printed and online publicity, social media and press releases.
          </p>
        </div>
        <div className="">
          <h1 className="text-lg md:text-xl text-slate-100">Data Privacy</h1>
          <p className="text-md mt-2 text-gray-400 ">
            We will process your personal data to reserve a place for you at the
            event and provide you with event updates.
          </p>
        </div>
        <div className="mt-16 flex justify-center gap-6 sticky">
          <Link to={"/"}>
            <button
              type="submit"
              className="px-10 py-2 bg-zinc-400 text-lg font-bold uppercase">
              DECLINE
            </button>
          </Link>
          <Link to={"/register"}>
            <button
              type="submit"
              className=" px-10 py-2  bg-yellow-500 text-lg font-bold uppercase">
              ACCEPT
            </button>
          </Link>
        </div>
        <div className="mt-20 text-center md:mt-10  text-slate-100">
          <p>#TurnUpTheFlavour</p>
        </div>
      </div>
    </section>
  );
};

export default Consent;
