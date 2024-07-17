import React from "react";
import logo from "../assets/gocpt-logo.png";
//ignore es-lint
import { navLinks } from "../../public/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-bluePrimary/25 fixed top-0 w-full border border-nav/5 shadow-black/20 shadow-sm px-4 backdrop-blur-md z-[10]">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          width={24}
          height={24}
          className="object-contain mt-2 overflow-hidden w-36 max-lg:w-24 scale-125 ml-2 aspect-[3/1] "
        />
      </Link>
      <div className="max-lg:hidden navLinksContainer flex justify-between items-center gap-10 text-xl font-extrathin">
        {navLinks.map((link) => {
          const location = useLocation()
          const isActive = (location.hash === link.href || (location.hash === '/' && link.href === '#home')) && 'text-nav'
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
      <div className="auth flex gap-4 max-lg:text-xs">
        <Link to='/login' className="bg-gradient-to-b from-bluePrimary px-1 flex rounded-md border border-white/50 shadow-md shadow-gray-500/50">
          Log In
        </Link>
        <Link to='/signup' className="bg-gradient-to-t from-bluePrimary px-1 flex rounded-md border border-white/50 shadow-md shadow-gray-500/50">
          Signup
        </Link>
        <div className="ham rotate-90 leading-5 md:hidden">|||</div>
      </div>
    </nav>
  );
};

export default Navbar;

