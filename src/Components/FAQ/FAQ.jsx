import React from "react";

const FAQ = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#0b021f] text-gray-800 dark:text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-500">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 text-left">

          {/* FAQ 1 */}
          <details className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-2xl p-4 dark:backdrop-blur-lg dark:hover:bg-white/20 transition">
            <summary className="cursor-pointer font-semibold text-lg">
              How do I manage my movie collection?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Logged-in users can view, edit, or delete movies in their personal collection anytime from the "My Collection" section.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-2xl p-4 dark:backdrop-blur-lg dark:hover:bg-white/20 transition">
            <summary className="cursor-pointer font-semibold text-lg">
              Can I add new movies to the platform?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Yes, authenticated users can add new movies by filling in the title, genre, poster, and other details through the Add Movie section.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-2xl p-4 dark:backdrop-blur-lg dark:hover:bg-white/20 transition">
            <summary className="cursor-pointer font-semibold text-lg">
              How do I edit movie details?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              You can edit any movie you added by clicking the "Edit" button next to the movie in your collection. Only authorized users can edit.
            </p>
          </details>

          {/* FAQ 4 */}
          <details className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-2xl p-4 dark:backdrop-blur-lg dark:hover:bg-white/20 transition">
            <summary className="cursor-pointer font-semibold text-lg">
              Can I add movies to my watchlist?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Yes! You can add any movie to your watchlist to watch later. Your watchlist is private and only visible to you.
            </p>
          </details>

          {/* FAQ 5 */}
          <details className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-2xl p-4 dark:backdrop-blur-lg dark:hover:bg-white/20 transition">
            <summary className="cursor-pointer font-semibold text-lg">
              How do I remove a movie from my collection?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Simply click the "Delete" button on the movie card in your collection. You will be asked to confirm before deletion.
            </p>
          </details>

           {/* FAQ 6 */}
          <details className="bg-white dark:bg-white/10 border-2 border-amber-500 rounded-2xl p-4 dark:backdrop-blur-lg dark:hover:bg-white/20 transition">
            <summary className="cursor-pointer font-semibold text-lg">
              Is the platform mobile-friendly?
            </summary>
            <p className="mt-2 text-gray-700 dark:text-gray-200">
              Absolutely! MovieMaster Pro is fully responsive and works seamlessly on all devices including smartphones and tablets.
            </p>
          </details>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
