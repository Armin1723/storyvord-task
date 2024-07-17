import React from "react";
import bubbles from "../assets/page-2-bg.png";
import { useSelector } from "react-redux";
import FeatureCard from "./cards/FeatureCard";
import { featureCards } from "../../public/utils";

const Features = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <section
      className={` ${
        theme === "dark" ? "bg-black" : "bg-bluePrimary"
      } min-h-[90vh] w-full z-[1] relative flex items-start justify-center '`} 
      id='features'
    >
      <img
        src={bubbles}
        alt="bubbles"
        className="absolute -top-[16rem] right-0 w-full z-[3] "
      />
      <div className="cardContainer top-0 mx-8 md:mx-16 -mt-12 flex flex-col justify-between items-center gap-8 py-4 pb-8 rounded-xl backdrop-blur-xl shadow-[0_0_100px_black] shadow-black/20 border border-white/20 z-[5]">
        <p className="text-5xl max-lg:text-2xl underline text-center font-400">Key Features of GoCPT BETA</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 mx-16 gap-4 font-[offside]">
          {featureCards.map((card, index) => {
            return <FeatureCard card={card} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
