export default function Footer() {
    return (
        <>
            <footer className="mt-48 max-w-7xl mx-auto items-center justify-center">
                <div className="flex flex-col md:flex-row p-8 border-t-2 leading-10 gap-10 md:gap-40 px-6 md:px-28 border-gray-300">
                    {/* First Column */}
                    <div className="w-full md:w-[14rem]">
                        <h2 className="font-bold text-[2rem] mb-6 md:mb-12">Funiro.</h2>
                        <p className="leading-none text-[#9F9F9F]">
                            400 University Drive Suite 200 Coral Gables, <br />
                            FL 33134 USA
                        </p>
                    </div>

                    {/* Links Column */}
                    <div className="w-full md:w-auto">
                        <h4 className="text-[#9F9F9F] mb-6 md:mb-10">Links</h4>
                        <ul className="space-y-2">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Help Column */}
                    <div className="w-full md:w-auto">
                        <h4 className="text-[#9F9F9F] mb-6 md:mb-10">Help</h4>
                        <ul className="space-y-2">
                            <li>Payment Option</li>
                            <li>Returns</li>
                            <li>Privacy Policies</li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="w-full md:w-auto">
                        <h4 className="text-[#9F9F9F] mb-6 md:mb-10">Newsletter</h4>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Enter Your Email Address"
                                className="border-b-2 border-gray-300 py-2 w-full sm:w-[200px] md:w-[250px] focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="font-bold bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="para mx-6 md:mx-28">
                    <hr />
                    <p className="py-5 text-center text-[#9F9F9F]">2023 Furino. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
