import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import logoImg from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 mt-10 rounded-t-3xl">
            <div className="max-w-11/12 mx-auto px-4 grid grid-cols-2 md:grid-cols-4 justify-items-center gap-6">

                {/* Logo & About */}
                <div className="text-center md:text-left">
                    <div className="flex">
                        <img src={logoImg} alt="" className="w-7 h-7 rounded-2xl mr-2" />
                    <h2 className="text-red-500 text-xl font-bold">MovieMaster Pro</h2>
                    </div>
                    <p className="text-sm mt-2">
                        Your ultimate destination for discovering, saving, and reviewing your favorite movies.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-center md:text-left">
                    <h3 className="text-white text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
                        <li><Link to="/movies" className="hover:text-red-500 transition">All Movies</Link></li>
                        <li><Link to="/myCollection" className="hover:text-red-500 transition">My Collection</Link></li>
                        <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="text-center md:text-left">
                    <h3 className="text-white text-lg font-semibold mb-2">Contact Us</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Email: <a href="" className="hover:text-red-500 transition">support@moviemasterpro.com</a></li>
                        <li>Phone: <a href="" className="hover:text-red-500 transition">+1 (234) 567-890</a></li>
                        <li>Address: <span className="text-gray-500">123 Movie Street, Film City</span></li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="text-center md:text-left">
                    <h3 className="text-white text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex gap-4 justify-center md:justify-start text-xl">
                        <a href="#" className="hover:text-red-500 transition"><FaFacebook /></a>
                        <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-red-500 transition"><FaXTwitter /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center border-t border-gray-700 mt-6 pt-4 text-sm text-gray-500">
                © 2025 MovieMaster Pro. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
