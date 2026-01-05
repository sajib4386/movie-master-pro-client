import React, { useEffect, useState } from 'react'
import TopRatedChart from './TopRatedChart'
import useAxios from '../../Hooks/useAxios';
import LatestMoviesTable from './LatestMoviesTable';

const DashBoardHome = () => {
  const axios = useAxios();
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios.get("/stats").then(res => setStats(res.data));
  }, []);

  return (
    <>
      <div className="m-10">
        <h1 className="text-3xl text-center font-bold mb-8 text-yellow-500 dark:text-yellow-400">Dashboard Overview</h1>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Movies */}
            <div
              className="p-6 rounded-xl shadow-lg text-center bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
              <h3 className="text-slate-500 dark:text-slate-400 font-medium">
                Total Movies
              </h3>
              <p className="text-4xl font-bold text-yellow-500 dark:text-yellow-400 mt-2">
                {stats.totalMovies}
              </p>
            </div>

            {/* Total Users */}
            <div
              className="p-6 rounded-xl shadow-lg text-center bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
              <h3 className="text-slate-500 dark:text-slate-400 font-medium">
                Total Users
              </h3>
              <p className="text-4xl font-bold text-yellow-500 dark:text-yellow-400 mt-2">
                {stats.totalUsers}
              </p>
            </div>
          </div>

          <TopRatedChart />
        </div>

        <LatestMoviesTable />
      </div>
    </>
  );
};

export default DashBoardHome;
