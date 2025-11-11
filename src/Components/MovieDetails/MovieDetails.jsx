import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FcRating, FcClapperboard } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEdit, MdDelete } from "react-icons/md";
import Loading from "../Loading/Loading";
import useAuth from "../Hooks/useAuth";

const MovieDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user: currentUser } = useAuth();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure
            .get(`/movies/${id}`)
            .then(data => {
                setMovie(data.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [axiosSecure, id]);

    if (loading) return <Loading />;

    const isOwner = currentUser?.email === movie?.addedBy;

    return (
        <section className="bg-[#030303] text-white py-12 px-4 min-h-screen">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Poster */}
                <img
                    src={movie?.posterUrl}
                    alt=""
                    className="mx-auto ml-5 mr-5 h-96  md:h-auto md:w-1/3 rounded-2xl shadow-md shadow-amber-300"
                />

                <div className="flex-1 flex flex-col gap-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-pink-500">
                        Details
                    </h2>


                    {/*  Info Box */}
                    <div className="bg-[#1c1233] p-6 rounded-2xl flex flex-col gap-4 border-2 border-blue-900">
                        <div className="text-xl font-semibold text-gray-200">
                            Title: <span className="text-white">{movie?.title}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-gray-300">
                            <span className="flex items-center gap-1">
                                <FcRating /> {movie?.rating}
                            </span>
                            <span className="flex items-center gap-1">
                                <FcClapperboard /> {movie?.genre}
                            </span>
                            <span className="flex items-center gap-1">
                                <SlCalender /> {movie?.releaseYear}
                            </span>
                            <span>Director: {movie?.director}</span>
                            <span>Duration: {movie?.duration} min</span>
                            <span>Language: {movie?.language}</span>
                            <span>Country: {movie?.country}</span>
                            <span>Cast: {movie?.cast}</span>
                        </div>
                    </div>

                    {/* Plot Summary Box */}
                    <div className="bg-[#1c1233] p-6 rounded-2xl mt-4 border-2 border-blue-900">
                        <h3 className="text-2xl font-semibold mb-2">Plot Summary</h3>
                        <p className="text-gray-200 leading-relaxed">{movie?.plotSummary}</p>
                    </div>

                    {/* Edit/Delete buttons visible only to owner */}
                    {isOwner &&
                        <div className="flex gap-4 mt-4">
                            
                            <Link to={`/update-movie/${movie._id}`} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600">
                                <MdOutlineEdit /> Edit
                            </Link>
                           
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600">
                                <MdDelete /> Delete
                            </button>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default MovieDetails;
