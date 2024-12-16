import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="w-full h-[100px] flex border-b border-gray-200 bg-white">
      <div className="flex items-center w-full max-w-[1286px] mx-auto px-4 lg:px-0">
        {/* Logo */}
        <Image 
          src="/Logo.png" 
          alt="Logo" 
          width={50} 
          height={32} 
          className="mr-6"
        />
        <h1 className="font-bold text-[20px] lg:text-[30px]">Furniro</h1>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-[20px] lg:gap-[56px] pl-[20px] ml-[20px] lg:ml-[100px] text-sm lg:text-lg">
          <Link href={'/'}>Home</Link>
          <Link href={'/shop'}>Shop</Link>
          <Link href={'/blog'}>Blog</Link>
          <Link href={'/contact'}>Contact</Link>
        </div>

        {/* Vector Icons */}
        <div className="flex ml-auto gap-[20px] lg:gap-[40px]">
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
      </div>
    </div>
  );
}
