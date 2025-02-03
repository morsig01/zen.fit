import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="bg-transparent flex flex-col items-center w-full">
      <div className="relative w-full h-screen bg-cover bg-center bg-[url('/gym.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-24">
          <span className="text-white text-5xl lg:text-9xl font-bold">
            Welcome to ZenFit!
          </span>
          <div>
            <Link href={"/membership"} className="bg-pink-500 text-white py-4 px-8 rounded-full hover:bg-pink-300 hover:text-black focus:outline-none" >
              Get Membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Main;
