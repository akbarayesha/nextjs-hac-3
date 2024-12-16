import Image from "next/image";
import ShopeHero from "@/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image src={ShopeHero} alt="Cart Hero" />
        <div className="absolute top-[50%] left-[50%] flex flex-col items-center justify-center translate-x-[-50%] translate-y-[-50%]">
          <h3 className="font-bold text-[1.5rem]">Cart</h3>
          <div className="flex items-center">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Cart</h3>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto p-4">
        {/* Header Row */}
        <div className="producDetails hidden md:flex justify-around items-center p-4 w-full bg-[#F9F1E7]">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Subtotal</h2>
        </div>

        {/* Product Row */}
        <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-4 bg-white p-4 border border-gray-200 rounded-md">
          <Image
            src="/sofaa.jpg"
            width={108}
            height={105}
            alt="Asgaard Sofa"
            className="object-cover"
          />
          <p className="text-center md:text-left flex-1">Asgaard Sofa</p>
          <p className="text-center flex-1">Rs. 250,000.00</p>
          <input
            type="number"
            className="w-16 p-2 border border-gray-300 rounded-md text-center"
          />
          <p className="text-center flex-1">Rs. 250,000.00</p>
        </div>

        {/* Cart Totals */}
        <div className="cartTotal bg-[#F9F1E7] mt-8 mx-auto text-center w-full max-w-md p-6 rounded-lg">
          <h2 className="font-bold text-[1.5rem]">Cart Totals</h2>
          <p className="mt-4">
            <span className="font-bold">Subtotal:</span> Rs. 250,000.00
          </p>
          <p>
            <span className="font-bold">Total:</span> Rs. 250,000.00
          </p>
          <button className="mt-5 rounded-md border-gray-900 border-2 py-2 px-4 hover:bg-gray-900 hover:text-white transition">
            Check Out
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-10 mt-10 flex flex-wrap justify-evenly items-center gap-6 p-4 w-full bg-[#F9F1E7]">
        <div className="text-center max-w-[150px]">
          <Image
            src="/Group.jpg"
            width={40}
            height={40}
            alt="High Quality"
          />
          <h4 className="font-bold mt-2">High Quality</h4>
          <p className="text-sm">Crafted from top materials</p>
        </div>
        <div className="text-center max-w-[150px]">
          <Image
            src="/warr.jpg"
            width={40}
            height={40}
            alt="Warranty Protection"
          />
          <h4 className="font-bold mt-2">Warranty Protection</h4>
          <p className="text-sm">Over 2 years</p>
        </div>
        <div className="text-center max-w-[150px]">
          <Image
            src="/Vector.jpg"
            width={40}
            height={40}
            alt="Free Shipping"
          />
          <h4 className="font-bold mt-2">Free Shipping</h4>
          <p className="text-sm">Order over $150</p>
        </div>
        <div className="text-center max-w-[150px]">
          <Image
            src="/customer.jpg"
            width={40}
            height={40}
            alt="24/7 Support"
          />
          <h4 className="font-bold mt-2">24/7 Support</h4>
          <p className="text-sm">Dedicated support</p>
        </div>
      </div>
    </>
  );
}
