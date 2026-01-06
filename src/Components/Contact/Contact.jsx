import React from "react";
import { FaAddressCard, FaFacebookF, FaGlobe, FaInstagram, FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            {/* Hero */}
            <div
                className="h-56 md:h-64 bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
                }}
            >
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Contact Us
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Form */}
                <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full bg-transparent dark:text-white"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full bg-transparent dark:text-white"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="input input-bordered w-full bg-transparent dark:text-white"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="textarea textarea-bordered w-full h-32 bg-transparent dark:text-white"
                        />

                        <button className="btn btn-warning text-white w-full sm:w-40">
                            Send Message
                        </button>
                    </div>
                </div>

                {/* Info */}
                <div className="text-gray-700 dark:text-gray-300">

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In Touch
                    </h2>

                    <p className="mb-6 text-sm md:text-base">
                       Have questions about your movie collection, watchlist, or adding new movies?  
                        Reach out to the MovieMaster Pro team for support, suggestions, or feedback.  
                        We're here to help you get the ultimate movie experience!
                    </p>

                    {/* Info Items */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-warning text-white rounded-md">
                                <FaPhone />
                            </div>
                            <span className="text-sm md:text-base">+880 1234 567 890</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-warning text-white rounded-md">
                                <MdEmail />
                            </div>
                            <span className="text-sm md:text-base">info@example.com</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-warning text-white rounded-md">
                                <FaGlobe />
                            </div>
                            <span className="text-sm md:text-base">www.example.com</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-warning text-white rounded-md">
                                <FaAddressCard />
                            </div>
                            <span className="text-sm md:text-base">221B Baker Street</span>
                        </div>

                    </div>

                    {/* Social */}
                    <div className="mt-8">
                        <p className="font-semibold mb-3">Follow Us On</p>
                        <div className="grid grid-cols-8 justify-center text-warning">
                            <FaFacebookF className="w-8 h-8 md:w-10 md:h-10 hover:text-blue-600"/>
                            <FaTwitter className="w-8 h-8 md:w-10 md:h-10 hover:text-blue-600"/>
                            <FaLinkedinIn className="w-8 h-8 md:w-10 md:h-10 hover:text-blue-600"/>
                            <FaInstagram className="w-8 h-8 md:w-10 md:h-10 hover:text-blue-600"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;
