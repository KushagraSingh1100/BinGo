import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import leaf from "../assets/leaf.png"
import hazard from "../assets/hazard.png"
import phone from "../assets/phone.png"
import recycle from "../assets/recycle.png"
import { ChevronLeft, ChevronRight } from "lucide-react";

const wasteCategories = [
  {
    title: "Wet Waste",
    desc: "Food scraps, vegetable peels",
    bin: "Green Bin",
    color: "text-green-700",
    img: leaf
  },
  {
    title: "Dry Waste",
    desc: "Paper, plastic, metal",
    bin: "Blue Bin",
    color: "text-cyan-800",
    img: recycle
  },
  {
    title: "E-Waste",
    desc: "Electronics, batteries",
    bin: "E-Waste Center",
    color: "text-green-700",
    img: phone
  },
  {
    title: "Hazardous",
    desc: "Chemicals, medical waste",
    bin: "Special Disposal",
    color: "text-red-700",
    img: hazard
  },
];

const WasteSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 2) % wasteCategories.length);
  const prev = () =>
    setIndex((prev) =>
      prev - 2 < 0 ? wasteCategories.length - 2 : prev - 2
    );

  return (
    <div className="relative flex items-center justify-center w-full mt-14 overflow-hidden">

      <div className="absolute left-0 z-10">
        <ChevronLeft
          size={40}
          className="cursor-pointer hover:opacity-65"
          onClick={prev}
        />
      </div>

      <div className="flex w-[60%] py-2 justify-around relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            className="flex gap-10"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {wasteCategories.slice(index, index + 2).map((cat, i) => (
              <div
                key={i}
                className="w-[20vw] gap-2 h-[20vw] rounded-2xl flex flex-col justify-center items-center shadow-md bg-white"
              >
                <img className="w-10 pb-4" src={cat.img} alt="" />
                <h1 className="font-semibold text-2xl">{cat.title}</h1>
                <p>{cat.desc}</p>
                <p className={`mt-4 ${cat.color}`}>{cat.bin}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute right-0 z-10">
        <ChevronRight
          size={40}
          className="cursor-pointer hover:opacity-65"
          onClick={next}
        />
      </div>
    </div>
  );
};

export default WasteSlider;
