import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FcRating, FcClapperboard } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";

const TopRatedMovies = () => {
    const axiosSecure = useAxiosSecure();
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
        axiosSecure.get("/top-rated")
            .then(data => setTopMovies(data.data))
            .catch(err => console.error(err));
    }, [axiosSecure]);

    return (
        <section className="bg-[#0b021f] text-white py-20">
            <div className="mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-start ml-24 lg:ml-10 mb-12 bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                    <span className="border-l-8 border-purple-600 rounded-md mr-2"></span>Top Rated Movies
                </h2>

                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 m-20 lg:m-4 gap-8">
                    {topMovies.map(movie => (
                        <div
                            key={movie._id}
                            className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/20 transition"
                        >
                            <img
                                src={movie?.posterUrl}
                                alt=""
                                className="w-full h-64 rounded-2xl mb-4 shadow-md shadow-amber-300"
                            />
                            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                                {movie?.title}
                            </h3>
                            <div className="flex justify-center items-center gap-3 text-gray-300 text-sm mb-2">
                                <span className="flex items-center gap-1"><FcRating /> {movie?.rating}</span>
                                <span className="flex items-center gap-1"><FcClapperboard /> {movie?.genre}</span>
                                <span className="flex items-center gap-1"><SlCalender /> {movie?.releaseYear}</span>
                            </div>
                            <p className="text-gray-200 text-sm line-clamp-3">{movie?.plotSummary}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopRatedMovies;
