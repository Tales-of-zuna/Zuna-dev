"use client";
import { Image } from "@nextui-org/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const BlogsComponent = () => {
  type author = {
    _id: string;
    name: string;
    email: string;
    mobile: number;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
  type blog = {
    _id: string;
    title: string;
    status: boolean;
    metadat: string;
    slug: string;
    summary: string;
    author: author;
    image: string;
    tags: string[];
    categories: string[];
    comments: [];
    createdAt: string;
    updatedAt: string;
    video: string;
  };
  const [blogs, setBlogs] = useState<blog[]>([]);
  const [mounted, setMounted] = useState(false);

  const getBlogs = async () => {
    const res = await fetch("/api/blogs");
    setBlogs(await res.json());
  };
  useEffect(() => {
    getBlogs();
    setMounted(true);
  }, []);

  return (
    <div className="space-y-4">
      <div className="w-full flex justify-end">
        <button className="rounded-full p-2 bg-stone-300 transition-all transform duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            viewBox="0 0 24 24"
            fill="currentColor"
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
        {blogs.map((blog: blog, idx) => {
          return (
            <div
              key={idx}
              className="col-span-1  hover:-translate-y-2 hover:shadow-lg active:shadow-sm  active:scale-95 transition-all transform duration-300 ease-in-out rounded-lg  bg-opacity-30 backdrop-blur-sm"
            >
              <video
                src={blog.video}
                className="rounded-t-lg"
                loop
                muted
                autoPlay
              />
              <div className="p-4 space-y-4">
                <div>
                  <p className="font-bold text-slate-800 truncate">
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

export default BlogsComponent;
