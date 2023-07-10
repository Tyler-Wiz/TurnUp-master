import React, { useEffect, useState } from "react";
import port from "../assets/port.jpg";
import { useForm } from "react-hook-form";
import instance from "../firebase/instance";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [success, setSuccess] = useState<number>(0);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let date = new Date();
  let day = date.getDate();

  const onSubmit = (data: any) => {
    instance.post(`/Portharcourt${day}.json`, data).then((res) => {
      setSuccess(res.status);
    });
  };

  useEffect(() => {
    if (success === 200) {
      navigate("/thankyou");
    }
  }, [navigate, success]);

  return (
    <section className=" px-5  h-screen bg-black overflow-auto font-Montserrat">
      <div className=" md:max-w-screen-sm mx-auto">
        <div className="flex justify-center items-center my-3">
          <img src={port} alt="" width="100%" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-20 flex flex-col justify-center ">
          <p className="text-yellow-500 text-center text-xl my-6">Register</p>
          <label className="text-white text-md mb-2 capitalize font-semibold">
            Name
          </label>
          <input
            className="mb-5 py-2 outline-none px-4"
            {...register("Name", { required: true })}
          />
          {errors.Name?.type === "required" && (
            <p className=" text-red-600 mb-2">Name is required</p>
          )}
          <label className="text-white text-md mb-2 capitalize font-semibold">
            Email Address
          </label>
          <input
            type="email"
            className="mb-5 py-2 outline-none px-4"
            {...register("mail", {
              required: "Email Address is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.mail?.type === "required" && (
            <p className=" text-red-600 mb-2">Email is required</p>
          )}
          <label className="text-white text-md mb-2 capitalize font-semibold">
            Instagram handle
          </label>
          <input
            className="mb-5 py-2 outline-none px-4"
            {...register("Insta", { required: "Email Address is required" })}
          />
          {errors.Insta?.type === "required" && (
            <p className=" text-red-600 mb-2">Instagram is required</p>
          )}
          <button
            type="submit"
            className=" px-10 py-2 mt-4 bg-yellow-500 text-lg font-bold uppercase">
            Register
          </button>
        </form>
        <div className="mt-20 text-center text-slate-100">
          <p>#TurnUpTheFlavour</p>
        </div>
      </div>
    </section>
  );
};

export default Register;
