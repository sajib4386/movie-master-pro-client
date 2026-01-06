import React from "react";
import { MdOutlineMovie, MdOutlineSmartToy, MdOutlineSpeed } from "react-icons/md";

const AboutPlatform = () => (
    <section className="bg-gray-50 dark:bg-[#0b021f] text-gray-800 dark:text-white py-20 px-4 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                About MovieMaster Pro
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                MovieMaster Pro is your ultimate movie platform, bringing together a huge library of films, personalized recommendations, and fast streaming for the ultimate viewing experience.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Card 1 */}
                <div className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-3xl p-6 flex flex-col items-center text-center
                          shadow-md dark:backdrop-blur-lg hover:shadow-xl dark:hover:bg-white/20 transition-all duration-300">
                    <div className="text-indigo-400 mb-4">
                        <MdOutlineMovie size={30} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Huge Movie Library</h3>
                    <p className="text-gray-700 dark:text-gray-200">Access thousands of movies across all genres and eras.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-3xl p-6 flex flex-col items-center text-center
                          shadow-md dark:backdrop-blur-lg hover:shadow-xl dark:hover:bg-white/20 transition-all duration-300">
                    <div className="text-indigo-400 mb-4">
                        <MdOutlineSmartToy size={30} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Personalized Recommendations</h3>
                    <p className="text-gray-700 dark:text-gray-200">Get movie suggestions tailored to your taste.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-3xl p-6 flex flex-col items-center text-center
                          shadow-md dark:backdrop-blur-lg hover:shadow-xl dark:hover:bg-white/20 transition-all duration-300">
                    <div className="text-indigo-400 mb-4">
                        <MdOutlineSpeed size={30} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Fast Streaming</h3>
                    <p className="text-gray-700 dark:text-gray-200">Enjoy smooth and high-quality streaming without buffering.</p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutPlatform;
