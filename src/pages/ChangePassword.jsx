import React from 'react'
import { useSelector } from 'react-redux'
import ThemeToggle from '../components/ThemeToggle'
import NavSmall from '../components/NavSmall'

const ChangePassword = () => {
    const theme = useSelector((state) => state.theme.value)

  return (
    <main  className={` ${
        theme === "dark" ? "bg-admin-dark" : "bg-admin-light"
      } w-full h-screen flex flex-1 flex-col items-center justify-between text-white font-[jura]`}>
      <ThemeToggle />
      <NavSmall />
      <div className="formContainer flex-1 flex items-center justify-center w-full h-full">
        <form
          action="#"
          className="flex flex-col justify-center items-center gap-4 border border-white/25 backdrop-blur-md  shadow-[0_0_45px_black] shadow-black/65 min-h-[4/5] w-4/5 md:w-1/3 bg-[#ffffff02] bg-opacity-[2] rounded-2xl p-4 py-12"
        >
          <div className="pt-12 text-3xl max-lg:text-lg flex flex-col justify-center items-center">
            <p className="uppercase text-4xl max-lg:text-2xl -mt-6 drop-shadow[0_0_30px_black] drop-shadow[0_0_30px_black] shadow-black text-shadow">Change Password</p>
          </div>
          <div className="field flex flex-col w-full px-12">
            <label htmlFor="password" className={` ${theme=== 'light' &&'text-black'} `}>Old Password</label>
            <input
              type="password"
              name="password"
              placeholder="***************"
              className="focus:ring-0 border text-lg text-white/70 border-white/50 bg-black/50 shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>
          <div className="field flex flex-col gap-1 w-full px-12">
            <label htmlFor="newPassword" className={` ${theme=== 'light' &&'text-black'} `}>New Password</label>
            <input
              type="password"
              name="newPassword"
              placeholder="***************"
              className="focus:ring-0 border text-lg text-white/70 border-white/50 bg-black/50 shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>
          <p className={`text-left w-full px-12 ${theme=== 'light' &&'text-black'} `}>Forgot Password?</p>
          <button
            type="submit"
            className=" text-xl max-sm:text-lg bg-black/50 hover:bg-black/70 shadow-[0_0_35px_black] uppercase rounded-xl border border-white/70 w-[90%] p-1"
          >
            Update Details
          </button>
        </form>
      </div>
    </main>
  )
}

export default ChangePassword
