import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SmallStars } from "../components/star";

function Productpage() {
    return (
        <div className="bg-[#F9F1E7]">
            {/* 1st Section */}
            <div className="flex justify-start w-full bg-[#F9F1E7] h-20">
                <div className="flex justify-start items-center w-[90%] mx-auto gap-5">
                    <div className="text-[#9F9F9F]">Home {">"}</div>
                    <div className="text-[#9F9F9F]">Shop {">"}</div>
                    <div className="text-black border-l-2 pl-5">Asgaard Sofa</div>
                </div>
            </div>

            {/* 2nd Section */}
            <div className="w-full shadow-md"> {/* Changed shadow-custom to shadow-md */}
                <div className="flex flex-col md:flex-row justify-between items-start p-5 bg-white w-[95%] mx-auto md:h-[600px]">
                    {/* Left Side Div */}
                    <div className="flex justify-center md:justify-start items-center space-x-5 md:space-x-10 w-full md:w-[45%]">
                        <img src="/pic16.png" alt="Sidebar" className="max-w-[76px] max-h-[380px] object-contain" />
                        <img src="/pic17.png" alt="SideMain" className="max-w-full max-h-[380px] object-contain" />
                    </div>

                    {/* Right Side Div */}
                    <div className="w-full md:w-[50%] leading-[2]">
                        <h1 className="text-[24px] md:text-[28px] font-semibold">Asgard Sofa</h1>
                        <div className="text-[#D9D9D9] text-lg">Rs: 25,000.00</div>
                        <div className="flex items-center gap-5">
                            <SmallStars rating={4} />
                            <p className="border-l-2 pl-2">& Customer Reviews</p>
                        </div>
                        <p className="mt-3">
                            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                        </p>
                        <div className="mt-4">
                            <h4 className="font-semibold">Size</h4>
                            <div className="flex items-center justify-start gap-3 md:gap-5">
                                <div className="border w-10 text-center hover:bg-slate-500 hover:text-white cursor-pointer">L</div>
                                <div className="border w-10 text-center hover:bg-slate-500 hover:text-white cursor-pointer">M</div>
                                <div className="border w-10 text-center hover:bg-slate-500 hover:text-white cursor-pointer">XL</div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-semibold">Color</h4>
                            <div className="flex justify-start gap-5">
                                <div className="w-5 h-5 bg-[#816DFA] rounded-full cursor-pointer"></div>
                                <div className="w-5 h-5 bg-black rounded-full cursor-pointer"></div>
                                <div className="w-5 h-5 bg-[#B88E2F] rounded-full cursor-pointer"></div>
                            </div>
                        </div>
                        <div className="flex items-center p-5 gap-3 mt-4">
                            <div className="border w-20 rounded-sm text-center hover:bg-slate-500 hover:text-white cursor-pointer">- 1 +</div>
                            <div className="border w-[110px] rounded-sm text-center hover:bg-slate-500 hover:text-white cursor-pointer">Add to Cart</div>
                            <div className="border w-[110px] rounded-sm text-center hover:bg-slate-500 hover:text-white cursor-pointer">+ Compare</div>
                        </div>
                        <div className="border-t-2 pt-3 mt-4">
                            <div>SKU: SS01</div>
                            <div>Category: Sofa</div>
                            <div>Tag: Sofa Chair, Home, Shop</div>
                            <div className="flex gap-5 items-center mt-2">
                                <h5>Share:</h5>
                                <FaFacebook className="cursor-pointer hover:text-blue-600" />
                                <FaLinkedin className="cursor-pointer hover:text-blue-600" />
                                <FaTwitter className="cursor-pointer hover:text-blue-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd Section */}
            <div className="shadow-md mt-5"> {/* Changed shadow-custom to shadow-md */}
                <div className="flex justify-center items-center text-[#9F9F9F] gap-10 w-full h-[70px] font-semibold text-2xl mx-auto">
                    <div className="hover:text-black cursor-pointer">Description</div>
                    <div className="hover:text-black cursor-pointer">Additional Information</div>
                    <div className="hover:text-black cursor-pointer">Reviews</div>
                </div>
                <div className="flex flex-col justify-center items-center w-[90%] md:w-[80%] mx-auto leading-6">
                    <p className="p-5">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p className="p-5">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
                <div>
                    <img src="/pic20.png" alt="Main Last" className="max-w-full max-h-[580px] object-contain flex justify-center items-center mx-auto" />
                </div>
            </div>
        </div>
    );
}

export default Productpage;
