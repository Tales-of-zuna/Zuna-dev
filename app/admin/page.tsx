"use client";
import BlogsComponent from "@/components/admin/tabs/blogs";
import ChatsComponent from "@/components/admin/tabs/chats";
import DashboardComponent from "@/components/admin/tabs/dashboard";
import DemosComponent from "@/components/admin/tabs/demos";
import ExperimentsComponent from "@/components/admin/tabs/experiments";
import PodcastsComponent from "@/components/admin/tabs/podcasts";
import ProjectsComponent from "@/components/admin/tabs/projects";
import { useState } from "react";

const Admin = () => {
  type link = {
    title: string;
    color: string;
    tab: string;
    icon: string;
  };
  const links = [
    {
      title: "Dashboard",
      color: "to-emerald-100",
      tab: "dashboard",
      icon: "M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z",
    },
    {
      title: "Blogs",
      color: "to-yellow-100",

      tab: "blogs",
      icon: "M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z",
    },
    {
      title: "Projects",
      color: "to-pink-100",

      tab: "projects",
      icon: "M20 2H4C3.45 2 3 2.45 3 3V4C3 4.55 3.45 5 4 5H5V14H11V16.59L6.79 20.79L8.21 22.21L11 19.41V22H13V19.41L15.79 22.21L17.21 20.79L13 16.59V14H19V5H20C20.55 5 21 4.55 21 4V3C21 2.45 20.55 2 20 2M17 12H7V5H17V12Z",
    },
    {
      title: "Experiments",
      color: "to-cyan-100",

      tab: "experiments",
      icon: "M6,22A3,3 0 0,1 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6A1,1 0 0,1 8,5V4A2,2 0 0,1 10,2H14A2,2 0 0,1 16,4V5A1,1 0 0,1 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19A3,3 0 0,1 18,22H6M5,19A1,1 0 0,0 6,20H18A1,1 0 0,0 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10A1,1 0 0,0 12,11A1,1 0 0,0 13,12A1,1 0 0,0 14,11A1,1 0 0,0 13,10Z",
    },
    {
      title: "Podcasts",
      color: "to-green-100",

      tab: "podcasts",
      icon: "M17.68,7.22V8.62C17.68,9.3 17.13,9.86 16.43,9.86C15.74,9.86 15.18,9.3 15.18,8.62V7.22A1.25,1.25 0 0,1 16.43,5.97C17.13,5.97 17.68,6.53 17.68,7.22M13.25,8.36V15.63C13.25,16.32 12.69,16.88 12,16.88C11.31,16.88 10.75,16.32 10.75,15.63V8.36C10.75,7.68 11.31,7.11 12,7.11C12.69,7.11 13.25,7.68 13.25,8.36M22,11.3V12.7C22,13.38 21.44,13.94 20.75,13.94C20.06,13.94 19.5,13.38 19.5,12.7V11.3C19.5,10.61 20.06,10.06 20.75,10.06C21.44,10.06 22,10.61 22,11.3M4.5,11.3V12.7C4.5,13.38 3.94,13.94 3.25,13.94C2.55,13.94 2,13.38 2,12.7V11.3C2,10.61 2.55,10.06 3.25,10.06C3.94,10.06 4.5,10.61 4.5,11.3M8.82,15.38V16.77C8.82,17.45 8.26,18 7.57,18C6.88,18 6.32,17.45 6.32,16.77V15.38C6.32,14.68 6.88,14.13 7.57,14.13A1.25,1.25 0 0,1 8.82,15.38M13.25,19.36V20.75A1.25,1.25 0 0,1 12,22A1.25,1.25 0 0,1 10.75,20.75V19.36A1.25,1.25 0 0,1 12,18.11A1.25,1.25 0 0,1 13.25,19.36M13.25,3.25V4.64A1.25,1.25 0 0,1 12,5.89A1.25,1.25 0 0,1 10.75,4.64V3.25C10.75,2.55 11.31,2 12,2A1.25,1.25 0 0,1 13.25,3.25M17.68,12.34V16.77C17.68,17.46 17.13,18 16.43,18C15.74,18 15.18,17.46 15.18,16.77V12.34C15.18,11.64 15.74,11.09 16.43,11.09C17.13,11.09 17.68,11.64 17.68,12.34M8.82,7.22V11.65C8.82,12.35 8.26,12.9 7.57,12.9A1.25,1.25 0 0,1 6.32,11.65V7.22A1.25,1.25 0 0,1 7.57,5.97A1.25,1.25 0 0,1 8.82,7.22Z",
    },
    {
      title: "Demos",
      color: "to-slate-100",

      tab: "demos",
      icon: "M12,12C12,9 14.5,6.5 17.5,6.5C20.5,6.5 23,9 23,12H12M12,12C12,15 9.5,17.5 6.5,17.5C3.5,17.5 1,15 1,12H12M12,12C9,12 6.5,9.5 6.5,6.5C6.5,3.5 9,1 12,1V12M12,12C15,12 17.5,14.5 17.5,17.5C17.5,20.5 15,23 12,23V12Z",
    },
    {
      title: "Chats",
      color: "to-orange-100",
      tab: "chats",
      icon: "M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16Z",
    },
  ];
  const [activeTab, setActiveTab] = useState<link>(links[0]);

  return (
    <div className="h-screen flex p-4 bg-slate-50">
      <div
        className={`h-full w-1/5 shadow-md bg-gradient-to-b from-white ${activeTab.color} flex flex-col justify-between rounded-lg p-8`}
      >
        <div className="space-y-4">
          {links.map((link) => {
            return (
              <button
                onClick={() => {
                  setActiveTab(link);
                }}
                key={link.tab}
                className={`${
                  link.tab === activeTab?.tab
                    ? "translate-x-2 bg-slate-100 border font-semibold text-slate-700"
                    : "translate-x-0 text-slate-500"
                }  flex transition-all bg-opacity-50  w-full hover:text-slate-800 duration-300 ease-in-out items-center gap-4 p-2 rounded-lg`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={link.icon} />
                </svg>
                {link.title}
              </button>
            );
          })}
        </div>
        <div>
          <p className=" text-center text-slate-800 text-sm opacity-50 font-bold">
            v1.3
          </p>
        </div>
      </div>
      <div className="h-full text-slate-800 w-4/5 overflow-auto p-8">
        {activeTab?.tab === "dashboard" ? (
          <div className="space-y-4">
            <p className="text-2xl font-bold capitalize ">{activeTab?.tab}</p>
            <DashboardComponent />
          </div>
        ) : activeTab?.tab === "blogs" ? (
          <div className="space-y-4">
            <p className="text-2xl font-bold capitalize ">{activeTab?.tab}</p>
            <BlogsComponent />
          </div>
        ) : activeTab?.tab === "projects" ? (
          <div className="space-y-4">
            <p className="text-2xl font-bold capitalize ">{activeTab?.tab}</p>
            <ProjectsComponent />
          </div>
        ) : activeTab?.tab === "experiments" ? (
          <div className="space-y-4">
            <p className="text-2xl font-bold capitalize ">{activeTab?.tab}</p>
            <ExperimentsComponent />
          </div>
        ) : activeTab?.tab === "podcasts" ? (
          <div className="space-y-4">
            <p className="text-2xl font-bold capitalize ">{activeTab?.tab}</p>
            <PodcastsComponent />
          </div>
        ) : activeTab?.tab === "demos" ? (
          <div className="space-y-4">
            <p className="text-2xl font-bold capitalize ">{activeTab?.tab}</p>
            <DemosComponent />
          </div>
        ) : activeTab?.tab === "chats" ? (
          <div className="space-y-4">
            <p className="text-2xl font-bold capitalize ">{activeTab?.tab}</p>
            <ChatsComponent />
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-2xl font-bold capitalize ">{activeTab?.tab}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
