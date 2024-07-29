import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" bg-gray-100 flex space-x-5 items-center gap-1 py-2 shadow-md px-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold ${isActive ? "text-orange-700" : "text-gray-700"}`
          }
        >
          <span className="font-bold text-lg">Home</span>
        </NavLink>

        
      </div>
    </>
  );
};

export default Navbar;
