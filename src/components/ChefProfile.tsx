// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// import chef1 from "../assets/Images/chef1.png";
// import chef2 from "../assets/Images/chef2.png";
// import chef3 from "../assets/Images/chef3.png";
// import chef4 from "../assets/Images/chef4.png";
// // import chef5 from "../assets/Images/chef5.png";
// // import chef6 from "../src/Images/chef6.png";

// interface Chef {
//   name: string;
//   specialty: string;
//   rating: number;
//   image: string;
// }

// const chefs: Chef[] = [
//   {
//     name: "Chef Kwesi Arhin",
//     specialty: "West African Fusion",
//     rating: 4.9,
//     image: chef1,
//   },
//   {
//     name: "Chef Sarah Jenkins",
//     specialty: "Modern European",
//     rating: 4.7,
//     image: chef2,
//   },
//   {
//     name: "Chef Marco Rossi",
//     specialty: "Artisanal Italian",
//     rating: 5.0,
//     image: chef3,
//   },
//   {
//     name: "Chef Amara",
//     specialty: "Pastry & Desserts",
//     rating: 4.9,
//     image: chef4,
//   },
//   // {
//   //   name: "Chef Kofi Mensah",
//   //   specialty: "Traditional Ghanaian",
//   //   rating: 4.8,
//   //   image: chef5,
//   // },
//   // {
//   //   name: "Chef Nana Yaa",
//   //   specialty: "Healthy Cuisine",
//   //   rating: 4.6,
//   //   image: chef6,
//   // },
// ];

// export default function ChefProfiling() {
//   const [index, setIndex] = useState(0);

//   const visibleCards = 3;

//   const next = () => {
//     if (index < chefs.length - visibleCards) {
//       setIndex(index + 1);
//     }
//   };

//   const prev = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   return (
//     <section
//       id="featured-chefs"
//       className="py-20 px-6 bg-gray-50 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-4xl font-bold">Our Featured Chefs</h2>

//           <div className="flex gap-4">
//             <button
//               onClick={prev}
//               className="p-3 rounded-full border hover:bg-orange-500 hover:text-white transition"
//             >
//               <ChevronLeft size={20} />
//             </button>

//             <button
//               onClick={next}
//               className="p-3 rounded-full border hover:bg-orange-500 hover:text-white transition"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Carousel */}
//         <div className="relative overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out"
//             style={{
//               transform: `translateX(-${index * (100 / visibleCards)}%)`,
//             }}
//           >
//             {chefs.map((chef, i) => (
//               <div key={i} className="w-1/3 flex-shrink-0 px-4">
//                 <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300 hover:-translate-y-2">
//                   {/* Chef Image */}
//                   <div className="flex justify-center mb-4">
//                     <img
//                       src={chef.image}
//                       alt={chef.name}
//                       className="w-28 h-28 rounded-full object-cover border-4 border-gray-200"
//                     />
//                   </div>

//                   {/* Name */}
//                   <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>

//                   {/* Specialty */}
//                   <p className="text-gray-500 mb-4">{chef.specialty}</p>

//                   {/* Rating */}
//                   <div className="flex justify-center items-center gap-1 mb-6">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         size={18}
//                         className="text-yellow-400 fill-yellow-400"
//                       />
//                     ))}
//                     <span className="ml-2 font-semibold">{chef.rating}</span>
//                   </div>

//                   {/* Button */}
//                   <button className="px-6 py-3 border-2 border-black rounded-xl font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
//                     View Profile
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import chef1 from "../assets/Images/chef1.png";
import chef2 from "../assets/Images/chef2.png";
import chef3 from "../assets/Images/chef3.png";
import chef4 from "../assets/Images/chef4.png";

interface Chef {
  name: string;
  specialty: string;
  rating: number;
  image: string;
}

const chefs: Chef[] = [
  {
    name: "Chef Kwesi Arhin",
    specialty: "West African Fusion",
    rating: 4.9,
    image: chef1,
  },
  {
    name: "Chef Sarah Jenkins",
    specialty: "Modern European",
    rating: 4.7,
    image: chef2,
  },
  {
    name: "Chef Marco Rossi",
    specialty: "Artisanal Italian",
    rating: 5.0,
    image: chef3,
  },
  {
    name: "Chef Amara",
    specialty: "Pastry & Desserts",
    rating: 4.9,
    image: chef4,
  },
];

export default function ChefProfiling() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // ✅ Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = chefs.length - cardsPerView;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section id="featured-chefs" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Featured Chefs
          </h2>

          {/* Arrows (desktop only) */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full border hover:bg-orange-500 hover:text-white transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="p-3 rounded-full border hover:bg-orange-500 hover:text-white transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ✅ MOBILE = GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {chefs.map((chef, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-200 mb-4"
              />

              <h3 className="text-lg font-semibold">{chef.name}</h3>
              <p className="text-gray-500 mb-3">{chef.specialty}</p>

              <div className="flex justify-center items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
                <span className="ml-1 text-sm font-semibold">
                  {chef.rating}
                </span>
              </div>

              <button className="px-5 py-2 border rounded-lg text-sm hover:bg-orange-500 hover:text-white transition">
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* ✅ DESKTOP = SLIDER */}
        <div className="hidden md:block overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / cardsPerView)}%)`,
            }}
          >
            {chefs.map((chef, i) => (
              <div key={i} className="px-4 min-w-[50%] lg:min-w-[33.33%]">
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300 hover:-translate-y-2">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-200 mb-4"
                  />

                  <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>

                  <p className="text-gray-500 mb-4">{chef.specialty}</p>

                  <div className="flex justify-center items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                    <span className="ml-2 font-semibold">{chef.rating}</span>
                  </div>

                  <button className="px-6 py-3 border-2 border-black rounded-xl font-medium hover:bg-orange-500 hover:text-white hover:border-orange-500 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
