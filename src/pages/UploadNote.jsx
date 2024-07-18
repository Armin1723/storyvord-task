import React from "react";
import { useSelector } from "react-redux";
import ThemeToggle from "../components/ThemeToggle";
import NavSmall from "../components/NavSmall";

const UploadNote = () => {
  const theme = useSelector((state) => state.theme.value);

  return (
    <main
      className={` ${
        theme === "dark" ? "bg-admin-dark" : "bg-admin-light"
      } w-full h-screen flex flex-1 flex-col gap-6 items-center justify-between text-white font-[jura] pb-4`}
    >
      <ThemeToggle />
      <NavSmall />
      <div
        className={` form1 md:w-1/2 w-[70%] border flex flex-col items-center gap-6 rounded-xl py-2 pb-8 backdrop-blur-lg shadow-[0_0_10px_#00000080] ${
          theme === "dark"
            ? "border-white/20 bg-white/10"
            : "border-black/20 bg-black/10"
        }`}
      >
        <div
          className={` ${
            theme === "light" && "text-black"
          } flex flex-col justify-center items-center`}
        >
          <p className="max-lg:text-xl text-3xl">Upload Your Note</p>
          <p className="text-sm max-lg:text-xs">
            (It may take 30-90 seconds to generate report)
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-md flex items-center justify-center w-[90%] text-xl text-center max-lg:text-md h-24 rounded-xl">
          Click to upload a Note (pdf or doc file)
        </div>
        <button className="flex items-center justify-center bg-gradient-to-b hover:bg-gradient-to-t from-[#F197F4]/80 to-[#2B3A63CC] py-1 md:px-4 rounded-xl shadow-[0_0_20px_#00000096]">
          Generate CPT code
          <br /> Based upon Medical Decision Making Model
        </button>
      </div>

      <div
        className={` form2 w-[90%] border flex flex-col items-center gap-6 rounded-xl py-2 pb-8 backdrop-blur-lg shadow-[0_0_10px_#00000080] ${
          theme === "dark"
            ? "border-white/20 bg-white/10"
            : "border-black/20 bg-black/10"
        }`}
      >
        <div className="flex justify-between max-lg:flex-col max-lg:items-center md:gap-12 gap-6 mx-4">
          <div
            className={`flex justify-between px-2 md:w-1/3 w-full items-center rounded-lg  ${
              theme === "dark" ? "bg-white/20" : "bg-black/20"
            }`}
          >
            <p className="w-2/3 text-center text-xs">
              Number and Complexity of Problems Addressed
            </p>
            <p className="text-[#FEDBFF] text-shadow">MEDIUM</p>
          </div>

          <div
            className={`flex justify-between px-2 md:w-1/3 w-full items-center rounded-lg ${
              theme === "dark" ? "bg-white/20" : "bg-black/20"
            }`}
          >
            <p className="w-2/3 text-center text-xs">
              Amount and/or Complexity of Data to be Reviewed and Analyzed
            </p>
            <p className="text-[#FEDBFF] text-shadow">MINIMAL</p>
          </div>

          <div
            className={`flex justify-between px-2 md:w-1/3 w-full items-center rounded-lg ${
              theme === "dark" ? "bg-white/20" : "bg-black/20"
            }`}
          >
            <p className="w-2/3 text-center text-xs">
              Risk of Complications and/or Morbidity or Mortality of Patient
              Management Decisions
            </p>
            <p className="text-[#FEDBFF] text-shadow">HIGH</p>
          </div>
        </div>

        <button className="bg-gradient-to-b hover:bg-gradient-to-t from-[#302438] to-[#936094] px-12 border-[2px] border-black/50 rounded-lg text-2xl max-ls:text-xl">
          GENERATE MDM CPT CODE
        </button>
        <button className="bg-black/30 border border-black/30 px-20 shadow-[0_0_10px_black] text-2xl max-lg:text-lg">MEDIUM</button>

        <div className="flex justify-around w-full md:px-12 px-4 md:gap-12 gap-6">
            <div className="flex flex-col items-center justify-between w-1/2 gap-2">
                <input type="text" placeholder="Choose an Option." className="w-full rounded-lg border border-black/25 bg-black/5 backdrop-blur-md placeholder:text-white/70 px-2 py-1"/>
                <button className="w-full rounded-lg bg-gradient-to-b from-[#F197F4BF] to-[#2B3A63BF] hover:bg-gradient-to-t px-2 py-1 text-xl border border-white/85">SUBMIT</button>
                <div className="w-full rounded-lg border border-black/25 text-center bg-black/15 text-xl max-lg:text-lg">99214</div>
            </div>
            <div className="flex flex-col items-center justify-between w-1/2 gap-2">
                <input type="text" placeholder="Choose an Option." className="w-full rounded-lg border border-black/25 bg-black/5 backdrop-blur-md placeholder:text-white/70 px-2 py-1"/>
                <button className="w-full rounded-lg bg-gradient-to-b from-[#F197F4BF] to-[#2B3A63BF] hover:bg-gradient-to-t px-2 py-1 text-xl border border-white/85">SUBMIT</button>
                <div className="w-full rounded-lg border border-black/25 text-center bg-black/15 text-xl max-lg:text-lg">99242</div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default UploadNote;
