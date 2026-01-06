import React from 'react'

const Categories = () => {
    const categories = ["Action", "Drama", "Comedy", "Horror", "Romance", "Sci-Fi", "Thriller", "Animation", "Fantasy", "Mystery"];
    return (
        <section className="py-16 bg-gray-50 dark:bg-[#0f172a]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Categories</h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Browse movies by category and find your favorites quickly
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="card text-center py-8 rounded-lg cursor-pointer text-white shadow-lg transform transition 
                                       hover:scale-105 bg-linear-to-r from-violet-500 to-fuchsia-600">
                            <h3 className="text-lg font-semibold">{category}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories