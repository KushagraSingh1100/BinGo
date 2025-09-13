import React, { useState } from "react";
import Navbar from "../components/Navbar";
import DragDropUpload from "../components/DragDropUpload";
import img from "../assets/homepage_img.png";
import blob from "../assets/homepage_blob.png";
import dumbster from "../assets/dumbster.png";
import info from "../assets/info.png";
import check from "../assets/check.png";
import star from "../assets/star.png";
import WasteCarousel from "../components/WasteCarousel";

const Home: React.FC = () => {
  const [, setImage] = useState<File | null>(null);
  return (
    <>
      <Navbar current="Home"/>
      <div className="flex flex-col items-center bg-background">
        {/* HERO SECTION */}
        <div className="w-[90vw] lg:w-[80vw] min-h-[calc(100vh_-_104px)] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          {/* LEFT */}
          <div className="w-full lg:w-[70%] text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-snug">
              Make Waste <br className="hidden lg:block" />
              Management
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl text-green-700 font-semibold mt-2">
              Smart & Rewarding
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mt-6 lg:w-[75%] mx-auto lg:mx-0">
              Classify waste using AI, report environmental issues, and earn
              points while making your community cleaner and greener.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
              <button className="bg-green-700 text-white py-3 px-6 rounded-2xl cursor-pointer hover:bg-green-600/80 w-full sm:w-auto">
                Classify Waste
              </button>
              <button className="bg-cyan-800 text-white py-3 px-6 rounded-2xl cursor-pointer hover:bg-cyan-700/80 w-full sm:w-auto">
                Report Issue
              </button>
            </div>
          </div>
          {/* RIGHT */}
          <div className="w-full lg:w-[55%] flex items-center justify-center relative">
            <img
              className="w-40 sm:w-52 lg:w-60 absolute -top-10 sm:-top-16 right-0 z-0"
              src={blob}
              alt=""
            />
            <img
              className="h-[50vh] sm:h-[60vh] lg:h-[75vh] rounded-2xl z-10"
              src={img}
              alt=""
            />
            <img
              className="w-52 sm:w-64 lg:w-80 absolute -bottom-10 sm:-bottom-16 -left-6 sm:-left-10 z-0"
              src={blob}
              alt=""
            />
          </div>
        </div>

        {/* AI CLASSIFICATION SECTION */}
        <div className="flex flex-col items-center pb-4 bg-background w-full pt-20 sm:pt-28">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-center">
            AI-Powered Waste Classification
          </h1>
          <h3 className="text-sm sm:text-base lg:text-lg py-2 text-center px-4">
            Upload a photo of your waste and let our AI classify it for proper
            disposal guidance.
          </h3>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-4 sm:px-10 lg:px-50 w-full mt-10 gap-10 lg:gap-0">
            {/* UPLOAD CARD */}
            <div className="w-full shadow-xl lg:w-[30vw] px-6 lg:px-10 flex flex-col items-center justify-center gap-5 h-auto lg:h-[25vw] rounded-2xl bg-white">
              <h1 className="font-medium text-xl sm:text-2xl">
                Upload Waste Image
              </h1>
              <DragDropUpload onFileSelect={setImage}/>
              <button className="w-full bg-green-700 text-white py-3 px-6 rounded-2xl cursor-pointer hover:bg-green-600/80">
                Classify Waste
              </button>
            </div>

            {/* RESULT CARD */}
            <div className="w-full shadow-xl lg:w-[30vw] flex flex-col items-start justify-start p-6 sm:p-10 gap-5 rounded-2xl bg-white">
              <h1 className="font-medium text-xl sm:text-2xl">
                Classification Result
              </h1>
              <div className="flex flex-row items-center gap-3">
                <div>
                  <img className="w-6 sm:w-8" src={dumbster} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-semibold text-base sm:text-lg">
                    Dry Waste
                  </h1>
                  <p className="text-xs sm:text-sm">
                    Recyclable plastic bottle detected
                  </p>
                  <p className="text-xs sm:text-sm text-green-700 mt-1">
                    95% Confidence
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center mt-4 w-full">
                <div className="flex flex-col gap-2 justify-center w-full">
                  <div className="flex flex-row gap-4">
                    <img className="w-5 sm:w-7 h-auto" src={info} alt="" />
                    <h1 className="font-semibold text-base sm:text-lg">
                      Disposal Instructions
                    </h1>
                  </div>
                  <div className="mt-1 flex gap-4 sm:gap-6">
                    <img className="w-4 sm:w-5 h-auto" src={check} alt="" />
                    <p className="text-xs sm:text-sm">
                      Remove labels and cap if possible
                    </p>
                  </div>
                  <div className="flex gap-4 sm:gap-6">
                    <img className="w-4 sm:w-5 h-auto" src={check} alt="" />
                    <p className="text-xs sm:text-sm">
                      Rinse with water to remove residue
                    </p>
                  </div>
                  <div className="flex gap-4 sm:gap-6">
                    <img className="w-4 sm:w-5 h-auto" src={check} alt="" />
                    <p className="text-xs sm:text-sm">
                      Place in blue recycling bin
                    </p>
                  </div>
                  <div className="w-full justify-center items-center mt-6 gap-3 flex flex-row">
                    <img className="w-6 sm:w-8" src={star} alt="" />
                    <h1 className="text-xl sm:text-2xl text-green-800">
                      + 10 Points
                    </h1>
                  </div>
                  <div className="w-full flex justify-center">
                    <p className="text-xs sm:text-sm text-center">
                      Great job on proper waste classification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WASTE CATEGORIES SECTION */}
        <div className="flex flex-col items-center bg-background w-full py-16 sm:py-20">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-center">
            Waste Categories
          </h1>
          <div className="w-[95%] sm:w-[90%] lg:w-[80%] mt-6">
            <WasteCarousel/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
