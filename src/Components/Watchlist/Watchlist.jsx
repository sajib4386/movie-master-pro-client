import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";
import useAxios from "../Hooks/useAxios";

const Watchlist = () => {
    const { user } = useAuth();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const axiosInstance = useAxios()


    useEffect(() => {
        if (!user) return;

        const fetchWatchlist = async () => {
            try {
                setLoading(true);
                setError("");

                const res = await axiosInstance.get("/watchlist", {
                    params: { email: user.email }
                });

                const moviesArray = Array.isArray(res.data) ? res.data : [];
                setMovies(moviesArray);

            } catch (err) {
                console.error("Watchlist fetch error:", err);
                setError("Unable to fetch watchlist. Please try again.");
                setMovies([]);
            } finally {
                setLoading(false);
            }
        };

        fetchWatchlist();
    }, [user, axiosInstance]);

    const handleRemove = async (id) => {
        const result = await Swal.fire({
            title: "Remove this movie?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!"
        });

        if (result.isConfirmed) {
            try {
                await axiosInstance.delete(`/watchlist/${id}`, {
                    params: { email: user.email }
                });

                Swal.fire({
                    title: "Deleted!",
                    text: "Movie has been removed.",
                    icon: "success"
                });

                setMovies(prev => prev.filter(m => m._id.toString() !== id));
            } catch (err) {
                console.error(err);
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: "Please try again later.",
                });
            }
        }
    };

    if (loading) return <Loading />;
    if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

    return (
        <div className="min-h-screen py-10 px-5 text-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
                My Watchlist: <span className="text-yellow-400">{movies?.length}</span>
            </h2>

            {movies.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-20">
                    <div className="dark:bg-gray-800 text-gray-200 p-8 rounded-xl shadow-lg max-w-md text-center">
                        <h3 className="text-2xl font-bold mb-2 text-yellow-400">Empty Watchlist</h3>
                        <p className="text-gray-400">You haven't added any movies yet. Start exploring and add some!</p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {movies.map((movie) => (
                        <div
                            key={movie._id}
                            className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-amber-500 shadow-md dark:shadow-gray-900 hover:scale-105 transition-transform"
                        >
                            {/* Poster */}
                            <div className="relative w-full h-72 overflow-hidden">
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
                            <div className="p-4 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white truncate">
                                        {movie?.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Genre:</b> {movie?.genre}</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Year:</b> {movie?.releaseYear}</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-1"><b>Rating:</b> {movie?.rating}</p>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-3"><b>Plot:</b> {movie?.shortDescription}</p>
                                </div>

                                {/* Actions */}
                                <div className="flex justify-between mt-4">
                                    <Link
                                        to={`/movie-details/${movie._id}`}
                                        className="inline-block bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-xl text-center transition-colors duration-300"
                                    >
                                        View Details
                                    </Link>
                                    <button
                                        onClick={() => handleRemove(movie._id)}
                                        className="flex items-center gap-1 px-3 py-2 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white rounded-xl text-sm transition-colors duration-300"
                                    >
                                        <MdDelete className="text-lg" /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
};

export default Watchlist;

