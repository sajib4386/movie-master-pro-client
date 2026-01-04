import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { FcClapperboard, FcRating } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";
import { HiChevronDown } from "react-icons/hi";
import Loading from "../Loading/Loading";
import useAxios from "../Hooks/useAxios";

const HeroSection = () => {
    const axiosInstance = useAxios()
    const [movies, setMovies] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get("/movies")
            .then((data) => {
                setMovies(data.data.result)
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, [axiosInstance]);

    if (loading) return <Loading />;

    return (
        <section className="relative h-[70vh] w-full text-white overflow-hidden">
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
                        <div className="relative h-[70vh] flex items-end justify-start">
                            {/* Background Image */}
                            <img
                                src={movie?.posterUrl}
                                alt=""
                                className="absolute inset-0 w-full h-full"
                            />

                            <div className="absolute inset-0 bg-linear-to-tr from-[#0b021f]/60 via-[#1a0f33]/40 to-transparent"></div>
                            <div className="absolute -top-10 right-0 w-[80%] h-[80%] bg-linear-to-r from-purple-700/30 via-blue-600/20 to-transparent blur-3xl opacity-60"></div>

                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative z-20 w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-4 sm:mx-6 md:mx-12 lg:mx-20 mb-10 sm:mb-12 md:mb-16 bg-white/10 backdrop-blur-lg
                                           rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/10">
                                            
                                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                                    {movie?.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-300 text-xs sm:text-sm mb-3">
                                    <span className="text-yellow-400 flex items-center gap-1">
                                        <FcRating /> {movie?.rating}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FcClapperboard /> {movie?.genre}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <SlCalender /> {movie?.releaseYear}
                                    </span>
                                </div>

                                <p className="text-gray-200 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3">
                                    {movie?.plotSummary}
                                </p>

                                <div className="flex flex-wrap gap-3 sm:gap-4">
                                    <button className="flex items-center gap-1 px-4 md:px-6 py-2 rounded-lg text-sm sm:text-base md:font-semibold bg-linear-to-r from-violet-500 to-fuchsia-600 hover:opacity-90 transition-all duration-300">
                                        <MdOutlineSlowMotionVideo /> Watch Online
                                    </button>
                                    <button className="flex items-center gap-1 px-4 md:px-6 py-2 rounded-lg text-sm sm:text-base md:font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300">
                                        <FaRegSquarePlus /> Add to Watchlist
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
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-red-600 text-white text-3xl font-bold w-12 h-12 rounded-full flex items-center justify-center transition"
            >
                &lt;
            </button>
            <button
                ref={nextRef}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-red-600 text-white text-3xl font-bold w-12 h-12 rounded-full flex items-center justify-center transition"
            >
                &gt;
            </button>

            {/* Scroll Icon*/}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/70 flex flex-col items-center"
            >
                <span className="text-xl">Scroll</span>
                <HiChevronDown className="text-4xl" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
