"use client";
import { Image } from "@nextui-org/react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminBlogs = () => {
  type Blog = {
    _id: string;
    title: string;
    image: string;
    categories: Array<String>;
    createdAt: Date;
    summary: string;
    video: string;
    slug: string;
  };
  const router = useRouter();
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
    <div className="pt-4">
      <div
        className={`${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        } grid grid-cols-1 md:grid-cols-4 transition-all transform duration-300 ease-in-out delay-1000 gap-4`}
      >
        {blogs.map((blog: Blog, idx) => {
          return (
            <div
              key={idx}
              className="col-span-1 relative hover:-translate-y-2 hover:outline outline-1 outline-slate-500 active:scale-95 transition-all transform duration-300 ease-in-out rounded-lg bg-slate-700 bg-opacity-30 backdrop-blur-sm"
            >
              <div className="flex  absolute z-10 top-2 right-2 gap-2">
                <button className="rounded-full text-gray-400 hover:text-gray-200 transition-all transform duration-300 ease-in-out border border-gray-700 border-opacity-50 backdrop-blur-sm p-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
                <button className="rounded-full text-gray-400 hover:text-gray-200 transition-all transform duration-300 ease-in-out border border-gray-700 border-opacity-50 backdrop-blur-sm p-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                </button>
              </div>
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
                  <p className="">
                    {dayjs(blog.createdAt).format("YYYY.MM.DD")}
                  </p>
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
  );
};

export default AdminBlogs;
