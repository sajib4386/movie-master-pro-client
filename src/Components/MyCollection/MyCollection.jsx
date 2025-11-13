import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loading from "../Loading/Loading";


const MyCollection = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const [myMovies, setMyMovies] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        axiosSecure.get(`/movies?addedBy=${user?.email}`)
            .then(res => {
                setMyMovies(res.data)
                setLoading(false)
            })
            .catch((err) => console.error(err));
    }, [user, axiosSecure]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This movie will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/movies/${_id}`)
                    .then((data) => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Movie has been removed.",
                                icon: "success"
                            });
                            setMyMovies(myMovies.filter((m) => m._id !== _id));
                        }
                    })
                    .catch((err) => console.error(err));
            }
        });
    };

    if (loading) return <Loading></Loading>;


    return (
        <div className="min-h-screen py-10 px-5 text-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
                My Movie Collection: <span className="text-yellow-400">{myMovies.length}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {myMovies.map((movie) => (
                    <div
                        key={movie._id}
                        className="grid grid-cols-[120px_1fr] gap-6 bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
                    >
                        {/* Left: Poster */}
                        <img
                            src={movie?.posterUrl}
                            alt=""
                            className="w-full h-full rounded-md border border-gray-700"
                        />

                        {/* Right: Info + Buttons */}
                        <div className="flex flex-col justify-between">
                            {/* Info Section */}
                            <div>
                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {movie?.title}
                                </h3>

                                {/* Details */}
                                <p className="text-gray-300 text-sm mb-1">
                                    <span className="font-medium">Genre:</span> {movie?.genre}
                                </p>
                                <p className="text-gray-300 text-sm mb-1">
                                    <span className="font-medium">Year:</span> {movie?.releaseYear}
                                </p>
                                <p className="text-gray-300 text-sm mb-1">
                                    <span className="font-medium">Rating:</span> {movie?.rating}
                                </p>
                                <p className="text-gray-300 text-sm mb-1">
                                    <span className="font-medium">Duration:</span> {movie?.duration} min
                                </p>
                                <p className="text-gray-300 text-sm mb-1">
                                    <span className="font-medium">Language:</span> {movie?.language}
                                </p>
                                <p className="text-gray-300 text-sm">
                                    <span className="font-medium">Country:</span> {movie?.country}
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-2 mt-3">
                                <Link to={`/update-movie/${movie._id}`} className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 text-sm">
                                    <MdEdit /> Edit
                                </Link>

                                <button onClick={() => handleDelete(movie._id)}
                                    className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm">
                                    <MdDelete /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCollection;
