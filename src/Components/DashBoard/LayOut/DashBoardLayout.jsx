import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import logoImg from "../../../assets/logo.png"
import { MdInventory } from 'react-icons/md'
import { FaFilm, FaPlusCircle, FaSignOutAlt, FaStar, FaUserCircle } from 'react-icons/fa'
import useAuth from '../../Hooks/useAuth'


const DashBoardLayout = () => {
    const { user, logout } = useAuth()
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "dark")

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
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300 shadow-md shadow-gray-400 dark:bg-linear-to-b from-[#111827] to-[#020617] border-r border-white/10 flex justify-between items-center">

                    <div className='flex items-center'>
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-5"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="lg:text-xl font-mono font-semibold lg:font-bold text-fuchsia-600">Hello, {user?.displayName}</div>
                    </div>
                    {/* Profile */}
                    <div className='flex gap-2 mr-10'>
                        {user &&
                            <div className="dropdown dropdown-end flex gap-2">

                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img referrerPolicy="no-referrer" src={user?.photoURL} alt="Profile" />
                                    </div>
                                </label>

                                <ul
                                    tabIndex={0}
                                    className="dropdown-content space-y-3 mt-16 bg-white dark:bg-black border-2 border-amber-200 p-2 rounded-box w-52 font-bold text-black">
                                    {/* Dropdown */}

                                    <li>
                                        <NavLink
                                            to="/dashboard/profile"
                                            className="is-drawer-close:tooltip is-drawer-close:tooltip-right nav-item"
                                            data-tip="Profile"
                                        >
                                            <FaUserCircle />
                                            <span className="is-drawer-close:hidden">Profile</span>
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/dashboard" end className="px-5 py-3 text-red-500 hover:bg-red-100 dark:hover:bg-red-500/20 transition nav-item">Dashboard Home</NavLink>
                                    </li>

                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className="w-full flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-200 dark:bg-gray-900 dark:text-white text-red-500 hover:bg-red-600 dark:hover:bg-red-500/20 transition"
                                        >
                                            <FaSignOutAlt />
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        }
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                onChange={(e) => handleTheme(e.target.checked)}
                                type="checkbox"
                                defaultChecked={localStorage.getItem('theme') === "dark"}
                                className="toggle"
                            />
                        </label>
                    </div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible bg-base-300 shadow-md shadow-gray-400">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-20 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow bg-base-300 shadow-md shadow-gray-400 dark:bg-linear-to-b from-[#111827] to-[#020617] border-r border-white/10 space-y-3">
                        {/* Logo */}
                        <li className='mx-auto'>

                            <Link to="/" className="flex items-center">
                                <img src={logoImg} alt="" className="w-7 h-7 rounded-2xl mr-2" />
                            </Link>
                        </li>

                        {/* Dashboard */}
                        <li>
                            <NavLink to="/dashboard" end className="is-drawer-close:tooltip is-drawer-close:tooltip-right nav-item" data-tip="Dashboard">
                                <MdInventory />
                                <span className="is-drawer-close:hidden">Dashboard</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/my-collection" className="is-drawer-close:tooltip is-drawer-close:tooltip-right nav-item" data-tip="My Collection">
                                <FaFilm />
                                <span className="is-drawer-close:hidden">My Collection</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/add-movie" className="is-drawer-close:tooltip is-drawer-close:tooltip-right nav-item" data-tip="Add Movie">
                                <FaPlusCircle />
                                <span className="is-drawer-close:hidden">Add Movie</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard/watchlist" className="is-drawer-close:tooltip is-drawer-close:tooltip-right nav-item" data-tip="Watchlist">
                                <FaStar />
                                <span className="is-drawer-close:hidden">Watchlist</span>
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default DashBoardLayout