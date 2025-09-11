import React from "react";
import { Trash2, Truck, Biohazard, TriangleAlert, Send } from "lucide-react";
import DragDropUpload from "../components/DragDropUpload";
import { useState } from "react";

const ReportPage: React.FC = () => {
  const [issue, setIssue] = useState<string>("Illegal Dumbing");
  const [page, setPage] = useState<number>(1);

  return (
    <div className="flex flex-col gap-3 bg-background items-center p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-center">
        Report Environmental Issues
      </h1>
      <p className="text-sm sm:text-md text-center">
        Help keep your community clean by reporting waste management problems
      </p>
      <div className="w-full sm:w-[90%] lg:w-[80%] h-max bg-white shadow-2xl rounded-2xl px-4 sm:px-8 lg:px-14 py-6 sm:py-8 lg:py-10 gap-6 flex flex-col">
        {page === 1 ? (
          <>
            <h1 className="font-semibold text-2xl sm:text-3xl">File a report</h1>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg sm:text-xl">Issue Type</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full sm:w-max">
                <button
                  onClick={() => setIssue("Illegal Dumbing")}
                  className={`bg-buttons cursor-pointer hover:opacity-75 shadow px-3 sm:px-4 py-2 rounded-2xl flex items-center gap-2 text-sm sm:text-base ${
                    issue === "Illegal Dumbing"
                      ? "border-3 border-green-700 text-green-800"
                      : "border-3 border-buttons"
                  }`}
                >
                  <Trash2 className="text-green-800" /> Illegal Dumbing
                </button>
                <button
                  onClick={() => setIssue("Missed Collection")}
                  className={`bg-buttons cursor-pointer hover:opacity-75 shadow px-3 sm:px-4 py-2 rounded-2xl flex items-center gap-2 text-sm sm:text-base ${
                    issue === "Missed Collection"
                      ? "border-3 border-green-700 text-green-800"
                      : "border-3 border-buttons"
                  }`}
                >
                  <Truck className="text-green-800" />
                  Missed Collection
                </button>
                <button
                  onClick={() => setIssue("Overflowing Bin")}
                  className={`bg-buttons cursor-pointer hover:opacity-75 shadow px-3 sm:px-4 py-2 rounded-2xl flex items-center gap-2 text-sm sm:text-base ${
                    issue === "Overflowing Bin"
                      ? "border-3 border-green-700 text-green-800"
                      : "border-3 border-buttons"
                  }`}
                >
                  <TriangleAlert className="text-green-800" />
                  Overflowing Bin
                </button>
                <button
                  onClick={() => setIssue("Hazardous Waste")}
                  className={`bg-buttons cursor-pointer hover:opacity-75 shadow px-3 sm:px-4 py-2 rounded-2xl flex items-center gap-2 text-sm sm:text-base ${
                    issue === "Hazardous Waste"
                      ? "border-3 border-green-700 text-green-800"
                      : "border-3 border-buttons"
                  }`}
                >
                  <Biohazard className="text-green-800" />
                  Hazardous Waste
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg sm:text-xl">Location</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    className="bg-buttons p-2 px-4 sm:px-6 w-full sm:w-100 shadow rounded-2xl"
                    type="text"
                    placeholder="Enter address or location"
                  />
                  <button className="bg-blue-400 p-3 rounded-2xl cursor-pointer hover:opacity-75 shadow flex items-center justify-center">
                    <Send className="text-white" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg sm:text-xl">Description</h3>
                <div className="flex gap-3">
                  <textarea
                    className="bg-buttons p-4 scrollbar-hide h-40 sm:h-60 px-4 sm:px-6 w-full lg:w-140 shadow rounded-2xl resize-none"
                    placeholder="Describe the issue in detail...."
                  />
                </div>
                <button
                  onClick={() => setPage(2)}
                  className="bg-green-700 p-3 sm:p-4 px-10 sm:px-14 cursor-pointer hover:opacity-75 text-white rounded-lg font-semibold mt-2 w-max"
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-semibold text-2xl sm:text-3xl">Almost Done</h1>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg sm:text-xl">Photo Evidence</h3>
              <DragDropUpload />
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg sm:text-xl">Contact Information</h3>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <input
                    className="bg-buttons p-3 sm:p-4 px-4 sm:px-6 w-full sm:w-75 shadow rounded-2xl"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="bg-buttons p-3 sm:p-4 px-4 sm:px-6 w-full sm:w-75 shadow rounded-2xl"
                    type="number"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-2 gap-6 sm:gap-8">
                <input
                  className="bg-buttons p-3 sm:p-4 px-4 sm:px-6 w-full shadow rounded-2xl"
                  type="email"
                  placeholder="Email"
                />
                <label className="flex items-center cursor-pointer">
                  <input type="checkbox" className="peer hidden" />
                  <span
                    className="
                      w-4 h-4 flex items-center justify-center
                      border-0 rounded bg-gray-200
                      peer-checked:bg-green-700
                      peer-checked:before:content-['✔']
                      peer-checked:before:text-white
                      text-xs
                    "
                  ></span>
                  <span className="ml-2 text-sm sm:text-base">Report Anonymously</span>
                </label>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <button
                  onClick={() => setPage(1)}
                  className="bg-buttons p-3 sm:p-4 px-10 sm:px-14 cursor-pointer hover:opacity-75 text-neutral-500 rounded-lg font-semibold mt-2 w-full sm:w-max"
                >
                  Back
                </button>
                <button
                  onClick={() => setPage(2)}
                  className="bg-green-700 p-3 sm:p-4 px-10 sm:px-14 cursor-pointer hover:opacity-75 text-white rounded-lg font-semibold mt-2 w-full sm:w-max"
                >
                  Submit
                </button>
              </div>
            </div>
          </>
        )}

        <div className="flex justify-center items-center gap-2 mt-2">
          <div
            className={`w-3 h-3 rounded-full ${
              page == 1 ? "bg-green-700" : "bg-buttons"
            }`}
          ></div>
          <div
            className={`w-3 h-3 rounded-full ${
              page == 2 ? "bg-green-700" : "bg-buttons"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
