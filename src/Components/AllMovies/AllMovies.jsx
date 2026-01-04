import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react";
import Loading from '../Loading/Loading';
import { FcClapperboard, FcRating } from 'react-icons/fc';
import { SlCalender } from 'react-icons/sl';
import { MdDescription } from "react-icons/md";
import useAxios from '../Hooks/useAxios';

const AllMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Filters
    const [genreFilter, setGenreFilter] = useState("");
    const [searchText, setSearchText] = useState("");
    const [minRating, setMinRating] = useState("");
    const [maxRating, setMaxRating] = useState("");
    const [sortOption, setSortOption] = useState("");

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 8;

    const axiosInstance = useAxios();

    useEffect(() => {
        setLoading(true);

        const params = {
            page: currentPage,
            limit: itemsPerPage,
        };

        if (genreFilter) params.genres = genreFilter;
        if (searchText) params.search = searchText;
        if (minRating) params.minRating = minRating;
        if (maxRating) params.maxRating = maxRating;
        if (sortOption) params.sort = sortOption === "high" ? -1 : 1;

        axiosInstance.get('/movies', { params })
            .then(res => {
                setMovies(res.data.result);
                setTotalPages(res.data.totalPages);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [genreFilter, searchText, minRating, maxRating, sortOption, currentPage, axiosInstance]);



    return (
        <div className="min-h-screen py-10 px-6 dark:bg-[#0b021f]">
            <h1 className="text-3xl font-bold text-center text-purple-600 mb-8">All Movies</h1>

            {/* Filters + Search + Sort */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 mb-6">
                <select
                    value={genreFilter}
                    onChange={e => setGenreFilter(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                    <option value="">All Genres</option>
                    {[...new Set(movies.map(m => m.genre))].map((g, i) => (
                        <option key={i} value={g}>{g}</option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white flex-1"
                />

                <input
                    type="number"
                    min="0"
                    max="10"
                    placeholder="Min Rating"
                    value={minRating}
                    onChange={(e) => setMinRating(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />

                <input
                    type="number"
                    min="0"
                    max="10"
                    placeholder="Max Rating"
                    value={maxRating}
                    onChange={(e) => setMaxRating(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />

                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                    <option value="">Sort By Rating</option>
                    <option value="high">High → Low</option>
                    <option value="low">Low → High</option>
                </select>
            </div>

            {/* Movies Grid */}
            <div className="max-w-[1400px] mx-auto">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loading />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {movies.map((movie, index) => (
                            <motion.div
                                key={movie._id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="flex flex-col h-full bg-white dark:bg-[#1a1c23] rounded-2xl overflow-hidden shadow-md dark:shadow-gray-900 hover:scale-105 transition-transform border-2 border-gray-200 dark:border-amber-500"
                            >
                                {/* Poster */}
                                <div className="relative w-full h-80 overflow-hidden">
                                    <img
                                        src={movie?.posterUrl}
                                        alt=""
                                        className="w-full h-full transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                                        {movie?.genre}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-4 flex flex-col flex-1">
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {movie?.title}
                                    </h2>

                                    <div className="flex flex-col gap-1 text-gray-700 dark:text-gray-300 text-sm mb-2">
                                        <p className="flex items-center gap-2">
                                            <FcRating className="text-yellow-400 text-xl" />
                                            Rating: <span className="font-medium text-gray-900 dark:text-white">{movie?.rating}</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <FcClapperboard className="text-blue-400 text-xl" />
                                            Genre: <span className="font-medium text-gray-900 dark:text-white">{movie?.genre}</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <SlCalender className="text-green-400 text-xl" />
                                            Year: <span className="font-medium text-gray-900 dark:text-white">{movie?.releaseYear}</span>
                                        </p>
                                    </div>

                                    <p className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm mb-4">
                                        <MdDescription className="text-purple-400 text-xl shrink-0 mt-1" />
                                        <span className="font-semibold text-gray-900 dark:text-white">Plot:</span> {movie?.shortDescription}
                                    </p>

                                    <Link
                                        to={`/movie-details/${movie._id}`}
                                        className="mt-auto inline-block w-full bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white text-sm font-medium py-2 rounded-xl text-center transition-colors duration-300"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-8 gap-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 rounded ${currentPage === i + 1 ? "bg-purple-600 text-white" : "bg-gray-300 dark:bg-gray-700"}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllMovies;
