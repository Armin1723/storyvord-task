import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <section className={` ${theme === 'dark' ? 'bg-black' : 'bg-homepage'} h-[70vh] z-[2] w-full flex flex-col justify-center px-16 max-lg:px-8`} id='home'>
      <div className="content-page1 flex flex-col justify-center gap-8 items-start my-12">
        <div className="title text-4xl max-lg:text-xl">
            Welcome to <span className="text-pinkPrimary font-[700]">Go</span>
            <span className="text-[#2a3b63] font-[700]">CPT</span> BETA <br/> Your Path to Effortless CPT Coding!
        </div>
        <p className="text-xl max-lg:text-sm font-extralight">
          We’re excited to introduce you to <br />
          the BETA version of GoCPT Your free pass to <br /> a simplified and
          efficient CPT coding experience <br /> designed exclusively for<br />
           mental health professionals like you.
        </p>
        <button className="bg-gradient-to-b hover:bg-gradient-to-t from-[#B382D3]/60 to-[#2B3A63]/60 px-2 py-1 max-lg:w-1/2 md:px-12 rounded-md border border-white/70">Start Testing</button>
      </div>
    </section>
  );
};

export default HomePage;
