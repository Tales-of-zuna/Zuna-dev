"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const BlogDetails = ({ params }: { params: { slug: string } }) => {
  type blog = {
    createdAt: string;
    title: string;
    image: string;
    content: string;
  };
  const [data, setData] = useState<blog>();
  const [mounted, setMounted] = useState(false);
  const getBlog = async () => {
    const res = await fetch(`/api/blogs?slug=${params.slug}`);

    const data = await res.json();
    setData(data);
    console.log(data);
    return data;
  };
  useEffect(() => {
    getBlog();
    setMounted(true);
  }, []);
  return (
    <div
      className={`${
        mounted ? "opacity-100" : "opacity-0"
      } transition-all flex justify-center p-4 pt-24 transform duration-300 ease-in-out min-h-screen bg-stone-950`}
    >
      <div className="w-full md:w-1/3 space-y-8 text-gray-400 z-10">
        <div className="space-y-4">
          <p className="text-4xl font-bold text-gray-200">{data?.title}</p>
          <p className="text-sm">
            {dayjs(data?.createdAt).format("YYYY.MM.DD")}
          </p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data?.content as TrustedHTML }}
        ></div>
      </div>
    </div>
  );
};

export default BlogDetails;
