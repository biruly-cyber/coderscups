"use client"
import { useRouter } from "next/navigation";
import React from "react";
import { LuCupSoda } from "react-icons/lu";

const Navbar = () => {
  const router = useRouter();

  const handleOnComponentPage = () => {
    router.replace("/component-page");
  };

  return (
    <nav className="flex justify-between items-center px-16 py-1 md:py-5 lg:py-8  shadow-md bg-transparent ">
      <div className="flex items-center cursor-pointer">
        <LuCupSoda className="text-white text-3xl"/>
        <span className="text-white text-xl mt-2.5">Coderscups</span>
      </div>
      <div>
        <ul className="flex gap-10 text-white cursor-pointer">
          <li>Home</li>
          <li onClick={handleOnComponentPage}>Component</li>
          <li>About us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
