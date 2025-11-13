import React, { use, useState } from "react";
import { FaBars, FaSearch, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png"
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const NavBar = () => {
    const { user, logout } = useAuth()
    const [open, setOpen] = useState(false);

    const handleSignOut = () => {
        logout()
            .then(() => {
                toast('Successfully Signed Out');
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast(errorMessage);
            });
    }

    // Auth/Profile Reuse
    const AuthSection = !user ?
        <>
            <Link to="/login" className="px-3 py-1 rounded border border-red-500 hover:bg-red-500 text-sm transition">Login</Link>
            <Link to="/register" className="px-3 py-1 rounded border border-red-500 hover:bg-red-500 text-sm transition">Register</Link>
        </>
        :
        <>
            <button onClick={handleSignOut} className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-sm">Logout</button>
            <div className="relative group">
                {
                    user.photoURL ?
                        <img
                            src={user?.photoURL}
                            alt=""
                            className="w-8 h-8 rounded-full border border-white"
                        />
                        :
                        <FaUserCircle size={24} />
                }
                <ul className="absolute hidden group-hover:block bg-gray-800 rounded-md mt-2 w-48 right-0">
                    <li><a href="#" className="block text-center px-4 py-2 hover:bg-gray-700">My Profile</a></li>
                    <li className="bg-gray-700 rounded-md mt-1 text-gray-100 text-center p-5">
                        <div className="font-semibold text-yellow-300">{user?.displayName}</div>
                        <div className="text-xs text-gray-300">{user?.email}</div>
                    </li>

                </ul>
            </div>
        </>
        ;

    return (
        <header className="bg-gray-900 text-white sticky top-0 z-50 p-2">
            <div className="max-w-11/12 mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo & Title */}

                <Link to="/" className="flex items-center">
                    <img src={logoImg} alt="" className="w-7 h-7 rounded-2xl mr-2" />
                    <h1 className="text-2xl font-bold text-red-500">MovieMaster Pro</h1>
                </Link>


                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-1 items-center justify-between gap-6">
                    <div className="flex items-center justify-center flex-1 gap-8">
                        <nav className="flex items-center gap-6">
                            <NavLink to="/" className="hover:text-red-500 transition">Home</NavLink>
                            <NavLink to="/movies" className="hover:text-red-500 transition">All Movies</NavLink>

                            {user &&
                                <>
                                    <NavLink to="/myCollection" className="hover:text-red-500 transition">My Collection</NavLink>
                                    <NavLink to="/add-movie" className="hover:text-red-500 transition">Add Movie</NavLink>
                                    <NavLink to="/watchlist" className="hover:text-yellow-400 transition">Watchlist</NavLink>
                                </>
                            }
                        </nav>

                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search movies..."
                                className="w-full px-3 py-1 rounded border border-yellow-500 text-yellow-200 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                            />
                            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
                        </div>
                    </div>

                    {/* Desktop Auth/Profile */}
                    <div className="flex items-center gap-2">
                        {AuthSection}
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Sidebar */}
            {open && (
                <div className="lg:hidden bg-gray-800 px-6 py-4 space-y-4">
                    <NavLink to="/" className="block hover:text-red-500 transition">Home</NavLink>
                    <NavLink to="/movies" className="block hover:text-red-500 transition">All Movies</NavLink>

                    {user &&
                        <>
                            <NavLink to="/myCollection" className="hover:text-red-500 transition">My Collection</NavLink>
                            <NavLink to="/add-movie" className="hover:text-red-500 transition">Add Movie</NavLink>
                            <NavLink to="/watchlist" className="hover:text-yellow-400 transition">Watchlist</NavLink>
                        </>
                    }
                    {/* Mobile Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            className="px-3 py-1 rounded border border-yellow-500 text-yellow-200 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                        />
                        <FaSearch className="absolute left-40 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
                    </div>

                    {/* Mobile Auth/Profile */}
                    <div className="flex gap-2">
                        {AuthSection}
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
