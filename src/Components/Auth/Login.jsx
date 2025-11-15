import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";

const Login = () => {

    const { signIn, googleLogin, setUser } = useAuth();
    const axiosInstance = useAxios()
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [loadingGoogle, setLoadingGoogle] = useState(false);


    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Missing Fields',
                text: 'Please enter email and password.'
            });
            return;
        }

        try {
            setLoadingLogin(true);
            const result = await signIn(email, password);
            const user = result.user;
            setUser(user);

            Swal.fire({
                icon: 'success',
                title: 'Successfully Logged In',
                showConfirmButton: false,
                timer: 1500
            });

            navigate("/");
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: err.message
            });
        }
        finally {
            setLoadingLogin(false);
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
            <div className="card w-[400px] md:w-[450px]  dark:bg-[#1a1a2e] shadow-2xl text-white py-8 px-8">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <h2 className="text-center text-2xl dark:text-white text-black font-semibold mb-6">Login</h2>

                        {/* Email Field */}
                        <label className="input input-bordered flex items-center gap-3 bg-[#24243e] border-none text-gray-300 h-12 w-full">
                            <MdEmail className="text-[#ffde7d] text-lg" />
                            <input
                                type="email"
                                name="email"
                                className="grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
                                placeholder="Your Email"
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

                        {/* Forgot Password */}
                        <a href="#" className="dark:text-[#ffde7d] text-gray-700 hover:underline block text-sm mt-2">Forgot Password?</a>

                        {/* Login Button */}
                        <div className="form-control mt-6">
                            <button className="btn w-full bg-[#ffde7d] text-black hover:bg-[#ffe799] border-none h-11 text-base font-semibold">
                                {loadingLogin ? <span className="loading loading-spinner loading-xs"></span> : 'LOGIN'}
                            </button>
                        </div>

                    </form>
                    {/* Google */}
                    <button type="button" onClick={handleSignInWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        <span className="ml-2">{loadingGoogle ? <span className="loading loading-spinner loading-xs"></span> : 'Login with Google'}</span>
                    </button>

                    {/* Register Link */}
                    <p className="text-center text-sm mt-6 dark:text-white text-black">
                        Don’t have an account?{" "}
                        <Link to="/register" className="dark:text-[#ffde7d] text-red-700 text-xl hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
