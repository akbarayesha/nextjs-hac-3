import Image from "next/image";
import ShopeHero from "@/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={ShopeHero}
          alt="Cart Hero"
          layout="responsive"
          width={1920}
          height={600} // Adjust these values according to your hero image dimensions
          className="object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-white">
          <h3 className="font-bold text-[1.5rem] md:text-2xl">Cart</h3>
          <div className="flex items-center">
            <h3 className="text-white">Home</h3>
            <IoIosArrowForward className="text-white mx-1" />
            <h3 className="text-white">Cart</h3>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto p-4">
        {/* Header Row */}
        <div className="hidden md:flex justify-around items-center p-4 w-full bg-[#F9F1E7]">
          <h2 className="font-semibold">Product</h2>
          <h2 className="font-semibold">Price</h2>
          <h2 className="font-semibold">Quantity</h2>
          <h2 className="font-semibold">Subtotal</h2>
        </div>

        {/* Product Row */}
        <div className="flex flex-col md:flex-row md:justify-around md:items-center gap-4 bg-white p-4 border border-gray-200 rounded-md">
          <Image
            src="/sofaa.jpg"
            width={108}
            height={105}
            alt="Asgaard Sofa"
            className="object-cover rounded-md"
          />
          <p className="text-center md:text-left flex-1">Asgaard Sofa</p>
          <p className="text-center flex-1">Rs. 250,000.00</p>
          <input
            type="number"
            className="w-16 p-2 border border-gray-300 rounded-md text-center"
            defaultValue={1} // Set default quantity
            min={1} // Ensure quantity can't be less than 1
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
          <button className="mt-5 rounded-md border-gray-900 border-2 py-2 px-4 hover:bg-gray-900 hover:text-white transition duration-200">
            Check Out
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="  mb-10 mt-10 flex flex-wrap justify-evenly items-center gap-6 p-4 w-full bg-[#F9F1E7]">
        {[
          {
            src: "/Group.jpg",
            title: "High Quality",
            description: "Crafted from top materials",
          },
          {
            src: "/warr.jpg",
            title: "Warranty Protection",
            description: "Over 2 years",
          },
          {
            src: "/Vector.jpg",
            title: "Free Shipping",
            description: "Order over $150",
          },
          {
            src: "/customer.jpg",
            title: "24/7 Support",
            description: "Dedicated support",
          },
        ].map((feature, index) => (
          <div key={index} className="sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 text-center max-w-[150px]">
            <Image
              src={feature.src}
              width={40}
              height={40}
              alt={feature.title}
              className="object-contain"
            />
            <h4 className="font-bold mt-2">{feature.title}</h4>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
