import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/gocpt-logo.png";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <motion.section
      initial={{
        x: 120,
        opacity: 0.2,
        duration: 1,
      }}
      animate={{
        x: 0,
        opacity: 1,
        ease: "easeInOut",
      }}
      exit={{
        x: 120,
        opacity: 0.5,
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      className="flex max-lg:flex-col-reverse h-screen w-full text-white flex-1 font-[jura]"
      id="signup"
    >
      <div className="left flex flex-col justify-center items-center md:gap-12 gap-6 px-6 py-6 bg-white/10 backdrop-blur-xl md:rounded-r-2xl max-lg:rounded-t-2xl">
        <p className="text-2xl max-lg:text-xl">Already have an Account?</p>
        <Link
          to="/login"
          className="md:w-1/2 text-xl max-sm:text-lg bg-gradient-to-b from-[#5f5182] to-[#2e3254] rounded-md border border-pinkPrimary/80 flex items-center justify-center shadow-[0_0_50px_#ffffff99]"
        >
          Login
        </Link>
      </div>

      <div className="right flex flex-col flex-1 justify-around items-center">
        <img src={logo} alt="logo" className="w-24 h-12" />
        <form
          action="#"
          className="flex flex-col justify-center items-center gap-6 bg-white/2 border border-white/25 md:w-1/2 w-4/5 backdrop-blur-xl md:h-4/5 min-h-3/5 rounded-xl p-4"
        >
          <p className="md:py-12 text-3xl max-lg:text-lg">Sign Up</p>
          <div className="field flex flex-col gap-1 w-full px-12">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="focus:ring-0 border text-lg text-white/70 border-white/60 bg-black/55 drop-shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>
          <div className="field flex flex-col gap-1 w-full px-12">
            <label htmlFor="email">E-mail Address</label>
            <input
              type="text"
              name="email"
              placeholder="E-mail Address"
              className="focus:ring-0 border text-lg text-white/70 border-white/60 bg-black/55 drop-shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>
          <div className="field flex flex-col gap-1 w-full px-12">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="focus:ring-0 border text-lg text-white/70 border-white/60 bg-black/55 drop-shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>
          <div className="field flex flex-col gap-1 w-full px-12">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="focus:ring-0 border text-lg text-white/70 border-white/60 bg-black/55 drop-shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>
          <button
            type="submit"
            className=" text-xl max-sm:text-lg bg-gradient-to-b from-[#5f5182] to-[#2e3254] rounded-md border border-pinkPrimary/80 flex items-center justify-center px-1 shadow-[0_0_50px_#ffffff99]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Signup;
