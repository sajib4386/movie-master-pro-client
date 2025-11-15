import React, { useState } from "react";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { MdMovie } from "react-icons/md";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router";
import useAxios from "../Hooks/useAxios";


const CreateAMovie = () => {
    const { user } = useAuth();
    const axiosInstance = useAxios()
    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate()

    const handleCreateAMovie = (e) => {
        e.preventDefault();
        setSubmitting(true);
        const form = e.target;

        const newMovie = {
            title: form.title.value,
            genre: form.genre.value,
            rating: parseFloat(form.rating.value),
            releaseYear: parseInt(form.releaseYear.value),
            duration: parseInt(form.duration.value),
            language: form.language.value,
            country: form.country.value,
            director: form.director.value,
            cast: form.cast.value,
            posterUrl: form.posterUrl.value,
            plotSummary: form.plotSummary.value,
            addedBy: user?.email
        };

        axiosInstance.post("/movies", newMovie)
            .then((data) => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Movie Added Successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate ("/myCollection");
                }
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: "Please try again later.",
                });
            })
            .finally(() => setSubmitting(false));
    };

    if (submitting) return <Loading />;

    return (
        <div className="min-h-screen flex items-center justify-center  text-white m-5">
            <div className="card w-[400px] md:w-[600px] dark:bg-[#1a1a2e] py-8 px-8 rounded-2xl shadow-md shadow-gray-300 dark:shadow-none border-2 border-amber-300 dark:border-amber-100">
                <h2 className="text-center text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                    Add New Movie
                </h2>

                <form onSubmit={handleCreateAMovie} className="space-y-4">

                    {/* Title */}
                    <label className="input input-bordered flex items-center gap-3 bg-[#24243e] border-none text-gray-300 h-12 w-full">
                        <MdMovie className="text-[#ffde7d] text-lg" />
                        <input type="text" name="title" required placeholder="Movie Title" className="grow bg-transparent text-white focus:outline-none" />
                    </label>

                    {/* Genre + Rating */}
                    <div className="grid grid-cols-2 gap-3">
                        <input type="text" name="genre" required placeholder="Genre" className="input bg-[#24243e] border-none text-gray-300 h-12 w-full" />
                        <input type="number" name="rating" required placeholder="Rating (0-10)" className="input bg-[#24243e] border-none text-gray-300 h-12 w-full" />
                    </div>

                    {/* Release Year + Duration */}
                    <div className="grid grid-cols-2 gap-3">
                        <input type="text" name="releaseYear" required placeholder="Release Year" className="input bg-[#24243e] border-none text-gray-300 h-12 w-full" />
                        <input type="number" name="duration" required placeholder="Duration (min)" className="input bg-[#24243e] border-none text-gray-300 h-12 w-full" />
                    </div>

                    {/* Director + Cast */}
                    <div className="grid grid-cols-2 gap-3">
                        <input type="text" name="director" required placeholder="Director Name" className="input bg-[#24243e] border-none text-gray-300 h-12 w-full" />
                        <input type="text" name="cast" required placeholder="Main Cast" className="input bg-[#24243e] border-none text-gray-300 h-12 w-full" />
                    </div>

                    {/* Language + Country */}
                    <div className="grid grid-cols-2 gap-3">
                        <input type="text" name="language" required placeholder="Language" className="input bg-[#24243e] border-none text-gray-300 h-12 w-full" />
                        <input type="text" name="country" required placeholder="Country" className="input bg-[#24243e] border-none text-gray-300 h-12 w-full" />
                    </div>

                    {/* Poster URL */}
                    <input type="url" name="posterUrl" required placeholder="Poster Image URL" className="input bg-[#24243e] border-none text-gray-300 h-12 w-full" />

                    {/* Plot Summary */}
                    <textarea name="plotSummary" required placeholder="Plot Summary" className="textarea bg-[#24243e] border-none text-gray-300 w-full h-24 resize-none"></textarea>

                    {/* Submit */}
                    <button type="submit" disabled={submitting} className="btn w-full bg-[#ffde7d] text-black hover:bg-[#ffe799] border-none h-11 text-base font-semibold">
                        {submitting ? "Adding..." : "Add Movie"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAMovie;

