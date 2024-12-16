export default function Footer() {
    return (
      <footer className="mt-24 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start p-8 border-t border-gray-300 gap-12 md:gap-20 lg:gap-40 px-6 md:px-16">
          {/* Branding Section */}
          <div className="w-full md:w-[14rem]">
            <h2 className="font-bold text-2xl lg:text-3xl mb-6 text-black">Funiro.</h2>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
              400 University Drive Suite 200 <br /> Coral Gables, FL 33134 USA
            </p>
          </div>
  
          {/* Links Section */}
          <div className="w-full md:w-auto">
            <h4 className="text-gray-500 text-sm font-medium mb-4 lg:mb-6">Links</h4>
            <ul className="space-y-2 text-sm lg:text-base">
              <li className="text-black hover:text-gray-600 transition">Home</li>
              <li className="text-black hover:text-gray-600 transition">Shop</li>
              <li className="text-black hover:text-gray-600 transition">About</li>
              <li className="text-black hover:text-gray-600 transition">Contact</li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div className="w-full md:w-auto">
            <h4 className="text-gray-500 text-sm font-medium mb-4 lg:mb-6">Help</h4>
            <ul className="space-y-2 text-sm lg:text-base">
              <li className="text-black hover:text-gray-600 transition">Payment Option</li>
              <li className="text-black hover:text-gray-600 transition">Returns</li>
              <li className="text-black hover:text-gray-600 transition">Privacy Policies</li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div className="w-full md:w-auto">
            <h4 className="text-gray-500 text-sm font-medium mb-4 lg:mb-6">Newsletter</h4>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="flex-grow border-b-2 border-gray-300 py-2 text-sm lg:text-base focus:outline-none focus:border-black transition"
              />
              <button
                type="submit"
                className="font-bold bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="mt-10 px-6 md:px-16">
          <hr className="border-gray-300" />
          <p className="py-5 text-center text-gray-500 text-sm lg:text-base">
            © 2023 Funiro. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  