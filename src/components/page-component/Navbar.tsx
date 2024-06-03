import React from "react";
import { LuCupSoda } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-16 py-1 md:py-5 lg:py-8  shadow-md bg-transparent z-50 border-b border-gray-800 bg-gradient-to-l from-[#1e0b19]  to-[#000000]">
      <div className="flex items-center cursor-pointer">
        <LuCupSoda className="text-white text-3xl"/>
        <span className="text-white text-xl mt-2.5">Coderscups</span>
      </div>
      <div>
        <ul className="flex gap-10 text-white cursor-pointer">
          <li>Home</li>
          <li>How To</li>
          <li>About us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
