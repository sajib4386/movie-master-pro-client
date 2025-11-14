import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FcRating } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { MdMovie, MdOutlineSlowMotionVideo } from "react-icons/md";
import Loading from "../Loading/Loading";

const LatestMovies = () => {
    const axiosSecure = useAxiosSecure();
    const [recentMovies, setRecentMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure
            .get("/latest-movies")
            .then((data) => {
                setRecentMovies(data.data)
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, [axiosSecure]);

    if (loading) return <Loading />;

    return (
        <section className="dark:bg-[#0b021f] text-white py-20">
            <div className="mx-auto text-center px-4">

                <h2 className="text-start text-3xl md:text-5xl font-extrabold ml-24 md:ml-5 lg:ml-10 mb-12 bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                    <span className="border-l-8 border-purple-600 rounded-md mr-2"></span>Recently Added
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 ml-15 mr-15 md:m-2">
                    {recentMovies.map((movie) => (
                        <div
                            key={movie._id}
                            className="relative rounded-xl overflow-hidden bg-[#1c1233] group shadow-lg border-2 border-amber-300"
                        >
                            {/* Image */}
                            <img
                                src={movie?.posterUrl}
                                alt=""
                                className="w-full h-[300px] md:h-[400px] rounded-xl transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 
                                opacity-0 group-hover:opacity-100 transition-all duration-500
                                bg-gray-500/50 backdrop-blur-md rounded-xl border border-white/20 shadow-lg">

                                <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                                    {movie?.title}
                                </h3>

                                <div className="flex items-center gap-4 text-gray-200  text-sm mb-3">
                                    <span className="flex items-center gap-1">
                                        <FcRating className="text-base" /> {movie?.rating}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MdMovie className="text-base" /> {movie?.genre}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <SlCalender className="text-base" /> {movie?.releaseYear}
                                    </span>
                                </div>

                                <p className="text-gray-200 text-sm mb-5 max-w-[300px] leading-snug">
                                    {movie?.plotSummary}
                                </p>

                                <button className="flex items-center gap-1 bg-linear-to-r from-indigo-500 to-pink-500 text-white px-5 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition">
                                    <MdOutlineSlowMotionVideo /> Watch Online
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestMovies;
