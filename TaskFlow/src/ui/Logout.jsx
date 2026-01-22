import React from "react";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      onClick={handleLogout}
    >
      <FiLogOut size={18} className="flex md:hidden" />
      <span className="hidden md:block">Logout</span>
    </button>
  );
};

export default Logout;
