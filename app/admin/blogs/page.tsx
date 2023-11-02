"use client";
import { Image, Input } from "@nextui-org/react";
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
    <div className="pt-4 space-y-4">
      <div className="flex items-center justify-between">
        <Input
          startContent={
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          }
          className="w-auto"
          color="success"
          variant="bordered"
        />
        <button
          onClick={() => router.push("/admin/blogs/create")}
          className="rounded-lg hover:scale-105 transition-all transform duration-300 hover:bg-emerald-700 active:scale-95 active:bg-emerald-900 hover:shadow-lg bg-emerald-800 shadow-lg p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <title>pen-plus</title>
            <path d="M20.7,7C20.4,7.4 20,7.7 20,8C20,8.3 20.3,8.6 20.6,9C21.1,9.5 21.6,9.9 21.5,10.4C21.5,10.9 21,11.4 20.5,11.9L16.4,16L15,14.7L19.2,10.5L18.2,9.5L16.8,10.9L13,7.1L17,3.3C17.4,2.9 18,2.9 18.4,3.3L20.7,5.6C21.1,6 21.1,6.7 20.7,7M3,17.2L12.6,7.6L16.3,11.4L6.8,21H3V17.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z" />
          </svg>
        </button>
      </div>
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
