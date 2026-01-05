import { useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";

const LatestMoviesTable = () => {
  const axios = useAxios();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("/latest-movies").then(res => setMovies(res.data));
  }, []);

  return (
    <div className="mt-10 p-6 rounded-xl shadow-lg bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">

      <h2 className="mb-4 text-xl font-bold text-yellow-500 dark:text-yellow-400 text-center">
        Latest Movies
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-800 dark:text-slate-200">
          <thead>
            <tr className="border-2 border-gray-300 bg-amber-100 dark:bg-blue-600 text-black dark:text-white dark:border-gray-700">
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Rating</th>
              <th className="py-2 px-4">Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(m => (
              <tr key={m._id}
                className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <td className="py-2 px-4">{m.title}</td>
                <td className="py-2 px-4">{m.rating}</td>
                <td className="py-2 px-4">{m.releaseYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestMoviesTable;
