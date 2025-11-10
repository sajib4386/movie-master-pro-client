import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { Link } from 'react-router';
import { motion } from "motion/react";
import Loading from '../Loading/Loading';
import { FcClapperboard, FcRating } from 'react-icons/fc';
import { SlCalender } from 'react-icons/sl';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/movies')
            .then(data => {
                setMovies(data.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [axiosSecure]);


    if (loading) return <Loading></Loading>;

    return (
        <div className="min-h-screen py-10 px-6">
            <h1 className="text-3xl font-bold text-white text-center mb-8">All Movies</h1>

            <div className="max-w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {movies.map((movie, index) => (
                    <motion.div
                        key={movie._id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.5, duration: 2 }}
                        className="bg-[#1a1c23] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform hover:shadow-red-400"
                    >
                        {/* Poster */}
                        <div className="relative w-auto h-96 md:w-full md:h-80 overflow-hidden">
                            <img
                                src={movie?.posterUrl}
                                alt=""
                                className="w-full h-full  transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                {movie.genre}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="p-4 flex flex-col">
                            <h2 className="text-lg font-semibold text-white mb-2 truncate">{movie.title}</h2>

                            <p className="flex items-center gap-1 text-gray-400 text-sm"><FcRating />Rating: {movie.rating}</p>
                            <p className="flex items-center gap-1 text-gray-400 text-sm"><FcClapperboard />Genre: {movie.genre}</p>
                            <p className="flex items-center gap-1 text-gray-400 text-sm mb-3"><SlCalender /> Year: {movie.releaseYear}</p>

                            <Link
                                to={`/movies/${movie._id}`}
                                className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded text-center transition"
                            >
                                Details
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AllMovies;
