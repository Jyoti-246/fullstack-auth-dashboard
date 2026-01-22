import React from "react";
import Logo from "../ui/Logo";
import Logout from "../ui/Logout";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex py-4 px-4 bg-[#1F3A5F] border-b-1 border-gray-300 items-center justify-between shadow-2xl">
      <div className="flex gap-2 items-center">
        <Logo />
        <h1 className="text-xl font-semibold md:text-2xl text-stone-200">
          Dashboard
        </h1>
      </div>
      <div className="flex gap-4 items-center">
        <h2 className="hidden md:block font-semibold text-xl text-stone-200">
          Welcome, User
        </h2>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `p-2 rounded ${isActive ? "bg-[#3C89DD]" : "text-white"}`
          }
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <Logout />
      </div>
    </nav>
  );
};

export default Navbar;
