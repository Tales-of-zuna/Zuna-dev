"use client";
import Background from "@/components/layout/background";
import { Image } from "@nextui-org/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Projects = () => {
  type Blog = {
    _id: string;
    title: string;
    image: string;
    categories: Array<String>;
    createdAt: Date;
    summary: string;
  };
  const [mounted, setMounted] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    const res = await fetch("/api/blogs");
    console.log("🚀 ~ file: page.tsx:10 ~ getBlogs ~ res:", res);
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
          ? " opacity-100 bg-gradient-to-tl to-pink-950 from-black flex min-h-screen p-4 justify-center"
          : "opacity-50 "
      }`}
    >
      <div className="hidden md:flex gap-12 overflow-hidden fixed z-0 h-full top-0 opacity-10 left-0 w-full items-center">
        <Background />
      </div>
      <div className="text-gray-400 w-full md:w-2/3 space-y-8">
        <div>
          <p className="text-3xl font-bold">Projects</p>
          <p className="text-sm">From Vision to Reality: My Project Showcase</p>
        </div>
        {/* start of filters */}
        <div className="flex flex-wrap gap-4">
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-100 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            NextJS{" "}
            <svg
              className="h-5 w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>react</title>
              <path d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z" />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-200 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            MongoDB{" "}
            <svg
              className="h-5 w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>file-document</title>
              <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-300 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            VueJS{" "}
            <svg
              className="h-5 w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>vuejs</title>
              <path d="M2,3H5.5L12,15L18.5,3H22L12,21L2,3M6.5,3H9.5L12,7.58L14.5,3H17.5L12,13.08L6.5,3Z" />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-500 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            PostgreSQL{" "}
            <svg
              className="h-5 w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>database</title>
              <path d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z" />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-700 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            ExpressJS{" "}
            <svg
              className="h-5 w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>nodejs</title>
              <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" />
            </svg>
          </button>
          <button
            className={`${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } delay-1000 rounded-lg flex gap-1 items-center px-4 py-1 bg-slate-700 bg-opacity-20 text-slate-300 hover:text-white hover:scale-105 active:scale-95 transition-all transform duration-300 ease-in-out`}
          >
            Java{" "}
            <svg
              className="h-5 w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>language-java</title>
              <path d="M16.5,6.08C16.5,6.08 9.66,7.79 12.94,11.56C13.91,12.67 12.69,13.67 12.69,13.67C12.69,13.67 15.14,12.42 14,10.82C12.94,9.35 12.14,8.62 16.5,6.08M12.03,7.28C16.08,4.08 14,2 14,2C14.84,5.3 11.04,6.3 9.67,8.36C8.73,9.76 10.13,11.27 12,13C11.29,11.3 8.78,9.84 12.03,7.28M9.37,17.47C6.29,18.33 11.25,20.1 15.16,18.43C14.78,18.28 14.41,18.1 14.06,17.89C12.7,18.2 11.3,18.26 9.92,18.07C8.61,17.91 9.37,17.47 9.37,17.47M14.69,15.79C12.94,16.17 11.13,16.26 9.35,16.05C8.04,15.92 8.9,15.28 8.9,15.28C5.5,16.41 10.78,17.68 15.5,16.3C15.21,16.19 14.93,16 14.69,15.79M18.11,19.09C18.11,19.09 18.68,19.56 17.5,19.92C15.22,20.6 8.07,20.81 6.09,19.95C5.38,19.64 6.72,19.21 7.14,19.12C7.37,19.06 7.6,19.04 7.83,19.04C7.04,18.5 2.7,20.14 5.64,20.6C13.61,21.9 20.18,20 18.11,19.09M15.37,14.23C15.66,14.04 15.97,13.88 16.29,13.74C16.29,13.74 14.78,14 13.27,14.14C11.67,14.3 10.06,14.32 8.46,14.2C6.11,13.89 9.75,13 9.75,13C8.65,13 7.57,13.26 6.59,13.75C4.54,14.75 11.69,15.2 15.37,14.23M16.27,16.65C16.25,16.69 16.23,16.72 16.19,16.75C21.2,15.44 19.36,12.11 16.96,12.94C16.83,13 16.72,13.08 16.65,13.19C16.79,13.14 16.93,13.1 17.08,13.07C18.28,12.83 20,14.7 16.27,16.65M16.4,21.26C13.39,21.78 10.31,21.82 7.28,21.4C7.28,21.4 7.74,21.78 10.09,21.93C13.69,22.16 19.22,21.8 19.35,20.1C19.38,20.11 19.12,20.75 16.4,21.26Z" />
            </svg>
          </button>
        </div>
        {/* end of filters */}
        <div className="grid grid-cols-4 gap-4">
          {blogs.map((blog: Blog, idx) => {
            return (
              <div
                key={idx}
                className="col-span-1  hover:-translate-y-2 hover:outline outline-1 outline-slate-500 active:scale-95 transition-all transform duration-300 ease-in-out rounded-lg bg-slate-700 bg-opacity-30 backdrop-blur-sm"
              >
                <Image
                  alt=""
                  className="rounded-t-lg rounded-b-none"
                  src={blog.image}
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

export default Projects;
