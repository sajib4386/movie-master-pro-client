import React from 'react'

const Newsletter = () => {
  return (
    <section className="bg-linear-to-r from-indigo-500 to-pink-500 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6 text-lg">Get updates about new movies, top-rated lists, and exclusive content.</p>

        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg text-white flex-1 border-2"
          />
          <button className="btn bg-white text-indigo-600 hover:bg-gray-100 font-bold">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
