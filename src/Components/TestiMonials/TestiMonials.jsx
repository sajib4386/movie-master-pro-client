import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaUserCircle } from "react-icons/fa";
import img1 from "../../assets/image1.jpg"
import img2 from "../../assets/image2.avif"
import img3 from "../../assets/image3.jpg"

const TestiMonials = () => {
    return (
        <section className="bg-gray-100 dark:bg-[#0b021f] py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">

                {/* Section Header */}
                <p className="text-4xl font-extrabold  text-gray-800 dark:text-white mb-2 underline underline-offset-8">
                    TESTIMONIALS
                </p>
                <h2 className="text-2xl text-green-600 font-semibold mb-20">
                    What Our Clients Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">

                    {/* Card 1 */}
                    <div className="relative bg-white dark:bg-white/10 rounded-2xl border-2 border-amber-500 shadow-md overflow-visible">


                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full z-10">
                            <img
                                src={img1}
                                alt=""
                                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        {/* Content Box */}
                        <div className="bg-green-600 text-white pt-16 px-6 pb-6 rounded-2xl relative z-0">

                            <FaQuoteLeft className="absolute top-4 left-4 text-2xl opacity-70" />

                            <p className="text-sm leading-relaxed">
                                MovieMaster Pro has an amazing collection. I can easily find movies from every genre without any hassle.
                            </p>

                            <FaQuoteRight className="absolute bottom-4 right-4 text-2xl opacity-70" />

                            <p className="mt-6 font-semibold">Alice Johnson</p>
                        </div>

                        {/* Bottom notch */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-white dark:bg-[#0b021f] rounded-t-2xl"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-white dark:bg-white/10 rounded-2xl border-2 border-amber-500 shadow-2xl overflow-visible scale-105">

                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full z-10">
                            <img
                                src={img2}
                                alt=""
                                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                            />
                        </div>
                        <div className="bg-green-600 text-white pt-20 px-8 pb-8 rounded-2xl relative z-0">
                            <FaQuoteLeft className="absolute top-5 left-5 text-3xl opacity-70" />
                            <p className="text-sm leading-relaxed">
                                This platform completely changed my movie experience. Recommendations are accurate and the UI is super smooth.
                            </p>
                            <FaQuoteRight className="absolute bottom-5 right-5 text-3xl opacity-70" />
                            <p className="mt-8 font-semibold">Michael Lee</p>
                        </div>

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-5 bg-white dark:bg-[#0b021f] rounded-t-3xl"></div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-white dark:bg-white/10 rounded-2xl border-2 border-amber-500 shadow-md overflow-visible">
                        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-full z-10">
                            <img
                                src={img3}
                                alt=""
                                className="w-24 h-24 rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="bg-green-600 text-white pt-16 px-6 pb-6 rounded-2xl relative z-0">
                            <FaQuoteLeft className="absolute top-4 left-4 text-2xl opacity-70" />
                            <p className="text-sm leading-relaxed">
                                Smooth streaming, clean design and powerful features. MovieMaster Pro is my favorite movie platform.
                            </p>
                            <FaQuoteRight className="absolute bottom-4 right-4 text-2xl opacity-70" />
                            <p className="mt-6 font-semibold">Sophia Williams</p>
                        </div>

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-white dark:bg-[#0b021f] rounded-t-2xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestiMonials;
