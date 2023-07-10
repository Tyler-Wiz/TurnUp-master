import React from "react";
import { Link } from "react-router-dom";

const AgeVerify = () => {
  return (
    <div className="flex flex-col items-center h-screen overflow-y-hidden bg-black text-white font-Montserrat capitalize">
      <h1 className="text-5xl mt-56 mb-10">WELCOME</h1>
      <h3 className="text-md mb-1 font-light">
        You must be 18 years of age to enter this site.
      </h3>
      <h3 className="text-md font-light">Please verify your age</h3>
      <div className="mt-10 flex gap-6">
        <button className="border-2 px-8 py-2 border-yellow-500 text-lg font-bold uppercase">
          I'm not 18
        </button>
        <Link to={"/consent"}>
          <button
            type="submit"
            className="border-2 px-6 py-2 border-yellow-500 bg-yellow-500 text-lg font-bold uppercase">
            I'm above 18
          </button>
        </Link>
      </div>
      <div className="mt-40">
        <p>#TurnUpTheFlavour</p>
      </div>
    </div>
  );
};

export default AgeVerify;
