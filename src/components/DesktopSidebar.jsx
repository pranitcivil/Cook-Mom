import React from "react";
import logo from "../assets/logo.svg";
import mobileLogo from "../assets/mobileLogo.svg";

import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const DesktopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src={logo} alt="logo" className="hidden md:block " />
          <img src={mobileLogo} alt="logo" className="block md:hidden" />
        </div>
        <ul className="flex flex-col   items-center md:items-start gap-8  ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex  gap-1 ${isActive ? " text-green-500 underline" : ""}`
              }
            >
              <FiHome className="size-6" />
              <span className="font-bold hidden md:block ">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                `flex gap-1 ${
                  isActive ? " text-green-500 underline fill-red-500" : ""
                }`
              }
            >
              <CiHeart className="size-6" />
              <span className="font-bold hidden md:block">Favourites</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopSidebar;
