import React, { useState } from "react";
import logo from "../assets/HotPlate.png";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineLocalOffer } from "react-icons/md";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className=" relative max-w-full w-full h-32 flex flex-col border-b border-gray-200/80 px-2">
        <div className="w-full h-20 flex  justify-between border-b border-gray-200/80">
          <img src={logo} alt="Hot-Plate" className="h-full  px-2 py-1" />
          <div className="max-w-md w-full hidden sm:flex justify-between items-center h-full px-2 py-1 text-gray-500">
            <a
              href=""
              className="flex items-center gap-1 font-semibold px-2 py-1 rounded-md hover:text-orange-500 hover:bg-orange-100/60 transition-all duration-300 ease-in-out"
            >
              <MdOutlineRestaurantMenu /> Menu
            </a>
            <a
              href=""
              className="flex items-center gap-1 font-semibold px-2 py-1 rounded-md hover:text-orange-500 hover:bg-orange-100/60 transition-all duration-300 ease-in-out"
            >
              <IoTimeOutline /> Orders
            </a>
            <a
              href=""
              className="flex items-center gap-1 font-semibold px-2 py-1 rounded-md hover:text-orange-500 hover:bg-orange-100/60 transition-all duration-300 ease-in-out"
            >
              <FiUserPlus /> Account
            </a>
            <a
              href=""
              className="flex items-center gap-1 font-semibold px-2 py-1 rounded-md hover:text-orange-500 hover:bg-orange-100/60 transition-all duration-300 ease-in-out"
            >
              <MdOutlineLocalOffer /> Offers
            </a>
          </div>

          <div
            className="flex max-w-44
         items-center justify-between gap-3 px-3 text-white"
          >
            <a href="">
              {" "}
              <BsCart4 size={26} className="text-gray-600" />
            </a>

            <a
              href=""
              className=" sm:flex items-center gap-1 font-semibold px-3 bg-orange-400/90 rounded-md py-1 hidden hover:bg-orange-500 transition-all duration-200 ease-in-out"
            >
              <IoLogInOutline size={25} />
              Signup
            </a>
            <button
              className="text-gray-800 sm:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              <HiBars3 size={38} />
            </button>

            <nav
              className={` ${
                isOpen ? " opacity-100" : " opacity-0"
              } absolute top-32 py-1 right-0 max-w-full w-full sm:hidden h-auto bg-black flex justify-around items-center gap-3 transition-all duration-300 origin-left ease-in-out `}
            >
              <a
                href=""
                className="flex items-center gap-1 hover:text-orange-500 transition-all duration-400 ease-in-out hover:animate-bounce"
              >
                {" "}
                <MdOutlineRestaurantMenu />
                Menu
              </a>
              <a
                href=""
                className="flex items-center gap-1 hover:text-orange-500 transition-all duration-400 ease-in-out hover:animate-bounce"
              >
                {" "}
                <IoTimeOutline />
                Orders
              </a>
              <a
                href=""
                className="flex items-center gap-1 hover:text-orange-500 transition-all duration-400 ease-in-out hover:animate-bounce"
              >
                {" "}
                <FiUserPlus />
                Account
              </a>
              <a
                href=""
                className="flex items-center gap-1 hover:text-orange-500 transition-all duration-400 ease-in-out hover:animate-bounce"
              >
                {" "}
                <MdOutlineLocalOffer />
                Offers
              </a>
            </nav>
          </div>
        </div>

        <div className="max-w-full w-full flex justify-between px-3 ">
          <input
            type="text"
            placeholder="Search for dishes, water ... "
            className="max-w-3xl w-full border-b border-gray-500 hover:border-gray-700 py-2 outline-0"
          />

          <p className="shrink-0 py-2">Noida, 821103</p>
        </div>
      </header>
    </>
  );
}

export default Header;
