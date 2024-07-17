import React from "react";
import { useSelector } from "react-redux";
import FeatureCard from "./cards/FeatureCard";
import { callToActionLinks } from "../../public/utils";
import { Link } from "react-router-dom";

const CallToAction = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <section
      className={` ${
        theme === "dark" ? "bg-gray-900" : "bg-nav"
      } w-full px-8 md:px-16 flex flex-col items-center py-4 gap-8`}
    >
      <p className="text-4xl max-sm:text-2xl">How Can You Contribute?</p>
      <div className="cardsContainer flex justify-around max-sm:flex-col w-4/5 font-[offside] md:gap-32 gap-12">
        {callToActionLinks.map((link, index) => {
          return <FeatureCard card={link} key={index} index={index} />;
        })}
      </div>
      <p className="text-4xl max-sm:text-2xl">Join GOCPT on this Journey!</p>
      <p className="text-[14px] md:px-8 w-4/5 text-center font-[offside] font-extrathin">By participating in the goCPT Beta, you’re not just a user; you’re a vital part of our community shaping the future of mental health billing. Together, we can create an app that truly meets your needs and exceeds your expectations.</p>
      <Link to='/signup' className="px-2 text-2xl max-sm:text-lg bg-gradient-to-b from-[#5f5182] to-[#2e3254] rounded-md border border-pinkPrimary/80 flex shadow-[0_0_50px_#ffffff99]">Sign Up Today!</Link>
    </section>
  );
};

export default CallToAction;


