import React from "react";
import { CiHeart } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden ">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex gap-1 ${isActive ? " text-green-500 underline" : ""}`
        }
      >
        <FiHome className="size-6 cursor-pointer" />
      </NavLink>

      <NavLink
        to="/favourites"
        className={({ isActive }) =>
          `flex gap-1 ${isActive ? " text-green-500 underline" : ""}`
        }
      >
        <CiHeart className="size-6 cursor-pointer" />
      </NavLink>
    </div>
  );
};

export default MobileSidebar;
