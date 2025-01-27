import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div className="bg-transparent flex flex-col items-center w-full">
      <div className="w-full">
        <div className="relative z-0 w-full h-screen bg-cover bg-center bg-[url('/gym.jpg')]">
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-black"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10/12 h-1/3">
              <span className="text-white text-5xl lg:text-9xl font-bold">
                Velkommen til ZenFit!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full bg-[#000000] py-16">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-col lg:flex-row justify-center gap-8">
          {/* Booking Card */}
          <div className="relative bg-white rounded-2xl p-8 w-full lg:w-1/3 flex items-center justify-center">
            <img
              className="w-24 h-24 lg:w-36 lg:h-36 object-cover"
              alt="Booking"
              src="/booking.png"
            />
            <div className="ml-8 text-center">
              <h2 className="text-[#f746a1] text-3xl lg:text-5xl font-semibold">
                Booking
              </h2>
            </div>
          </div>

          {/* Medlemsskap Card */}
          <div className="relative bg-white rounded-2xl p-8 w-full lg:w-1/3 flex items-center justify-center">
            <Image
              src="/medlemsskap.png"
              className="w-24 h-24 lg:w-36 lg:h-36 object-cover"
              alt="Medlemsskap"
              width={150}
              height={150}
            />
            <div className="ml-8 text-center">
              <h2 className="text-[#f746a1] text-3xl lg:text-5xl font-semibold">
                Medlemsskap
              </h2>
            </div>
          </div>

          {/* Senteret Card */}
          <div className="relative bg-white rounded-2xl p-8 w-full lg:w-1/3 flex items-center justify-center">
            <img
              src="/senteret.png"
              className="w-24 h-24 lg:w-36 lg:h-36 object-cover"
              alt="Senteret"
            />
            <div className="ml-8 text-center">
              <h2 className="text-[#f746a1] text-3xl lg:text-5xl font-semibold">
                Senteret
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;