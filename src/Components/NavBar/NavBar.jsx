import React, { use, useEffect, useState } from "react";
import { FaBars, FaFilm, FaPlusCircle, FaSearch, FaSignOutAlt, FaStar, FaTachometerAlt, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png"
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const NavBar = () => {
    const { user, logout } = useAuth()
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "dark")
    const [profileOpen, setProfileOpen] = useState(false);


    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }

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

    // Auth/Profile Section
    const AuthSection = !user ? (
        <>
            <Link
                to="/login"
                className="px-3 py-1 rounded border border-red-500 hover:bg-red-500 text-sm transition"
            >
                Login
            </Link>
            <Link
                to="/register"
                className="px-3 py-1 rounded border border-red-500 hover:bg-red-500 text-sm transition"
            >
                Register
            </Link>
        </>
    ) : (
        <div className="relative">
            {/* Profile Icon */}
            <button onClick={() => setProfileOpen(!profileOpen)}>
                {user.photoURL ? (
                    <img
                        src={user.photoURL}
                        alt=""
                        className="w-8 h-8 rounded-full border border-white"
                    />
                ) : (
                    <FaUserCircle size={26} />
                )}
            </button>

            {/* Dropdown */}
            {profileOpen && (
                <ul
                    className="absolute mt-3 w-60 max-w-[90vw] rounded-xl shadow-2xl border bg-white text-gray-800 border-gray-200 
                              dark:bg-gray-900 dark:text-white dark:border-gray-700 z-50 overflow-hidden xl:right-0 top-14">
                    {/* User Info */}
                    <li className="px-5 py-4 text-center border-b border-gray-200 dark:border-gray-700">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    className="w-full h-full rounded-full"
                                    alt=""
                                />
                            ) : (
                                <FaUserCircle size={28} />
                            )}
                        </div>

                        <div className="font-semibold text-yellow-500 dark:text-yellow-400 truncate">
                            {user.displayName}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                            {user.email}
                        </div>
                    </li>

                    {/* Dashboard */}
                    <li>
                        <NavLink
                            to="/dashboard"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            <FaTachometerAlt className="text-red-500" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>

                    {/* Protected Routes */}
                    <li>
                        <NavLink
                            to="/myCollection"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            <FaFilm />
                            <span>My Collection</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/add-movie"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            <FaPlusCircle />
                            <span>Add Movie</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/watchlist"
                            onClick={() => setProfileOpen(false)}
                            className="flex items-center gap-3 px-5 py-3 text-yellow-600 dark:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                        >
                            <FaStar />
                            <span>Watchlist</span>
                        </NavLink>
                    </li>


                    {/* Logout */}
                    <li className="border-t border-gray-200 dark:border-gray-700">
                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center gap-3 px-5 py-3 text-red-500 hover:bg-red-100 dark:hover:bg-red-500/20 transition"
                        >
                            <FaSignOutAlt />
                            Logout
                        </button>
                    </li>
                </ul>
            )}
        </div>
    );



    return (
        <header className="dark:bg-gray-900 dark:text-white sticky top-0 z-50 p-2">

            <div className="max-w-11/12 mx-auto flex items-center justify-between px-4 py-3 mr-5 ml-5">
                {/* Logo & Title */}

                <Link to="/" className="flex items-center">
                    <img src={logoImg} alt="" className="w-7 h-7 rounded-2xl mr-2" />
                    <h1 className="text-2xl font-bold text-red-500">MovieMaster Pro</h1>
                </Link>


                {/* Desktop Menu */}
                <div className="hidden xl:flex flex-1 items-center justify-between gap-6">
                    <div className="flex items-center justify-center flex-1 gap-8">
                        <nav className="flex items-center gap-6">
                            <NavLink to="/" className="hover:text-red-500 transition">Home</NavLink>
                            <NavLink to="/movies" className="hover:text-red-500 transition">All Movies</NavLink>
                            <NavLink to="/about" className="hover:text-red-500 transition">About</NavLink>
                        </nav>

                        {/* Search Bar */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search movies..."
                                className="w-full px-3 py-1 rounded border border-yellow-500 dark:text-yellow-200 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                            />
                            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
                        </div>
                    </div>

                    {/* Desktop Auth/Profile */}
                    <div className="flex items-center gap-2">
                        {AuthSection}
                        <input
                            onChange={(e) => handleTheme(e.target.checked)}
                            type="checkbox"
                            defaultChecked={localStorage.getItem('theme') === "dark"}
                            className="toggle" />
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="xl:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <div className="border-b-2 border-amber-200 dark:border-none w-full"></div>

            {/* Mobile Sidebar */}
            {open && (
                <div className="xl:hidden dark:bg-gray-900 dark:text-white px-6 py-4 space-y-2">
                    <NavLink to="/" className="block hover:text-red-500 transition">Home</NavLink>
                    <NavLink to="/movies" className="block hover:text-red-500 transition">All Movies</NavLink>
                    <NavLink to="/about" className="hover:text-red-500 transition">About</NavLink>

                    {/* Mobile Search Bar */}
                    <div className="relative mt-2">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            className="px-3 py-1 rounded border border-yellow-500 dark:text-yellow-200 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                        />
                        <FaSearch className="absolute left-40 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm" />
                    </div>
                    {/* Mobile Auth/Profile */}
                    <div className="flex gap-2">
                        {AuthSection}
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                onChange={(e) => handleTheme(e.target.checked)}
                                type="checkbox"
                                defaultChecked={localStorage.getItem('theme') === "dark"}
                                className="toggle"
                            />
                        </label>
                    </div>
                </div>
            )}
        </header>
    );
};

export default NavBar;
