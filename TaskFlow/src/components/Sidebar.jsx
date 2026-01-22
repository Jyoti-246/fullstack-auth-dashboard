import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-1 flex-col gap-4 bg-[#1F3A5F] text-stone-200 px-2 py-8 font-semibold text-xl">
      <div className="flex flex-col gap-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `p-2 rounded ${isActive ? "bg-[#3C89DD]" : "text-white"}`
          }
        >
          <FontAwesomeIcon icon={faListCheck} />
          <span>Tasks</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `p-2 rounded ${isActive ? "bg-[#3C89DD]" : "text-white"}`
          }
        >
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
