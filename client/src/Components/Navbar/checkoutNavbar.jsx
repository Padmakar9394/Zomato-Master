import React from "react";
import { FaUserAlt } from "react-icons/fa";
import {AiOutlineArrowLeft} from "react-icons/ai";


const Navbar = () => {
  return (
    <>
    <nav className="p-4 flex bg-white shadow lg:shadow-none w-full items-center">
    <div className="container mx-auto px-4 md:px-20">
      <div className="items-center justify-between flex w-full shadow-lg p-4">
        <AiOutlineArrowLeft />
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <span className="border flex items-center gap-2 p-2 border-zomato-300 text-zomato-400 rounded-full">
          <FaUserAlt />
          </span>
          Padmakar
        </div>
      </div>
    </div>
    </nav>
    </>
  )
};

export default Navbar;
