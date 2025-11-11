import React from "react";

const genres = ["Action", "Drama", "Comedy", "Horror", "Romance", "Sci-Fi", "Thriller", "Animation", "Fantasy", "Mystery"];

const GenreSection = () => (
    <section className="bg-[#0b021f] text-white py-10 px-4">
        <div className="mx-auto flex flex-wrap items-center gap-4 justify-center">
            <h2 className="text-4xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                Genres:
            </h2>

            {genres.map((genre, index) => (
                <button
                    key={index}
                    className="px-6 py-2 rounded-lg md:font-semibold bg-linear-to-r from-violet-500 to-fuchsia-600 
                               hover:scale-150 hover:shadow-md hover:shadow-blue-800 transition-all duration-300"
                >
                    {genre}
                </button>
            ))}
        </div>
    </section>
);

export default GenreSection;
