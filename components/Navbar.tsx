'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-black/30 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={29} height={29} />
            </Link>
          </div>

          {/* Links (Desktop) */}
          <div className="hidden md:flex space-x-20">
            <Link href="/about">
              <div className="text-white hover:text-gray-300">About us</div>
            </Link>
            <Link href="/membership">
              <div className="text-white hover:text-gray-300">Membership</div>
            </Link>
            <Link href="/booking">
              <div className="text-white hover:text-gray-300">Booking</div>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <Link href="/about">
              <div className="block px-4 py-2 text-white hover:bg-white hover:text-black">About us</div>
            </Link>
            <Link href="/membership">
              <div className="block px-4 py-2 text-white hover:bg-blue-600">Membership</div>
            </Link>
            <Link href="/booking">
              <div className="block px-4 py-2 text-white hover:bg-blue-600">Booking</div>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;