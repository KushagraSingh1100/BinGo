import React from "react";
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
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-background">
        <div className="w-[80vw] h-[calc(100vh_-_104px)] flex items-center">
          <div className="w-[70%]">
            <h1 className="text-7xl font-semibold">
              Make Waste <br />
              Management
            </h1>
            <h1 className="text-7xl text-green-700 font-semibold">
              Smart & Rewarding
            </h1>
            <p className="text-xl mt-6 w-[75%]">
              Classify waste using AI, report environmental issues, and earn
              points while making your community cleaner and greener.
            </p>
            <div className="flex flex-row items-center gap-6 mt-6">
              <button className="bg-green-700 text-white py-3 px-6 rounded-2xl cursor-pointer hover:bg-green-600/80">
                Classify Waste
              </button>
              <button className="bg-cyan-800 text-white py-3 px-6 rounded-2xl cursor-pointer hover:bg-cyan-700/80">
                Report Issue
              </button>
            </div>
          </div>
          <div className="w-[55%] flex items-center justify-center relative">
            <img
              className="w-60 absolute -top-25 right-0 z-0"
              src={blob}
              alt=""
            />
            <img className="h-[75vh] rounded-2xl z-10" src={img} alt="" />
            <img
              className="w-80 absolute -bottom-25 -left-10 z-0"
              src={blob}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-background w-full pt-34">
          <h1 className="font-semibold text-4xl">
            AI-Powered Waste Classification
          </h1>
          <h3 className="text-lg py-2">
            Upload a photo of your waste and let our AI classify it for proper
            disposal guidance.
          </h3>
          <div className="flex flex-row items-start justify-between px-50 w-full mt-10">
            <div className="w-[30vw] px-10 flex flex-col items-center justify-center gap-5 h-[25vw] rounded-4xl bg-white">
              <h1 className="font-medium text-2xl">Upload Waste Image</h1>
              <DragDropUpload />
              <button className="w-full bg-green-700 text-white py-3 px-6 rounded-2xl cursor-pointer hover:bg-green-600/80">
                Classify Waste
              </button>
            </div>
            <div className="w-[30vw] flex flex-col items-start justify-start p-10 gap-5 rounded-4xl bg-white">
              <h1 className="font-medium text-2xl">Classification Result</h1>
              <div className="flex flex-row items-center gap-3">
                <div>
                  <img className="w-8" src={dumbster} alt="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-semibold text-lg">Dry Waste</h1>
                  <p className="text-sm">Recyclable plastic bottle detected</p>
                  <p className="text-sm text-green-700 mt-1">95% Confidence</p>
                </div>
              </div>
              <div className="flex flex-row items-center mt-4 w-full">
                <div className="flex flex-col gap-2 justify-center w-full">
                  <div className="flex flex-row gap-4">
                    <img className="w-7 h-auto" src={info} alt="" />
                    <h1 className="font-semibold text-lg">
                      Disposal Instructions
                    </h1>
                  </div>
                  <div className="mt-1 flex gap-6">
                    <img className="w-5 h-auto" src={check} alt="" />
                    <p className="text-sm">Remove labels and cap if possible</p>
                  </div>
                  <div className="flex gap-6">
                    <img className="w-5 h-auto" src={check} alt="" />
                    <p className="text-sm">
                      Rinse with water to remove residue
                    </p>
                  </div>
                  <div className="flex gap-6">
                    <img className="w-5 h-auto" src={check} alt="" />
                    <p className="text-sm">Place in blue recycling bin</p>
                  </div>
                  <div className="w-full justify-center items-center mt-6 gap-3 flex flex-row">
                    <img className="w-8" src={star} alt="" />
                    <h1 className="text-2xl text-green-800">+ 10 Points</h1>
                  </div>
                  <div className="w-full flex justify-center">
                    <p>Great job on proper waste classification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-background w-full py-20">
          <h1 className="font-semibold text-4xl">Waste Categories</h1>
          <div className="w-[80%]">
            <WasteCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
