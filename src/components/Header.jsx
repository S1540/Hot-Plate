import React from "react";
import logo from "../assets/HotPlate.png";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { BsCart4 } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";

function Header() {
  return (
    <>
      <header className="max-w-full w-full h-44 flex flex-col border-b border-gray-200/80 px-2">
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
            <a href="" className="text-gray-800 sm:hidden">
              <HiBars3 size={38} />
            </a>
          </div>
        </div>

        <div className="max-w-full w-full flex justify-between px-3 ">
          <input
            type="text"
            placeholder="Search Your Dish"
            className="max-w-3xl w-full border-b border-gray-500 hover:border-gray-700 py-2 outline-0"
          />

          <p className="shrink-0 py-2">Noida, 821103</p>
        </div>
      </header>
    </>
  );
}

export default Header;
