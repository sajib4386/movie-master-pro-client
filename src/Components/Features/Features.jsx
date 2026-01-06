import React from 'react'
import { FaFilm, FaHeart, FaListAlt, FaMagic, FaMobileAlt, FaPlusCircle } from 'react-icons/fa'

const Features = () => {
    return (
        <section className="py-16 bg-gray-100 dark:bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        App Features
                    </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Everything you need to manage and enjoy your movie collection
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Browse Movies */}
                    <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center items-center">
                            <FaFilm className="text-4xl text-indigo-500 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                Browse All Movies
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Explore all movies in a clean and responsive card layout.
                            </p>
                        </div>
                    </div>

                    {/* My Collection */}
                    <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center items-center">
                            <FaListAlt className="text-4xl text-green-500 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                My Collection
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Logged-in users can manage their personal movie collections.
                            </p>
                        </div>
                    </div>

                    {/* Watchlist */}
                    <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center items-center">
                            <FaHeart className="text-4xl text-pink-500 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                Watchlist
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Save your favorite movies and watch them later.
                            </p>
                        </div>
                    </div>

                    {/* Add / Update Movies */}
                    <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center items-center">
                            <FaPlusCircle className="text-4xl text-yellow-500 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                Add & Update Movies
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Authenticated users can add and update movies securely.
                            </p>
                        </div>
                    </div>

                    {/* Responsive Design */}
                    <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center items-center">
                            <FaMobileAlt className="text-4xl text-blue-500 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                Fully Responsive
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Optimized for mobile, tablet, and desktop using Tailwind & DaisyUI.
                            </p>
                        </div>
                    </div>

                    {/* Animations & Alerts */}
                    <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
                        <div className="card-body text-center items-center">
                            <FaMagic className="text-4xl text-purple-500 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                Animations & Alerts
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Smooth animations with Framer Motion and alerts using SweetAlert2.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Features