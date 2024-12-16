import Image from "next/image";

export default function Product() {
  return (
    <div className="ourproducts py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="op-title text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Products</h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Discover our range of stylish and high-quality products.
          </p>
        </div>

        {/* Product Grid */}
        <div className="op-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Single Product */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="ot-boxes bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 relative group"
            >
              {/* Overlay Box */}
              <div className="relative">
                <div className="op-over-box absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-300">
                  <button className="op-ov-btn bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition">
                    Add to Cart
                  </button>
                  <div className="op-share mt-4 flex flex-col items-center gap-3 text-white">
                    <span className="op-share-icon flex items-center gap-2 cursor-pointer">
                      <i className="fa-solid fa-share-nodes"></i> Share
                    </span>
                    <span className="op-share-icon flex items-center gap-2 cursor-pointer">
                      <i className="fa-solid fa-arrow-right-arrow-left"></i> Compare
                    </span>
                    <span className="op-share-icon flex items-center gap-2 cursor-pointer">
                      <i className="fa-regular fa-heart"></i> Like
                    </span>
                  </div>
                </div>

                {/* Discount Pin */}
                <div className="dis-pin absolute top-4 left-4 bg-red-500 text-white text-xs md:text-sm px-3 py-1 rounded-full">
                  -30%
                </div>

                {/* Product Image */}
                <div className="op-imgbox">
                  <Image
                    src={`/pic${index + 4}.png`} // Dynamically changing image
                    width={285}
                    height={301}
                    alt={`Product ${index + 1}`}
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="op-content mt-6 text-center">
                <h4 className="text-lg md:text-xl font-semibold text-gray-800">Syltherine</h4>
                <p className="text-sm md:text-base text-gray-600 mt-1">Stylish cafe chair</p>
                <div className="op-prices mt-3 flex items-center justify-center gap-3">
                  <div className="op-price text-yellow-500 font-bold text-base md:text-lg">
                    Rp 2.500.000
                  </div>
                  <div className="op-price-dis text-gray-400 line-through text-sm md:text-base">
                    Rp 3.500.000
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
