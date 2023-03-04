import React from "react";
import { MdNightlightRound } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-slate-300 dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-lg ">Portfolio</h1>

        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <BsFillSunFill className="text-2xl cursor-pointer" />
          ) : (
            <MdNightlightRound className="text-2xl cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
