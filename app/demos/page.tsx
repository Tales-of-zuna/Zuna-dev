"use client";
import Background from "@/components/layout/background";
import { Image } from "@nextui-org/react";
import dayjs from "dayjs";
import { Key, useEffect, useState } from "react";

const Demos = () => {
  type Blog = {
    _id: string;
    title: string;
    image: string;
    categories: Array<String>;
    createdAt: Date;
    summary: string;
    video: string;
  };
  const [mounted, setMounted] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    const res = await fetch("/api/blogs");
    setBlogs(await res.json());
  };
  useEffect(() => {
    getBlogs();
    setMounted(true);
  }, []);
  return (
    <div
      className={`transition-all pt-24 transform duration-1000 ${
        mounted
          ? " opacity-100 bg-gradient-to-tl to-slate-800 from-black flex min-h-screen p-4 justify-center"
          : "opacity-50 "
      }`}
    >
      <div className="hidden md:flex gap-12 overflow-hidden fixed z-0 h-full top-0 opacity-10 left-0 w-full items-center">
        <Background />
      </div>
      <div className="text-gray-400 w-full md:w-2/3 space-y-8">
        <div>
          <p className="text-3xl font-bold">Demos</p>
          <p className="text-sm">
            Experiments in Action: Showcasing My Project Demos
          </p>
        </div>
        {/* start of filters */}
        <div className="flex flex-wrap gap-4">
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-100 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            Technology{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
              />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-200 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            Web development{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>semantic-web</title>
              <path d="M12.9 4.22C18.73 6.84 20 2 20 2S18.89 8.07 13.79 10.55C12.75 11.06 12.1 11.33 12.1 11.33L3.73 7.25L12.1 3.82C12.1 3.82 11.9 3.76 12.9 4.22M11.12 22L3.33 17.78V9.07L11.12 13.04V22M12.88 22L20.68 17.78V9.07L12.88 13.04V22Z" />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-300 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            Life style{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>tree</title>
              <path d="M11,21V16.74C10.53,16.91 10.03,17 9.5,17C7,17 5,15 5,12.5C5,11.23 5.5,10.09 6.36,9.27C6.13,8.73 6,8.13 6,7.5C6,5 8,3 10.5,3C12.06,3 13.44,3.8 14.25,5C14.33,5 14.41,5 14.5,5A5.5,5.5 0 0,1 20,10.5A5.5,5.5 0 0,1 14.5,16C14,16 13.5,15.93 13,15.79V21H11Z" />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-500 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            Travel{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>airplane</title>
              <path d="M20.56 3.91C21.15 4.5 21.15 5.45 20.56 6.03L16.67 9.92L18.79 19.11L17.38 20.53L13.5 13.1L9.6 17L9.96 19.47L8.89 20.53L7.13 17.35L3.94 15.58L5 14.5L7.5 14.87L11.37 11L3.94 7.09L5.36 5.68L14.55 7.8L18.44 3.91C19 3.33 20 3.33 20.56 3.91Z" />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-700 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            Cooking{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>chef-hat</title>
              <path d="M12.5,1.5C10.73,1.5 9.17,2.67 8.67,4.37C8.14,4.13 7.58,4 7,4A4,4 0 0,0 3,8C3,9.82 4.24,11.41 6,11.87V19H19V11.87C20.76,11.41 22,9.82 22,8A4,4 0 0,0 18,4C17.42,4 16.86,4.13 16.33,4.37C15.83,2.67 14.27,1.5 12.5,1.5M12,10.5H13V17.5H12V10.5M9,12.5H10V17.5H9V12.5M15,12.5H16V17.5H15V12.5M6,20V21A1,1 0 0,0 7,22H18A1,1 0 0,0 19,21V20H6Z" />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100 " : "translate-y-4 opacity-0"
            } delay-1000 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            Photograph{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>camera</title>
              <path d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
            </svg>
          </button>
        </div>
        {/* end of filters */}
        <div
          className={`${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          } grid grid-cols-1 md:grid-cols-4 transition-all transform duration-300 ease-in-out delay-1000 gap-4`}
        >
          {blogs.map((blog: Blog, idx: Key | null | undefined) => {
            return (
              <div
                key={idx}
                className="col-span-1  hover:-translate-y-2 hover:outline outline-1 outline-slate-500 active:scale-95 transition-all transform duration-300 ease-in-out rounded-lg bg-slate-700 bg-opacity-30 backdrop-blur-sm"
              >
                {/* <Image
                  alt=""
                  className="rounded-t-lg rounded-b-none"
                  src={blog.image}
                /> */}
                <video
                  src={blog.video}
                  className="rounded-t-lg"
                  loop
                  muted
                  autoPlay
                />
                <div className="p-4 space-y-4">
                  <div>
                    <p className="font-bold text-slate-200 truncate">
                      {blog.title}
                    </p>
                    <p className="line-clamp-2 text-sm">{blog.summary}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">{dayjs(Date.now()).format("YYYY.MM.DD")}</p>
                    <Image
                      alt=""
                      className="rounded-full h-7 w-7"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/50/Lex_Fridman_teaching_at_MIT_in_2018.png"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Demos;
