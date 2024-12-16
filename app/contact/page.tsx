export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center pt-48 pr-14" style={{ backgroundImage: "url('/pic13.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Overlay for better text visibility */}
        <div className="px-4 sm:px-14 py-4 flex justify-center ml-16 pb-16 relative">
          <nav className="text-gray-200">
            <a href="/" className="hover:text-gray-400 font-sans font-bold text-xl">
              Home
            </a>
            <span className="mx-2"></span>
            <a href="/contact" className="hover:text-gray-400 font-sans font-bold text-xl">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-12 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mb-8">
          For more information about our products & services, feel free to drop us an email. Our staff is always there to help you out. Do not hesitate!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>230 St. 5th Avenue, New York, NY 10001, United States</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>+1 (640) 452-5739</p>
              <p>+1 (754) 456-7898</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Working Time</h3>
              <p>Monday–Friday: 9:00 AM–5:00 PM</p>
              <p>Saturday–Sunday: 10:00 AM–2:00 PM</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="example@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="This is my subject"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
