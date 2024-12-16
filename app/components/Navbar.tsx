import Image from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="w-full h-[80px] lg:h-[100px] flex items-center border-b border-gray-200 bg-white">
      <div className="flex items-center w-full max-w-[1286px] mx-auto px-4 lg:px-0">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/Logo.png" 
            alt="Logo" 
            width={50} 
            height={32} 
            className="mr-4 lg:mr-6"
          />
          <h1 className="font-bold text-[18px] lg:text-[30px] text-gray-800">Furniro</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-6 lg:gap-12 pl-4 ml-4 lg:ml-16 text-sm lg:text-lg font-medium text-gray-600">
          <Link href={'/'} className="hover:text-black transition">Home</Link>
          <Link href={'/shop'} className="hover:text-black transition">Shop</Link>
          <Link href={'/blog'} className="hover:text-black transition">Blog</Link>
          <Link href={'/contact'} className="hover:text-black transition">Contact</Link>
        </div>

        {/* Icons Section */}
        <div className="flex ml-auto gap-4 lg:gap-8">
          <button className="flex items-center justify-center text-gray-600 hover:text-black transition">
            <CgProfile className="w-6 h-6 lg:w-7 lg:h-7 text-[24px] lg:text-[30px]" />
          </button>
          <button className="flex items-center justify-center text-gray-600 hover:text-black transition">
            <CiSearch className="w-6 h-6 lg:w-7 lg:h-7 text-[24px] lg:text-[30px]" />
          </button>
          <button className="flex items-center justify-center text-gray-600 hover:text-black transition">
            <CiHeart className="w-6 h-6 lg:w-7 lg:h-7 text-[24px] lg:text-[30px]" />
          </button>
          <Link href="/cart">
            <button className="flex items-center justify-center text-gray-600 hover:text-black transition">
              <IoCartOutline className="w-6 h-6 lg:w-7 lg:h-7 text-[24px] lg:text-[30px]" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
