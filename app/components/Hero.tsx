import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="overflow-x-hidden relative bg-[#FFF8F0]">
      {/* Container for the image */}
      <div className="relative w-full">
        {/* Responsive image */}
        <Image
          src="/hero.jpg"
          alt="Hero Section Image"
          width={1440}
          height={600}
          priority
          className="w-full h-auto object-cover"
        />

        {/* Hero Text Section */}
        <div className="absolute top-[15%] left-[50%] transform -translate-x-1/2 p-6 sm:p-8 md:p-[4rem] bg-[#FFF3E3] rounded-lg shadow-lg max-w-[90%] md:max-w-[60%] lg:max-w-[40%] text-center md:text-left">
          <h6 className="text-sm sm:text-base font-bold text-gray-700 uppercase tracking-wide">
            New Arrival
          </h6>
          <h3 className="text-[#B88E2F] font-poppins font-extrabold text-[1.5rem] sm:text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-snug mt-2">
            Discover Our <br className="hidden md:block" /> New Collection
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-4 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolore.
          </p>
          <Link href="/checkout">
            <button className="bg-[#B88E2F] text-white text-sm sm:text-base font-medium py-3 px-8 rounded hover:bg-[#a27925] transition duration-200">
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
