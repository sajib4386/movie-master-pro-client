import React, { use, useState } from "react";
import { FaBars, FaSearch, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const NavBar = ({ user }) => {
    const [open, setOpen] = useState(false);

    // Auth/Profile Reuse
    const AuthSection = !user ?
        <>
            <Link to="/login" className="px-3 py-1 rounded border border-red-500 hover:bg-red-500 text-sm transition">Login</Link>
            <Link to="/register" className="px-3 py-1 rounded border border-red-500 hover:bg-red-500 text-sm transition">Register</Link>
        </>
        :
        <>
            <button className="px-3 py-1 bg-red-500 rounded hover:bg-red-600 text-sm">Logout</button>
            <div className="relative group">
                {user.photoURL ?
                    <img
                        src={user.photoURL}
                        alt=""
                        className="w-8 h-8 rounded-full border border-white"
                    />
                    :
                    <FaUserCircle size={24} />
                }
                <ul className="absolute hidden group-hover:block bg-gray-800 rounded-md mt-2 w-40 right-0">
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">My Profile</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-700">Settings</a></li>
                </ul>
            </div>
        </>
        ;

    return (
        <header className="bg-gray-900 text-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Title */}
                <div className="text-2xl font-bold text-red-500">MovieMaster Pro</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 items-center justify-center gap-6">
                    <nav className="flex items-center gap-6">
                        <NavLink to="/" className="hover:text-red-500 transition">Home</NavLink>
                        <NavLink to="/movies" className="hover:text-red-500 transition">All Movies</NavLink>
                        <NavLink to="/myCollection" className="hover:text-red-500 transition">My Collection</NavLink>
                    </nav>

                    {/* Search Bar */}
                    <div className="mx-6 flex-1 max-w-xs">
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
                <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Sidebar */}
            {open && (
                <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
                    <NavLink to="/" className="block hover:text-red-500 transition">Home</NavLink>
                    <NavLink to="/movies" className="block hover:text-red-500 transition">All Movies</NavLink>
                    <NavLink to="/myCollection" className="block hover:text-red-500 transition">My Collection</NavLink>

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
