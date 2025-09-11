import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import leaf from "../assets/leaf.png";
import hazard from "../assets/hazard.png";
import phone from "../assets/phone.png";
import recycle from "../assets/recycle.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const wasteCategories = [
  {
    title: "Wet Waste",
    desc: "Food scraps, vegetable peels",
    bin: "Green Bin",
    color: "text-green-700",
    img: leaf,
  },
  {
    title: "Dry Waste",
    desc: "Paper, plastic, metal",
    bin: "Blue Bin",
    color: "text-cyan-800",
    img: recycle,
  },
  {
    title: "E-Waste",
    desc: "Electronics, batteries",
    bin: "E-Waste Center",
    color: "text-green-700",
    img: phone,
  },
  {
    title: "Hazardous",
    desc: "Chemicals, medical waste",
    bin: "Special Disposal",
    color: "text-red-700",
    img: hazard,
  },
];

const WasteSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Show 1 card on mobile, 2 on tablet/desktop
  const itemsPerPage = window.innerWidth < 640 ? 1 : 2;

  const next = () =>
    setIndex((prev) => (prev + itemsPerPage) % wasteCategories.length);

  const prev = () =>
    setIndex((prev) =>
      prev - itemsPerPage < 0
        ? wasteCategories.length - itemsPerPage
        : prev - itemsPerPage
    );

  return (
    <div className="relative flex items-center justify-center w-full mt-14 overflow-hidden">
      {/* Left Arrow */}
      <div className="absolute left-2 sm:left-4 z-10">
        <ChevronLeft
          size={30}
          className="cursor-pointer hover:opacity-65"
          onClick={prev}
        />
      </div>

      {/* Slider Content */}
      <div className="flex w-[90%] sm:w-[70%] lg:w-[60%] py-2 justify-around relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            className="flex gap-6 sm:gap-10"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {wasteCategories.slice(index, index + itemsPerPage).map((cat, i) => (
              <div
                key={i}
                className="w-full sm:w-[40vw] lg:w-[20vw] h-auto sm:h-[20vw] rounded-2xl flex flex-col justify-center items-center shadow-md bg-white p-4 sm:p-6 text-center"
              >
                <img className="w-10 sm:w-12 pb-4" src={cat.img} alt="" />
                <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl">
                  {cat.title}
                </h1>
                <p className="text-sm sm:text-base">{cat.desc}</p>
                <p className={`mt-4 text-sm sm:text-base ${cat.color}`}>
                  {cat.bin}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <div className="absolute right-2 sm:right-4 z-10">
        <ChevronRight
          size={30}
          className="cursor-pointer hover:opacity-65"
          onClick={next}
        />
      </div>
    </div>
  );
};

export default WasteSlider;
