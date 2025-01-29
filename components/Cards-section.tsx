import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-cols-3 gap-12 py-32 px-80">
        <div className="relative bg-[url('/gym-enviroment.jpg')] bg-cover bg-center shadow-lg rounded p-20 text-white">
          <div className="absolute inset-0 bg-black/80 rounded"></div>
          <div className="relative">
            <h2 className="text-2xl font-semibold mb-6">About us</h2>
            <p className="mb-6">
              Discover our story, philosophy, and how we strive to make fitness
              fun, inclusive, and accessible to everyone. Meet our passionate
              founder, Ingvild Petterson.
            </p>
            <Link href="/about">
            <p className="text-pink-500 font-bold underline hover:text-pink-300">
                Learn more about us
            </p>
            </Link>
          </div>
        </div>

        <div className="relative bg-[url('/high-five.jpg')] bg-cover bg-center shadow-lg rounded p-20 text-white">
          <div className="absolute inset-0 bg-black/80 rounded"></div>
          <div className="relative">
            <h2 className="text-2xl font-semibold mb-6">Membership</h2>
            <p className="mb-6">
            Unlock your potential with our flexible membership options. Whether you're just starting or looking to level up, we have the perfect plan for you.
            </p>
            <Link href="/membership">
            <p className="text-pink-500 font-bold underline hover:text-pink-300">
                Manage membership plans
            </p>
            </Link>
          </div>
        </div>

        <div className="relative bg-[url('/stretching.jpg')] bg-cover bg-center shadow-lg rounded p-20 text-white">
          <div className="absolute inset-0 bg-black/80 rounded"></div>
          <div className="relative">
            <h2 className="text-2xl font-semibold mb-6">Booking</h2>
            <p className="mb-6">
            Ready to take the next step? Schedule your training session today and let&apos;s reach your fitness goals together.
            </p>
            <Link href="/booking">
            <p className="text-pink-500 font-bold underline hover:text-pink-300">
                Book now
            </p>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Cards;
