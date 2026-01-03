import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoImg from "../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="dark:bg-gray-900 text-gray-400 py-6 border-t dark:border-gray-700 border-amber-300 ">
            <div className="max-w-11/12 mx-auto px-4 grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6">

                {/* Logo & About */}
                <div className="text-center md:text-left">
                    <div className="flex">
                        <img src={logoImg} alt="" className="w-7 h-7 rounded-2xl mr-2" />
                        <h2 className="text-red-500 text-xl font-bold">MovieMaster Pro</h2>
                    </div>
                    <p className="text-sm mt-2 text-black dark:text-gray-400">
                        Your ultimate destination for discovering, saving, and reviewing your favorite movies.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center md:text-left">
                    <h3 className="text-black dark:text-white text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-black dark:text-gray-400">
                        <li><a href="/" className="hover:text-red-500 transition">Home</a></li>
                        <li><a href="/movies" className="hover:text-red-500 transition">All Movies</a></li>
                        <li><a href="/about" className="hover:text-red-500 transition">About</a></li>
                        <li><a href="/contact" className="hover:text-red-500 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="text-center md:text-left">
                    <h3 className="text-black dark:text-white text-lg font-semibold mb-2">Contact Us</h3>
                    <ul className="space-y-1 text-sm text-black dark:text-gray-400">
                        <li>
                            Email:
                            <a
                                href="mailto:support@moviemasterpro.com"
                                className="hover:text-red-500 transition"
                            >
                                {" "}support@moviemasterpro.com
                            </a>
                        </li>
                        <li>
                            Phone:
                            <a
                                href="tel:+1234567890"
                                className="hover:text-red-500 transition"
                            >
                                {" "}+1 (234) 567-890
                            </a>
                        </li>
                        <li>
                            Address:
                            <span className="text-gray-500"> 123 Movie Street, Film City</span>
                        </li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="text-center md:text-left">
                    <h3 className="text-black dark:text-white text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 justify-center md:justify-start text-xl text-red-500 dark:text-gray-400">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t dark:border-gray-700 border-amber-300 mt-6"></div>

            <div className="text-center mt-2 pt-2 text-sm text-black dark:text-gray-500">
                © 2025 MovieMaster Pro. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
