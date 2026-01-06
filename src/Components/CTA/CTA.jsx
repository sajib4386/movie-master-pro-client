import React from "react";

const CTA = () => {
  return (
    <section className="py-16 px-4">
      <div className="relative overflow-hidden max-w-6xl mx-auto rounded-3xl bg-linear-to-r from-orange-500 to-orange-400 text-white p-10 md:p-16">
        
        {/* Right concentric circles */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="w-[420px] h-[420px] rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-[320px] h-[300px] rounded-full bg-white/15 flex items-center justify-center">
              <div className="w-[220px] h-[220px] rounded-full bg-white/20" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Join MovieMaster Pro Today!
          </h2>
          <p className="text-white/90 mb-8">
            Get unlimited access to top-rated movies, personalized recommendations, and exclusive features.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-medium">
               Get Started
              <span className="w-4 h-4 rounded-full bg-white/80" />
            </button>

            <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full font-medium">
                Browse Movies
              <span className="w-4 h-4 rounded-full bg-white/80" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
