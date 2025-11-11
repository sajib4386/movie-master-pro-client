import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FcClapperboard, FcRating } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";

const HeroSection = () => {
    const axiosSecure = useAxiosSecure();
    const [movies, setMovies] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        axiosSecure.get("/movies")
            .then((data) => {
                setMovies(data.data);
            })
            .catch((err) => console.error(err));
    }, [axiosSecure]);

    return (
        <section className="relative h-screen w-full text-white overflow-hidden">
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                loop={movies.length > 1}
                centeredSlides
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie._id}>
                        <div className="relative h-screen flex items-center justify-center">
                            {/* Background Image */}
                            <img
                                src={movie?.posterUrl}
                                alt=""
                                className="absolute inset-0 w-full h-full object-center"
                            />

                            <div className="absolute inset-0 bg-linear-to-tr from-[#0b021f] via-[#120b2e]/90 to-transparent"></div>
                            <div className="absolute -top-10 right-0 w-[80%] h-[80%] bg-linear-to-r from-purple-700/30 via-blue-600/20 to-transparent blur-3xl opacity-60"></div>

                            {/* Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-20 max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/10"
                            >
                                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                                    {movie?.title}
                                </h1>

                                <div className="flex items-center gap-4 text-gray-300 text-sm mb-3">
                                    <span className="text-yellow-400 flex items-center gap-1"><FcRating />{movie?.rating}</span>
                                    <span className="flex items-center gap-1"><FcClapperboard />{movie?.genre}</span>
                                    <span className="flex items-center gap-1"><SlCalender />{movie?.releaseYear}</span>
                                </div>

                                <p className="text-gray-200 mb-6 leading-relaxed line-clamp-3">
                                    {movie?.description || "Enjoy the latest blockbuster now!"}
                                </p>

                                <div className="flex gap-4">
                                    <button className="flex items-center gap-1 px-6 py-2 rounded-lg font-semibold bg-linear-to-r from-violet-500 to-fuchsia-600 hover:opacity-90 transition-all duration-300">
                                       <MdOutlineSlowMotionVideo /> Watch Online
                                    </button>
                                    <button className="flex items-center gap-1 px-6 py-2 rounded-lg font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300">
                                        <FaRegSquarePlus />Add to Watchlist
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows */}
            <button
                ref={prevRef}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white text-3xl font-bold w-12 h-12 rounded-full flex items-center justify-center transition"
            >
                &lt;
            </button>
            <button
                ref={nextRef}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white text-3xl font-bold w-12 h-12 rounded-full flex items-center justify-center transition"
            >
                &gt;
            </button>
        </section>
    );
};

export default HeroSection;
