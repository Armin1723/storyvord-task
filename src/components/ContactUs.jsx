import React from "react";
import contact from "../assets/contact.png";

const ContactUs = () => {
  return (
    <section
      className={`bg-black/85 px-8 md:px-16 py-20 flex items-center `}
      id="contact"
    >
      <div className="formContainer flex flex-col justify-between items-center bg-black/20 rounded-md gap-12 py-4 border border-black/20 drop-shadow-[0_0_50px_#0000001f] w-full md:px-18">
        <p className="text-3xl max-sm:text-2xl underline ">CONTACT US</p>
        <div className="flex max-sm:flex-col items-start max-sm:items-center max-sm:gap-8">
          <img src={contact} alt="" className="md:w-1/2 w-4/5 items-center" />
          <form className="flex flex-col max-sm:items-center md:w-1/2 w-full md:px-8 md:pt-4 gap-6">
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="focus:ring-0 border border-white/60 bg-black/85 drop-shadow-[0_0_25px_black] rounded-xl placeholder:text-xl placeholder:text-white/90 p-2 px-4 w-4/5"
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="focus:ring-0 border border-white/60 bg-black/85 drop-shadow-[0_0_25px_black] rounded-xl placeholder:text-xl placeholder:text-white/90 p-2 px-4 w-4/5"
            />
            <input
              type="text"
              name="companyAddress"
              placeholder="Company Address"
              className="focus:ring-0 border border-white/60 bg-black/85 drop-shadow-[0_0_25px_black] rounded-xl placeholder:text-xl placeholder:text-white/90 p-2 px-4 w-4/5"
            />
            <textarea 
                name="Message" 
                id="message" 
                placeholder="Message" 
                rows={6} 
                className="focus:ring-0 border border-white/60 bg-black/85 drop-shadow-[0_0_25px_black] rounded-xl text-xl placeholder:text-white/90 p-2 px-4 w-4/5"
                >
                Message
            </textarea>
            <div className="submit w-4/5 flex items-center justify-center">
                <button type="submit" className="px-6 py-1 rounded-lg border bg-gradient-to-b hover:bg-gradient-to-t from-[#B382D380] to-[#1C274580] flex w-fit items-center">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
