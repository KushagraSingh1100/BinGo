import React from "react";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-20 flex flex-row justify-between items-center py-2 px-8 h-26 border-b-1 bg-background border-gray-300">
      <div className="flex items-center gap-2 cursor-pointer">
        <img className="w-22" src={logo} alt="" />
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-4xl">BinGo</h1>
          <p className="font-semibold">Smart Waste Management</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-row gap-8">
            <li className="underline underline-offset-4 cursor-pointer font-semibold">Home</li>
            <li className="hover:underline underline-offset-4 cursor-pointer font-semibold">Course</li>
            <li className="hover:underline underline-offset-4 cursor-pointer font-semibold">AI Classifier</li>
            <li className="hover:underline underline-offset-4 cursor-pointer font-semibold">Report</li>
            <li className="hover:underline underline-offset-4 cursor-pointer font-semibold">Leaderboard</li>
        </ul>
      </div>
      <div>
        <button className="bg-green-700 text-white py-2 px-6 rounded-2xl cursor-pointer hover:bg-green-600/80">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
