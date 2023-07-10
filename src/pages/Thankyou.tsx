import React from "react";
import send from "../assets/send.png";

type Props = {};

const Thankyou = (props: Props) => {
  return (
    <section className=" px-5 h-screen bg-black overflow-auto text-white flex flex-col justify-center items-center font-Montserrat">
      <img src={send} alt="" width="40%" className="md:w-80" />
      <p className="text-2xl my-2">Thank you for registering.</p>
      <p className="text-xl">An Invite would be sent to your email .</p>
      <div className="mt-32 text-center text-slate-100">
        <p>#TurnUpTheFlavour</p>
      </div>
    </section>
  );
};

export default Thankyou;
