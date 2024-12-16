import Image from "next/image";

export default function Product() {
  return (
    <div className="ourproducts py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="op-title text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Our Products</h2>
        </div>

        {/* Product Grid */}
        <div className="op-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Single Product */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="ot-boxes bg-white rounded-lg shadow hover:shadow-md transition p-4">
              {/* Overlay Box */}
              <div className="relative">
                <div className="op-over-box absolute inset-0 opacity-0 hover:opacity-100 bg-black bg-opacity-30 flex flex-col items-center justify-center transition">
                  <button className="op-ov-btn bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
                    Add to Cart
                  </button>
                  <div className="op-share mt-3 flex flex-col items-center gap-2 text-white">
                    <span className="op-share-icon flex items-center gap-2">
                      <i className="fa-solid fa-share-nodes"></i> Share
                    </span>
                    <span className="op-share-icon flex items-center gap-2">
                      <i className="fa-solid fa-arrow-right-arrow-left"></i> Compare
                    </span>
                    <span className="op-share-icon flex items-center gap-2">
                      <i className="fa-regular fa-heart"></i> Like
                    </span>
                  </div>
                </div>

                {/* Discount Pin */}
                <div className="dis-pin absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  -30%
                </div>

                {/* Product Image */}
                <div className="op-imgbox">
                  <Image
                    src={`/pic${index + 4}.png`} // Dynamically changing image
                    width={285}
                    height={301}
                    alt={`Product ${index + 1}`}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="op-content mt-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">Syltherine</h4>
                <p className="text-sm text-gray-600">Stylish cafe chair</p>
                <div className="op-prices mt-2 flex items-center justify-center gap-2">
                  <div className="op-price text-yellow-500 font-bold">Rp 2.500.000</div>
                  <div className="op-price-dis text-gray-400 line-through">Rp 3.500.000</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
