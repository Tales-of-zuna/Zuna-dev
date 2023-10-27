"use client";
import LoginLogo from "@/components/layout/loginLogo";
import LoginMonster from "@/components/layout/login_monster";
import { Image, Input } from "@nextui-org/react";

const Login = () => {
  return (
    <div className="h-screen text-stone-800 bg-emerald-300 p-8 w-full flex justify-end items-center">
      <div
        className="absolute top-64 left-40 z-0"
        style={{ background: `radial-gradient(#059669, #6ee7b7, #6ee7b7)` }}
      >
        <Image
          src="/monsterFaceFeature.png"
          alt=""
          style={{ height: `600px` }}
        />
      </div>
      <div className="h-full flex justify-center items-center">
        <LoginMonster />
      </div>
      {/* <Background /> */}
      <div className="bg-white backdrop-blur-sm bg-opacity-20 w-full flex flex-col justify-between md:w-1/3 p-4 md:p-16  rounded-lg">
        <div className="space-y-8 h-full">
          <div className="flex justify-center">
            <div className="bg-gradient-to-tl opacity-90 from-black shadow-xl to-stone-600 rounded-full p-4">
              <LoginLogo />
            </div>
          </div>
          <div>
            <div className="font-bold text-4xl text-center">
              Welcome back buddy!
            </div>
            <div className="text-center opacity-60 animate-pulse">
              Please enter your details
            </div>
          </div>
          <div className="space-y-4">
            <Input isClearable size="sm" label="Email" />
            <Input isClearable size="sm" label="Password" type="Password" />
            <div className="flex justify-end">
              <button className="underline text-xs">Forgot password</button>
            </div>
          </div>
          <div>
            <button className="bg-stone-800 transition-all transform duration-300 ease-in-out active:scale-95 hover:scale-105 hover:shadow-lg hover:bg-stone-700 active:bg-stone-900 w-full rounded-lg py-2 text-white text-center font-bold">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
