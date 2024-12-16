import React from "react";

const CheckoutPage = () => {
  return (
    <div className="font-poppins max-w-7xl mx-auto items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section
        id="checkout"
        className="h-[316px] bg-cover bg-center flex items-center justify-center text-center relative"
        style={{
          backgroundImage: "url('pic13.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-[400] mb-2">
            My Account
          </h1>
          <p className="text-sm sm:text-base font-[500] text-gray-500">
            Home &gt; <span className="text-black font-[300]">My Account</span>
          </p>
        </div>
      </section>

      {/* Billing Details */}
      <section className="flex flex-col lg:flex-row gap-12 mt-12">
        {/* Left Section: Billing Details */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[600] mb-6">
            Billing details
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-base font-normal"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full border rounded-md p-4 text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-base font-normal"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full border rounded-md p-4 text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="companyName"
                className="block mb-2 text-base font-normal"
              >
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                type="text"
                className="w-full sm:w-[453px] border rounded-md p-4 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-base font-normal"
              >
                Country / Region
              </label>
              <select
                id="country"
                className="w-full sm:w-[453px] border rounded-md p-4 text-sm sm:text-base bg-white"
              >
                <option value="">Select a country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="streetAddress"
                className="block mb-2 text-base font-normal"
              >
                Street Address
              </label>
              <input
                id="streetAddress"
                type="text"
                className="w-full sm:w-[453px] border rounded-md p-4 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block mb-2 text-base font-normal"
              >
                Town / City
              </label>
              <input
                id="city"
                type="text"
                className="w-full sm:w-[453px] border rounded-md p-4 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="province"
                className="block mb-2 text-base font-normal"
              >
                Province
              </label>
              <input
                id="province"
                type="text"
                className="w-full sm:w-[453px] border rounded-md p-4 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="zip"
                className="block mb-2 text-base font-normal"
              >
                ZIP Code
              </label>
              <input
                id="zip"
                type="text"
                className="w-full sm:w-[453px] border rounded-md p-4 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-base font-normal"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full sm:w-[453px] border rounded-md p-4 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-normal"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full sm:w-[453px] border rounded-md p-4 text-sm sm:text-base"
              />
            </div>

            <div>
              <label
                htmlFor="additionalInfo"
                className="block mb-2 text-base font-normal"
              >
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                rows={4}
                className="w-full sm:w-[453px] border rounded-md p-4 text-sm sm:text-base"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right Section: Order Details */}
        <div className="flex-1 p-2 rounded-md">
          <h2 className="text-2xl sm:text-3xl font-[600] mb-9">Product</h2>
          <div className="mb-8 text-sm sm:text-base">
            <div className="flex justify-between mb-4">
              <p className="text-gray-400 mb-6">Angora Sofa x 1</p>
              <p>Rs. 250,000</p>
            </div>
            <div className="flex justify-between mb-6">
              <p>Subtotal</p>
              <p>Rs. 250,000</p>
            </div>
            <div className="flex justify-between text-gray-800 font-semibold mb-6">
              <p>Total</p>
              <p>Rs. 250,000</p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Direct Bank Transfer
            </label>
            <p className="text-xs sm:text-sm text-gray-500 ml-6 w-full sm:w-[521px]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <label className="block">
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
            <p className="w-full sm:w-[520px] text-xs sm:text-sm">
              Your personal data will be used to support your experience throughout
              this website, to manage access to your account, and for other purposes
              described in our <span className="font-semibold">privacy policy.</span>
            </p>
          </div>
          <div className="flex justify-center">
            <button className="w-full sm:w-[318px] bg-white text-black border-2 border-black rounded-md text-[16px] sm:text-[20px] font-medium py-4 mt-6">
              Place Order
            </button>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <div className="bg-[#fdf6e4] py-6 px-4 md:px-16 lg:px-32 mt-12">
        <div className="flex justify-between items-center gap-4 text-center border border-dashed border-gray-400 py-4 px-6">
          {/* High Quality */}
          <div className="flex flex-col items-center">
            <span className="text-3xl">🏆</span>
            <p className="font-semibold text-lg">High Quality</p>
            <p className="text-sm text-gray-500">crafted from top materials</p>
          </div>

          {/* Warranty Protection */}
          <div className="flex flex-col items-center">
            <span className="text-3xl">✅</span>
            <p className="font-semibold text-lg">Warranty Protection</p>
            <p className="text-sm text-gray-500">Over 2 years</p>
          </div>

          {/* Free Shipping */}
          <div className="flex flex-col items-center">
            <span className="text-3xl">📦</span>
            <p className="font-semibold text-lg">Free Shipping</p>
            <p className="text-sm text-gray-500">Order over 150 $</p>
          </div>

          {/* 24/7 Support */}
          <div className="flex flex-col items-center">
            <span className="text-3xl">🎧</span>
            <p className="font-semibold text-lg">24 / 7 Support</p>
            <p className="text-sm text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
