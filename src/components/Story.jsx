import React from "react";
import { useSelector } from "react-redux";
import StoryCard from "./cards/StoryCard";
import { storyLinks } from "../../public/utils";

const Story = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <section
      className={`${
        theme === "dark" ? "bg-black" : "bg-bluePrimary"
      } w-full px-8 md:px-16 flex flex-col items-center gap-8 py-4`}
    >
      <p className="text-5xl w-full max-lg:text-xl text-left underline">
        Our Story
      </p>
      <div className="block">
        <p className="text-wrap leading-relaxed text-md">
          GoCPT was conceived by a passionate psychiatric nurse practitioner
          who, as a new graduate, felt overwhelmed by the complexities of CPT
          coding. Faced with the daunting task of mastering medical coding while
          juggling the demands of patient care, it became clear that a solution
          was needed to bridge the gap between clinical expertise and
          administrative challenges. Time constraints and the intricate nature
          of CPT coding posed significant hurdles for healthcare providers
          looking <br /> to venture into private practice. Recognizing that
          coding and billing are formidable obstacles standing in the way <br />{" "}
          of many talented providers, the idea for goCPT was born.
        </p>
      </div>
      <div className="cards flex flex-row justify-between max-lg:flex-col gap-12 font-[offside] mt-8">
        {storyLinks.map((link, index) => {
          return <StoryCard card={link} key={index} index={index} />;
        })}
      </div>
    </section>
  );
};

export default Story;
