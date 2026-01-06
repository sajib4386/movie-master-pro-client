import React, { useEffect, useState } from "react";
import logoImg from "../../assets/logo.png"
import Loading from "../Loading/Loading";
import useAxios from "../Hooks/useAxios";

const StatisticsSection = () => {
    const axiosInstance = useAxios()
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosInstance.get("/stats")
            .then(data => {
                setStats(data.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [axiosInstance]);

    if (loading) return <Loading />;

    return (
        <section className="bg-gray-50 dark:bg-[#0b021f] text-gray-800 dark:text-white py-20">
            <div className="max-w-5xl mx-auto text-center">

                {/* Header */}
                <div className="flex items-center justify-center gap-2 mb-10">
                    <img src={logoImg} alt="Logo" className="w-8 md:w-10 h-8 md:h-10 rounded-2xl" />
                    <span className="text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                        MovieMaster Pro Statistics
                    </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    {/* Total Movies */}
                    <div className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-3xl p-8 m-4 dark:backdrop-blur-lg dark:border-white/10 dark:hover:bg-white/20 transition">
                        <h3 className="text-3xl font-bold text-violet-400">Total Movies</h3>
                        <p className="text-6xl font-extrabold mt-3">{stats?.totalMovies}</p>
                    </div>

                    {/* Total Users */}
                    <div className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-3xl p-8 m-4 dark:backdrop-blur-lg dark:border-white/10 dark:hover:bg-white/20 transition">
                        <h3 className="text-3xl font-bold text-pink-400">Total Users</h3>
                        <p className="text-6xl font-extrabold mt-3">{stats?.totalUsers}</p>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default StatisticsSection;
