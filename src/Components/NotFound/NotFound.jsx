import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="min-h-screen dark:bg-[#0f0f1a] flex flex-col items-center justify-center text-center px-6">
            <motion.h1
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500"
            >
                404
            </motion.h1>

            <p className="text-black dark:text-gray-300 text-lg md:text-xl mt-4">
                Oops! The page you’re looking for doesn’t exist.
            </p>

            <Link
                to="/"
                className="flex items-center gap-1 mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
            >
               <FaArrowAltCircleLeft/> Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
