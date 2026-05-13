import React from "react";
import waakye from "../assets/Images/waakye2.jpg";
import friedrice from "../assets/Images/friedrice.jpg";
// import jollof from "../assets/Images/Jollof.jpg";
import spices from "../assets/Images/spices.png";

type FoodCardProps = {
  title: string;
  description: string;
  image: string;
};

const FoodCard: React.FC<FoodCardProps> = ({ title, description, image }) => {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl shadow-md">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const SignatureGhanaianExcellence: React.FC = () => {
  return (
    <section className="bg-[#F4EFE9] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT TEXT CONTENT */}
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-500 font-medium">
              Regional Specialty
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              Signature Ghanaian Excellence
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Experience the rich, bold flavors of Ghana, curated by our master
              chefs specializing in traditional regional cuisine. From the coast
              of Accra to the northern plains.
            </p>

            <button className="mt-8 bg-[#FF6900] text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition">
              Explore Ghana's Flavors
            </button>
          </div>

          {/* RIGHT STATS */}
          <div className="flex gap-6 md:justify-end">
            <div className="bg-white shadow-sm rounded-2xl px-8 py-6 text-center w-40">
              <h3 className="text-3xl font-bold text-gray-900">100+</h3>
              <p className="text-xs uppercase tracking-wide text-gray-500 mt-2">
                Authentic Recipes
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-2xl px-8 py-6 text-center w-40">
              <h3 className="text-3xl font-bold text-gray-900">25</h3>
              <p className="text-xs uppercase tracking-wide text-gray-500 mt-2">
                Regional Chefs
              </p>
            </div>
          </div>
        </div>

        {/* FOOD CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          <FoodCard
            title="Vegetable Rice"
            description="The gold standard of West African rice, slow-cooked to perfection."
            image={friedrice}
          />

          <FoodCard
            title="Waakye Specials"
            description="A hearty, nutritious breakfast staple featuring rice and beans."
            image={waakye}
          />

          <FoodCard
            title="Traditional Spices"
            description="Hand-picked ingredients and artisanal blends for deep flavor."
            image={spices}
          />
        </div>
      </div>
    </section>
  );
};

export default SignatureGhanaianExcellence;
