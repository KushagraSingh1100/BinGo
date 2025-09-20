import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ArrowDownWideNarrow, ArrowUpWideNarrow, ChevronDown, LoaderPinwheel, SquareChevronRight } from "lucide-react";
import { Input } from "../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

interface Course {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  reward: number;
  course_time: number;
  questions: number;
  created_at: string;
  updated_at: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [sortBy, setSortBy] = useState<string>("reward");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:8000/courses/reward");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setCourses(data.courses);
        console.log("courses:" + courses);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [courses]);

  return (
    <>
      <Navbar current="Courses" />
      <div className="flex flex-col gap-4 items-center p-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold p-1 bg-gradient-to-r from-[#0A380C] to-[#00FF0B] bg-clip-text text-transparent">
            Waste Management Courses
          </h1>
          <p className="text-base sm:text-lg font-medium">
            Learn practice and contribute to a cleaner city.
          </p>
        </div>
        <div className="flex flex-col bg-white p-6 sm:p-10 px-4 w-full sm:w-[90%] md:w-[75%] rounded-2xl shadow-xl">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between w-full items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full sm:w-50 flex gap-2 items-center justify-center bg-green-600 text-white p-2 px-4 rounded-2xl cursor-pointer">
                Sort By <ChevronDown className="w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-50 flex flex-col gap-1 bg-background text-neutral-500 p-2 px-4 rounded-2xl cursor-pointer">
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("reward");
                  }}
                  className="flex gap-2 items-center hover:border-none rounded-md p-1 px-2 hover:bg-green-600 hover:text-white"
                >
                  Rewards <ArrowUpWideNarrow className="h-5" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("reward r");
                  }}
                  className="flex gap-2 items-center hover:border-none rounded-md p-1 px-2 hover:bg-green-600 hover:text-white"
                >
                  Rewards <ArrowDownWideNarrow className="h-5" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("questions");
                  }}
                  className="flex gap-2 items-center hover:border-none rounded-md p-1 px-2 hover:bg-green-600 hover:text-white"
                >
                  Questions <ArrowUpWideNarrow className="h-5" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("questions r");
                  }}
                  className="flex gap-2 items-center hover:border-none rounded-md p-1 px-2 hover:bg-green-600 hover:text-white"
                >
                  Questions <ArrowDownWideNarrow className="h-5" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("time");
                  }}
                  className="flex gap-2 items-center hover:border-none rounded-md p-1 px-2 hover:bg-green-600 hover:text-white"
                >
                  Course Time <ArrowUpWideNarrow className="h-5" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setSortBy("time r");
                  }}
                  className="flex gap-2 items-center hover:border-none rounded-md p-1 px-2 hover:bg-green-600 hover:text-white"
                >
                  Course Time <ArrowDownWideNarrow className="h-5" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="w-full sm:w-auto">
              <Input
                className="p-4 sm:p-5 w-full sm:w-auto border-green-400 focus-visible:ring-green-300 focus-visible:border-transparent active:ring-green-400"
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search courses..."
              />
            </div>
          </div>
          <div className="w-full min-h-[300px] pt-6 md:pt-8 scrollbar-hide overflow-y-scroll flex flex-col items-center justify-center rounded-lg p-2 sm:p-4">
            {loading && (
              <LoaderPinwheel className="text-green-800 animate-spin w-10 h-10" />
            )}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && courses.length === 0 && (
              <p>No courses available right now.</p>
            )}
            {!loading &&
              !error &&
              courses
                .filter((course) =>
                  course.title.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => {
                  if (sortBy === "reward") {
                    return b.reward - a.reward;
                  }
                  if (sortBy === "reward r") {
                    return a.reward - b.reward;
                  }
                  if (sortBy === "questions") {
                    return b.questions - a.questions;
                  }
                  if (sortBy === "questions r") {
                    return a.questions - b.questions;
                  }
                  if (sortBy === "time") {
                    return b.course_time - a.course_time;
                  }
                  if (sortBy === "time r") {
                    return a.course_time - b.course_time;
                  }
                  return 0;
                })
                .map((course) => (
                  <div
                    key={course.id}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center justify-between cursor-pointer w-full hover:opacity-65 bg-course-background p-4 rounded-lg shadow mb-4"
                  >
                    <div className="w-full sm:w-auto flex justify-center">
                      <img
                        className="h-40 sm:h-full max-w-full sm:max-w-45 object-cover rounded-md"
                        src={course.thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="w-full">
                      <h2 className="text-green-600 text-xl sm:text-2xl font-bold">
                        {course.title}
                      </h2>
                      <p className="text-neutral-700 text-sm sm:text-base">
                        {course.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 gap-2 sm:gap-0">
                        <p className="text-neutral-600">
                          <span className="font-medium text-black">
                            Reward:
                          </span>{" "}
                          {course.reward}
                        </p>
                        <p className="text-neutral-600">
                          <span className="font-medium text-black">
                            Questions:
                          </span>{" "}
                          {course.questions}
                        </p>
                        <p className="text-neutral-600">
                          <span className="font-medium text-black">
                            Course Time Limit:
                          </span>{" "}
                          {course.course_time} Hours
                        </p>
                      </div>
                    </div>
                    <div className="w-full sm:w-max h-max flex justify-center sm:justify-end">
                      <SquareChevronRight className="w-8 h-8 mr-0 sm:mr-4 text-green-700" />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
