import React from "react";
import { useSelector } from "react-redux";

const WhyGocpt = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <section
      className={`${
        theme === "dark" ? "bg-[#1C274540]" : "bg-[#1C2745]"
      } flex flex-col items-center `}
    >
      <div className="gocptContainer px-8 md:px-16 py-4 flex flex-col items-center">
        <p className="text-4xl max-sm:text-xl">
          Why <span className="font-[700]">GoCPT</span>?
        </p>
        <p className="text-center text-lg font-[300] py-12">
          At goCPT, we understand the unique challenges mental health
          professionals face. Our app is designed with your needs in mind,
          offering a user-friendly platform that simplifies the coding process.
          By utilizing goCPT, providers can reclaim valuable time, reduce
          administrative stress, and ensure accurate code assignment for proper
          reimbursement. <br /> <br />
          Join us on this transformative journey as we continue to innovate and
          evolve, breaking down barriers and making mental health care
          accessible to all. Together, we can shape a future where healthcare
          providers are empowered, and quality mental health care knows no
          boundaries. <br />
          <br />
          Thank you for choosing goCPT - where innovation meets compassion in
          the pursuit of accessible mental health care.
          <br /> <br />
          Warm regards,
          <br />
          Tiffinne <br />
          Founder, goCPT
        </p>
        <div className="cardContainer drop-shadow-[0_0_100px_black] shadow-black/20 border border-white/20 rounded-md flex flex-col py-12 px-4 backdrop-blur-lg">
            <p className="text-center text-4xl max-sm:text-xl underline">Ensuring CPT Code Accuracy with <br/><span className="font-[700]">CoGPT</span> App</p>

        </div>
      </div>
    </section>
  );
};

export default WhyGocpt;
