import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";

const Watchlist = () => {
    const { user } = useAuth();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (!user) return;

        const fetchWatchlist = async () => {
            try {
                setLoading(true);
                setError("");

                const res = await axiosSecure.get("/watchlist");
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
    }, [user, axiosSecure]);

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
                await axiosSecure.delete(`/watchlist/${id}`);
                Swal.fire({
                    title: "Deleted!",
                    text: "Movie has been removed.",
                    icon: "success"
                });
                setMovies(prev => prev.filter(m => m._id !== id));
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
                My Watchlist: <span className="text-yellow-400">{movies.length}</span>
            </h2>
            
            {movies.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-20">
                    <div className="dark:bg-gray-800 text-gray-200 p-8 rounded-xl shadow-lg max-w-md text-center">
                        <h3 className="text-2xl font-bold mb-2 text-yellow-400">Empty Watchlist</h3>
                        <p className="text-gray-400">You haven't added any movies yet. Start exploring and add some!</p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {movies.map((movie) => (
                        <div key={movie._id} className="bg-gray-800 rounded-lg overflow-hidden border-2 border-amber-300 shadow-md shadow-amber-200">
                            <img src={movie.posterUrl} alt="" className="w-full h-72" />
                            <div className="p-4 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                                    <p className="text-gray-300 mb-1"><b>Genre:</b> {movie.genre}</p>
                                    <p className="text-gray-300 mb-1"><b>Year:</b> {movie.releaseYear}</p>
                                    <p className="text-gray-300 mb-2"><b>Rating:</b> {movie.rating}</p>
                                </div>

                                <div className="flex justify-between mt-3">
                                    <Link
                                        to={`/movie-details/${movie._id}`}
                                        className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white text-sm font-medium p-2 rounded text-center transition"
                                    >
                                        Details
                                    </Link>
                                    <button onClick={() => handleRemove(movie._id)} className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm">
                                        <MdDelete /> Delete
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
