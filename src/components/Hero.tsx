import React from "react";
import chef3 from "../assets/Images/chef3.png";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#f4efe9] px-6 lg:px-20 py-16 mt-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-orange-500 uppercase tracking-widest font-semibold mb-6">
            Curated Culinary Excellence
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a0f07] leading-tight">
            Real Food. Real Cooks.{" "}
            <span className="text-orange-500 border-b-4 border-orange-500 inline-block">
              Right at
            </span>{" "}
            <br />
            <span className="text-orange-500 border-b-4 border-orange-500 inline-block">
              Your Door.
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            eat4me connects you with talented home cooks and chefs across Ghana
            — authentic meals made with care, delivered to you, or prepared in
            your home for any occasion.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-2xl transition duration-300 shadow-md">
              Explore Chefs →
            </button>

            <button className="bg-[#1a0f07] hover:bg-black text-white font-semibold px-8 py-4 rounded-2xl transition duration-300 shadow-md">
              Book a Cook
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={chef3}
              alt="Professional Chef"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Overlay Text Card */}
          <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md px-6 py-4 rounded-2xl">
            <p className="text-orange-400 text-sm uppercase tracking-wider">
              Featured Chef
            </p>
            <h3 className="text-white text-2xl font-bold">
              Book Your Private Cook Today
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
