import React from "react";
import logo from "../assets/gocpt-logo.png";
//ignore es-lint
import { navLinks } from "../../public/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const toggleMenu = () => {
    const navLinksContainer = document.querySelector('.navLinksContainer')
    const line1 =  document.querySelector('.line1')
    const line2 =  document.querySelector('.line2')
    const line3 =  document.querySelector('.line3')
    navLinksContainer.classList.toggle('max-lg:hidden')
    line2.classList.toggle('hidden')
    line1.classList.toggle('rotate-45')
    line1.classList.toggle('translate-x-1')
    document.querySelector('.ham').classList.toggle('-translate-y-1')
    line3.classList.toggle('-rotate-45')
  }
  return (
    <nav className="flex justify-between md:items-center bg-bluePrimary/25 fixed top-0 w-full border border-nav/5 shadow-black/20 shadow-sm px-4 backdrop-blur-md z-[10]">
      <div className="flex max-lg:justify-center max-lg:flex-col justify-between md:w-3/4">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width={24}
          height={24}
          className="object-contain mt-2 overflow-hidden w-36 max-lg:w-24 scale-125 ml-2 aspect-[3/1] "
        />
      </Link>
      <div className="max-lg:hidden transition-all max-lg:top-0 max-lg:flex-col navLinksContainer flex md:pr-12 justify-between items-center max-lg:items-start md:gap-10 md:text-xl text-md font-extrathin">
        {navLinks.map((link) => {
          const location = useLocation()
          const isActive = (location.hash === link.href || (location.hash === '/' && link.href === '#home')) && 'text-black'
          return (
            <a
              key={link.name}
              href={link.href}
              className={` ${isActive} transition-colors uppercase font-[400] `}
            >
              {link.name}
            </a>
          );
        })}
      </div>
      </div>
      <div className="auth flex gap-4 max-lg:text-xs items-start max-lg:pt-3">
        <Link to='/login' className="bg-gradient-to-b from-bluePrimary px-1 flex rounded-md border border-white/50 shadow-md shadow-gray-500/50">
          Log In
        </Link>
        <Link to='/signup' className="bg-gradient-to-t from-bluePrimary px-1 flex rounded-md border border-white/50 shadow-md shadow-gray-500/50">
          Signup
        </Link>
        <div className="ham rotate-90 leading-5 md:hidden flex" onClick={()=>toggleMenu()}>
          <span className="line1">|</span>
          <span className="line2">|</span>
          <span className="line3">|</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

