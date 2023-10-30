"use client";

import { Button, Input } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      className="h-screen text-slate-700 flex justify-center items-center p-4 "
      style={{
        backgroundColor: `rgb(168, 162, 158)`,
        backgroundImage: `radial-gradient(at 63% 21%, rgb(203, 213, 225) 0, transparent 58%), radial-gradient(at 43% 58%, rgb(8, 145, 178) 0, transparent 67%), radial-gradient(at 46% 12%, rgb(190, 242, 100) 0, transparent 90%), radial-gradient(at 20% 98%, rgb(187, 247, 208) 0, transparent 7%), radial-gradient(at 59% 17%, rgb(236, 72, 153) 0, transparent 3%), radial-gradient(at 47% 50%, rgb(56, 189, 248) 0, transparent 78%)`,
      }}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 space-y-4">
        <div>
          <p className="font-bold">Login</p>
          <p className="text-sm opacity-50">Please enter your details</p>
        </div>
        <div className="space-y-2">
          <Input
            onChange={(event) => {
              setUserName(event.currentTarget.value);
            }}
            isClearable
            size="sm"
            label="Email"
          />
          <Input
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
            isClearable
            size="sm"
            label="Password"
            type="Password"
          />
        </div>
        <div className="flex justify-center">
          <Button
            onClick={async () => {
              const credentials = {
                email: username,
                password: password,
              };
              const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
              });
              Cookies.set("user", JSON.stringify(await res.json()));
            }}
            className="bg-stone-800 text-white font-bold uppercase"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
