import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-20 flex flex-row justify-between items-center py-2 px-6 sm:px-8 h-20 border-b bg-background border-gray-300">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img className="w-14 sm:w-20" src={logo} alt="logo" />
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-2xl sm:text-4xl">BinGo</h1>
          <p className="font-semibold text-xs sm:text-sm">
            Smart Waste Management
          </p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex flex-row gap-6 lg:gap-8 text-sm lg:text-base">
          <li className="underline underline-offset-4 cursor-pointer font-semibold">
            Home
          </li>
          <li className="hover:underline underline-offset-4 cursor-pointer font-semibold">
            Course
          </li>
          <li className="hover:underline underline-offset-4 cursor-pointer font-semibold">
            AI Classifier
          </li>
          <Link to="/report-page" className="hover:underline underline-offset-4 cursor-pointer font-semibold">
            Report
          </Link>
          <li className="hover:underline underline-offset-4 cursor-pointer font-semibold">
            Leaderboard
          </li>
        </ul>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button className="bg-green-700 text-white py-2 px-5 lg:px-6 rounded-2xl cursor-pointer hover:bg-green-600/80 text-sm lg:text-base">
          Sign In
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {isOpen ? (
          <X
            size={30}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            size={30}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-background border-t border-gray-300 flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          <ul className="flex flex-col gap-4 text-base font-semibold">
            <li className="underline underline-offset-4 cursor-pointer">
              Home
            </li>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              Course
            </li>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              AI Classifier
            </li>
            <Link
              to="/report-page"
              className="hover:underline underline-offset-4 cursor-pointer"
            >
              Report
            </Link>
            <li className="hover:underline underline-offset-4 cursor-pointer">
              Leaderboard
            </li>
          </ul>
          <button className="bg-green-700 text-white py-2 px-6 rounded-2xl cursor-pointer hover:bg-green-600/80 mt-4">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
