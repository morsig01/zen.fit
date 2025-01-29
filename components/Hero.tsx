import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div className="bg-transparent flex flex-col items-center w-full">
      <div className="relative w-full h-screen bg-cover bg-center bg-[url('/gym.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-5xl lg:text-9xl font-bold">
            Welcome to ZenFit!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
