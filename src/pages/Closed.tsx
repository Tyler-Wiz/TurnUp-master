import React from "react";
import close from "../assets/close.png";

type Props = {};

const Closed = (props: Props) => {
  return (
    <section className=" px-5 h-screen bg-black overflow-auto text-white flex flex-col justify-center items-center font-Montserrat">
      <img src={close} alt="" width="40%" className="md:w-80" />
      <p className="text-2xl my-2 capitalize">registration is closed</p>
      <div className="mt-40">
        <p>#TurnUpTheFlavour</p>
      </div>
    </section>
  );
};

export default Closed;
