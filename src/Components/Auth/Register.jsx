import React, { useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const Register = () => {
    const { googleLogin, createUser, setUser, setError, updateUser } = useAuth();
    const axiosInstance = useAxios()
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [loadingRegister, setLoadingRegister] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);

    // Email/Password Registration
    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photoURL.value;


        if (!name || !email || !photoURL) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Information',
                text: 'Please fill in your name, email, and photo URL before submitting.'
            });
            return;
        }


        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'Password must be at least 6 characters and include uppercase and lowercase letters.'
            });
            return;
        }

        try {
            setLoadingRegister(true);
            const result = await createUser(email, password);
            const user = result.user;

            await updateUser({ displayName: name, photoURL });
            setUser({ ...user, displayName: name, photoURL });


            const newUser = { name, email, image: photoURL };

            axiosInstance.post("/users", newUser)
                .then(data => {
                    if (data.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            title: "Successfully Registered!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    e.target.reset();
                    setError("");
                    navigate("/");
                })

        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: err.message
            });
        }
        finally {
            setLoadingRegister(false);
        }
    };




    const handleSignInWithGoogle = async () => {
        try {
            setLoadingGoogle(true);
            const result = await googleLogin();
            const user = result.user;

            const newUser = {
                name: user.displayName,
                email: user.email,
                image: user.photoURL
            };

            // axiosInstance দিয়ে POST করা
            axiosInstance.post('/users', newUser)
                .then(data => {
                    if (data.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Successfully logged in with Google",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    setUser(user);
                    navigate("/")
                })

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
        }
        finally {
            setLoadingGoogle(false);
        }
    };

    const handlePassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="card w-[400px] md:w-[450px] dark:bg-[#1a1a2e] shadow-2xl text-white py-8 px-8">
                <div className="card-body">

                    <form onSubmit={handleRegister}>
                        <h2 className="text-center text-2xl text-black dark:text-white font-semibold mb-6">Register</h2>

                        {/* Name Field */}
                        <label className="input input-bordered flex items-center gap-3 bg-[#24243e] border-none text-gray-300 h-12 w-full">
                            <FaUser className="text-[#ffde7d] text-lg" />
                            <input
                                type="text"
                                name="name"
                                className="grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                placeholder="Your Name"
                            />
                        </label>

                        {/* Email Field */}
                        <label className="input input-bordered flex items-center gap-3 bg-[#24243e] border-none text-gray-300 mt-4 h-12 w-full">
                            <MdEmail className="text-[#ffde7d] text-lg" />
                            <input
                                type="email"
                                name="email"
                                className="grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                placeholder="Your Email"
                            />
                        </label>

                        {/* Photo URL Field */}
                        <label className="input input-bordered flex items-center gap-3 bg-[#24243e] border-none text-gray-300 mt-4 h-12 w-full">
                            <GrUserManager className="text-[#ffde7d] text-lg" />
                            <input
                                type="text"
                                name="photoURL"
                                className="grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                placeholder="Photo URL"
                            />
                        </label>

                        {/* Password Field */}
                        <label className=" relative input input-bordered flex items-center gap-3 bg-[#24243e] border-none text-gray-300 mt-4 h-12 w-full">
                            <FaLock className="text-[#ffde7d] text-lg" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                placeholder="Your Password"
                            />
                            <button type="button" onClick={handlePassword} className="btn btn-xs absolute right-3">
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </label>

                        {/* Register Button */}
                        <div className="form-control mt-6">
                            <button type="submit" className="btn w-full bg-[#ffde7d] text-black hover:bg-[#ffe799] border-none h-11 text-base font-semibold">
                                {loadingRegister ? <span className="loading loading-spinner loading-xs"></span> : 'REGISTER'}
                            </button>
                        </div>

                    </form>

                    {/* Google */}
                    <button onClick={handleSignInWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        <span className="ml-2">{loadingGoogle ? <span className="loading loading-spinner loading-xs"></span> : 'Login with Google'}</span>
                    </button>

                    {/* Login Link */}
                    <p className="text-center text-sm mt-6 dark:text-white text-black">
                        Already have an account?{" "}
                        <Link to="/login" className="dark:text-[#ffde7d] text-xl text-red-500 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
