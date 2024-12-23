"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-[100px] flex border-b shadow-md">
      <div className="flex items-center w-full max-w-[1286px] mx-auto px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/Logo.png" 
            alt="Logo" 
            width={50} 
            height={32} 
            className="mr-4"
          />
          <h1 className="text-[30px] font-bold">Furniro</h1>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="ml-auto md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FiX className="text-3xl cursor-pointer" />
            ) : (
              <FiMenu className="text-3xl cursor-pointer" />
            )}
          </button>
        </div>

        {/* Navigation Links and Icons */}
        <div
          className={`absolute md:static top-[100px] left-0 w-full md:w-auto bg-white md:bg-transparent z-10 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } md:flex md:items-center`}
        >
          {/* Links */}
          <div className="flex flex-col md:flex-row md:gap-[56px] text-lg text-center md:text-left">
            <Link href={"/"} className="py-2 md:py-0 hover:text-[#B88E2F]">Home</Link>
            <Link href={"/shop"} className="py-2 md:py-0 hover:text-[#B88E2F]">Shop</Link>
            <Link href={"/blog"} className="py-2 md:py-0 hover:text-[#B88E2F]">Blog</Link>
            <Link href={"/contact"} className="py-2 md:py-0 hover:text-[#B88E2F]">Contact</Link>
          </div>

          {/* Icons */}
          <div className="flex flex-col md:hidden mt-4 md:mt-0 md:flex-row gap-[20px] items-center">
            <div className="w-[28px] h-[28px]">
              <CgProfile className="text-[30px] font-bold cursor-pointer" />
            </div>
            <div className="w-[28px] h-[28px]">
              <CiSearch className="text-[30px] cursor-pointer" />
            </div>
            <div className="w-[28px] h-[28px]">
              <CiHeart className="text-[30px] cursor-pointer" />
            </div>
            <div className="w-[28px] h-[28px]">
              <Link href={"/cart"}>
                <IoCartOutline className="text-[30px] cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>

        {/* Vector Icons for Desktop */}
        <div className="hidden md:flex ml-auto gap-[40px]">
          <div className="w-[28px] h-[28px]">
            <CgProfile className="text-[30px] font-bold cursor-pointer" />
          </div>
          <div className="w-[28px] h-[28px]">
            <CiSearch className="text-[30px] cursor-pointer" />
          </div>
          <div className="w-[28px] h-[28px]">
            <CiHeart className="text-[30px] cursor-pointer" />
          </div>
          <div className="w-[28px] h-[28px]">
            <Link href={"/cart"}>
              <IoCartOutline className="text-[30px] cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}