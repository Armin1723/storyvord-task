import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/theme/themeSlice";

const ThemeToggle = () => {
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()
  return (
    <div className="absolute right-4 top-14 z-[2]">
      <label className="switch drop-shadow-md shadow-gray-800" >
        <input type="checkbox" id="theme-toggle-checkbox" onClick={()=>dispatch(toggle())}/>
        <span className={`slider ${theme === 'dark' ? 'before:bg-black' : 'before:bg-white'} round backdrop-blur-lg`}> </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
