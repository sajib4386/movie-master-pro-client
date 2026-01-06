import React from 'react'
import { FaFilm, FaPlay, FaSearch, FaStar } from 'react-icons/fa'

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Services</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Features that make your movie experience amazing
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
            <div className="card-body text-center items-center">
              <FaFilm className="text-4xl text-indigo-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Browse Movies</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Explore all available movies in a clean card layout.
              </p>
            </div>
          </div>

          <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
            <div className="card-body text-center items-center">
              <FaPlay className="text-4xl text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Watch Online</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Stream your favorite movies instantly from anywhere.
              </p>
            </div>
          </div>

          <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
            <div className="card-body text-center items-center">
              <FaStar className="text-4xl text-yellow-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Rate & Review</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Share your opinions and ratings with the community.
              </p>
            </div>
          </div>

          <div className="card bg-white dark:bg-[#1e293b] shadow-md hover:shadow-xl transition">
            <div className="card-body text-center items-center">
              <FaSearch className="text-4xl text-pink-500 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Advanced Search</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Quickly find movies by genre, rating, or release date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services