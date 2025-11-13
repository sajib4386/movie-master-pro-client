import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "../Loading/Loading";
import Swal from "sweetalert2";

const UpdateMovie = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        axiosSecure
            .get(`/movies/${id}`)
            .then(data => {
                setMovie(data.data)
            })
            .catch((err) => console.error(err));
    }, [id, axiosSecure]);

    const handleUpdate = (e) => {
        e.preventDefault();
        setSubmitting(true);
        const form = e.target;

        const updatedMovie = {
            title: form.title.value,
            genre: form.genre.value,
            rating: parseFloat(form.rating.value),
            releaseYear: parseInt(form.releaseYear.value),
            duration: parseInt(form.duration.value),
            director: form.director.value,
            cast: form.cast.value,
            language: form.language.value,
            country: form.country.value,
            posterUrl: form.posterUrl.value,
            plotSummary: form.plotSummary.value,
        };

        axiosSecure.patch(`/movies/${movie._id}`, updatedMovie)
            .then(() => {
                Swal.fire({
                    title: "Updated!",
                    text: "Movie information updated successfully!",
                    icon: "success",
                });
                navigate(`/movie-details/${movie._id}`);
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong while updating.",
                    icon: "error",
                });
            })
            .finally(() => setSubmitting(false));
    };

    if (!movie || submitting) return <Loading />;

    return (
        <div className="min-h-screen flex items-center justify-center text-white px-4 py-10">
            <div className="w-full max-w-2xl bg-[#1a1a2e] rounded-2xl p-8 space-y-6">
                <h2 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
                    Update Movie
                </h2>

                <form onSubmit={handleUpdate}
                    className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        defaultValue={movie?.title}
                        placeholder="Movie Title"
                        className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                    />

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            name="genre"
                            defaultValue={movie?.genre}
                            placeholder="Genre"
                            className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                        />
                        <input
                            type="number"
                            name="rating"
                            defaultValue={movie?.rating}
                            placeholder="Rating (0-10)"
                            className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            name="releaseYear"
                            defaultValue={movie?.releaseYear}
                            placeholder="Release Year"
                            className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                        />
                        <input
                            type="number"
                            name="duration"
                            defaultValue={movie?.duration}
                            placeholder="Duration (min)"
                            className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            name="director"
                            defaultValue={movie?.director}
                            placeholder="Director Name"
                            className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                        />
                        <input
                            type="text"
                            name="cast"
                            defaultValue={movie?.cast}
                            placeholder="Main Cast"
                            className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            name="language"
                            defaultValue={movie?.language}
                            placeholder="Language"
                            className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                        />
                        <input
                            type="text"
                            name="country"
                            defaultValue={movie?.country}
                            placeholder="Country"
                            className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                        />
                    </div>

                    <input
                        type="url"
                        name="posterUrl"
                        defaultValue={movie?.posterUrl}
                        placeholder="Poster Image URL"
                        className="input bg-[#24243e] border-none text-gray-300 h-12 w-full"
                    />

                    <textarea
                        name="plotSummary"
                        defaultValue={movie?.plotSummary}
                        placeholder="Plot Summary"
                        className="textarea bg-[#24243e] border-none text-gray-300 w-full h-24"
                    />

                    <input
                        type="text"
                        value={movie?.addedBy}
                        disabled
                        className="input bg-[#24243e] border-none text-gray-400 h-12 w-full"
                    />

                    <button
                        type="submit"
                        disabled={submitting}
                        className="btn w-full bg-[#ffde7d] text-black hover:bg-[#ffe799] border-none h-11 text-base font-semibold"
                    >
                         {submitting ? "Updating..." : "Update Movie"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateMovie;
