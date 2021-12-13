import React, {useState} from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiMenu, BiSearch } from "react-icons/bi";
import {MdLocationOn, MdOutlineDeliveryDining, MdOutlineDining, MdOutlineNightlife} from "react-icons/md";
import {AiFillCaretDown} from "react-icons/ai";

//component
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";


const NavSm = ({ SignIn,SignUp }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
    <div className="flex items-center justify-between w-full shadow-lg py-4 px-2">
      <div className="w-32">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
      <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
        <span onClick={() => setIsDropdownOpen((prev) => !prev)} className="border p-2 border-gray-300 text-zomato-400 rounded-full">
          <FaUserAlt />
        </span>
        {
          isDropdownOpen &&
          <div className="absolute shadow-lg py-3 -bottom-20 bg-white right-4 z-10 flex flex-col gap-2 w-full">
            <button onClick={SignIn}>Sign In</button>
            <button onClick={SignUp}>Sign Up</button>
          </div>
        }
      </div>
      </div>
  </>
)
};

const NavMd = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full p-4 shadow-lg">
        <div class="w-12 h-12">
          <BiMenu className="w-full h-full"/>
        </div>
        <div className="w-40">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
        </div>
      </div>
    </>
  )
};


const NavLg = ({SignIn,SignUp}) => {
  return (
    <>
    <div className="container mx-auto px-4 lg:px-20">
      <div className="container mx-auto px-4 lg:px-20 flex gap-8 items-center mt-4">
        <div className="w-48">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center bg-white gap-2 px-3 py-2 rounded-sm border border-gray-200 shadow-md">
          <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
            <span className="w-8 h-8 text-zomato-400">
              <MdLocationOn className="w-full h-full"/>
            </span>
            <input className="w-full focus:outline-none" type="text" placeholder="Dattawadi, Shobhapur, Kasba Peth" />
            <span className="w-4 h-4">
              <AiFillCaretDown className="w-full h-full"/>
            </span>
          </div>
          <div className="flex items-center w-full gap-2">
              <BiSearch />
            <input type="search" className="placeholder:text-gray-400 w-full focus:outline-none" placeholder="Search for restaurant, cuisine or a dish" />
          </div>
      </div>
      <div className="flex gap-2">
        <button onClick={SignIn} className="text-gray-500 text-xl hover:text-gray-800">Login</button>
        <button onClick={SignUp} className="text-gray-500 text-xl hover:text-gray-800">Signup</button>
      </div>
    </div>
    </div>
    </>
  )
};



const Navbar = () => {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openSignInModal = () => setOpenSignin(true);
  const openSignUpModal = () => setOpenSignup(true);
  return (
    <>
    <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
    <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
      <nav className="bg-white items-center">
        <div className="md:hidden">
          {
            /*Mobile Screen*/
            <NavSm SignIn={openSignInModal} SignUp={openSignUpModal} />
          }
        </div>
        <div className="hidden lg:hidden md:flex">
          {
            //Tablet Screen
            <NavMd SignIn={openSignInModal} SignUp={openSignUpModal} />
          }
        </div>
        <div className="hidden lg:flex">
          {
            //Large Screen
            <NavLg SignIn={openSignInModal} SignUp={openSignUpModal} />
          }
        </div>
      </nav>
    </>
  )
};

export default Navbar;
