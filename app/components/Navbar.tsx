"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {

  const [isClick, setisClick ] = useState(false);
   const toggleNavbar = () =>{
        setisClick(!isClick)
   }
  return (
    <div className=" w-full h-[100px] flex border-b border-gray-200 bg-white">
      <div className="flex items-center w-full max-w-[1286px] mx-auto px-4 lg:px-0">
        {/* Logo */}
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={50} 
          height={32} 
          className="mr-6"
        />
        <h1 className="font-bold text-[20px] lg:text-[30px]">Furniro</h1>

        {/* Navigation Links */}
        <div className="sm:text-[10px] sm:flex sm:gap-2 lg:flex gap-[20px] lg:gap-[56px] pl-[20px] ml-[20px] lg:ml-[100px] text-sm lg:text-lg">
          <Link href={'/'}>Home</Link>
          <Link href={'/shop'}>Shop</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'/contact'}>Contact</Link>
        </div>

        {/* Vector Icons */}
        <div className=" flex ml-auto gap-[20px] lg:gap-[40px]">
          <div className="w-[24px] lg:w-[28px] h-[24px] lg:h-[28px]">
            <CgProfile className="text-[24px] lg:text-[30px] font-bold cursor-pointer" />
          </div>  
          <div className="w-[24px] lg:w-[28px] h-[24px] lg:h-[28px]">
            <CiSearch className="text-[24px] lg:text-[30px] cursor-pointer" />
          </div>  
          <div className="w-[24px] lg:w-[28px] h-[24px] lg:h-[28px]">
            <CiHeart className="text-[24px] lg:text-[30px] cursor-pointer" />
          </div>  
          <div className="w-[24px] lg:w-[28px] h-[24px] lg:h-[28px]">
            <Link href={"/cart"}>
              <IoCartOutline className="text-[24px] lg:text-[30px] cursor-pointer" />
            </Link> 
          </div>  
        </div>
           <div className=" flex items-center">
               <button className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:text-white
               focus:ring-2 focus:ring-white focus:ring-inset focus:outline-none" onClick={toggleNavbar}>
                       {isClick ?(
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />  
                          </svg>
                       ) : (
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />  
                          </svg>
                       )}
               </button>
           </div>
      </div>
    </div>
  );
}
export default Navbar