// import { motion } from "framer-motion";

// interface ChefProps {
//   name: string;
//   experience: string;
//   rating: string;
//   image: string;
//   specialties: { name: string; image: string; description: string }[];
// }

// // Cleaned up the component structure
// const ChefProfile = ({
//   name,
//   experience,
//   rating,
//   image,
//   specialties,
// }: ChefProps) => {
//   return (
//     <div className="max-w-5xl mx-auto space-y-4">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden"
//       >
//         {/* Text Content */}
//         <div className="flex-1 space-y-6">
//           <h2 className="text-4xl font-serif text-brand-black leading-tight">
//             Your Personalize Meal, <br />
//             <span className="text-gray-400 font-sans text-3xl">
//               Delightfully Yours
//             </span>
//             <p className="text-base ">I will prepare a personalized meal tailored exactly to your taste. <br /> All you need to do is contact me, and I’ll be happy to serve you right.</p>
//           </h2>

//           <div className="flex gap-12 py-4">
//             <div>
//               <p className="text-3xl font-bold">{experience}+</p>
//               <p className="text-gray-500">Years Experience</p>
//             </div>
//             <div>
//               <p className="text-3xl font-bold">{rating}/5 ⭐</p>
//               <p className="text-gray-500">Rating</p>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-brand-gradient text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-orange-200"
//             >
//               Book a Call
//             </motion.button>
//             <button className="border-2 border-gray-100 px-10 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors">
//               My Work Style
//             </button>
//           </div>
//         </div>

//         {/* Arched Image Container */}
//         <div className="relative">
//           <div className="w-72 h-96 rounded-t-full overflow-hidden border-[10px] border-gray-50 shadow-inner">
//             <img src={image} alt={name} className="w-full h-full object-cover" />
//           </div>

//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             className="absolute top-10 -right-4 bg-white px-6 py-2 rounded-2xl shadow-xl font-bold text-sm border border-gray-100"
//           >
//             Awarded
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Specialty/Meals Bar (Matches your reference image) */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="bg-white/80 backdrop-blur-md rounded-[2rem] p-6 shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6"
//       >
//         <div className="flex items-center gap-4">
//            <div className="bg-brand-gray p-3 rounded-full text-brand-orange">
//              <span className="font-serif font-bold italic">AWARD WINNING CHEF</span>
//            </div>
//         </div>

//         <div className="flex gap-8 overflow-x-auto w-full md:w-auto">
//           {specialties.map((item, index) => (
//             <div key={index} className="flex items-center gap-4 min-w-[200px]">
//               <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-contain border-2 border-brand-orange" />
//               <div>
//                 <h4 className="font-bold text-sm">{item.name}</h4>
//                 <p className="text-xs text-gray-500 line-clamp-1">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ChefProfile;

// src/components/ChefProfile.tsx
// import React, { useState, useEffect } from "react";
// import { User } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import Chef4 from "..//assets/Images/chef4.png";
// import Chef1 from "..//assets/Images/chef1.png";
// import Chef2 from "..//assets/Images/chef2.png";

// /* ----------------------------------
//    Types
// -----------------------------------*/
// interface ChefSlide {
//   id: number;
//   name: string;
//   title: string;
//   description: string;
//   // discount: string;
//   image: string;
// }

// /* ----------------------------------
//    Chef Data
// -----------------------------------*/
// const chefData: ChefSlide[] = [
//   {
//     id: 1,
//     name: "Abena",
//     title: "Award Winning Chef From Kumasi",
//     description:
//       "I will prepare a personalized meal tailored exactly to your taste. All you need to do is contact me.",
//     // discount: "20% off",
//     image: Chef4,
//   },
//   {
//     id: 2,
//     name: "Kwadwo",
//     title: "Jollof master From Kwapong",
//     description:
//    "I will prepare a personalized meal tailored exactly to your taste. All you need to do is contact me.",
//     // discount: "15% off",
//     image: Chef2,
//   },
//   {
//     id: 3,
//     name: "Christiana",
//     title: "Executive Banku Master From Abelenkpe",
//     description:
//       "I will prepare a personalized meal tailored exactly to your taste. All you need to do is contact me.",
//     // discount: "10% off",
//     image: Chef1,
//   },
// ];

// /* ----------------------------------
//    Animation Variants
// -----------------------------------*/
// const slideVariants = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? 120 : -120,
//     opacity: 0,
//   }),
//   center: { x: 0, opacity: 1 },
//   exit: (direction: number) => ({
//     x: direction > 0 ? -120 : 120,
//     opacity: 0,
//   }),
// };

// const swipeConfidenceThreshold = 80;
// const swipePower = (offset: number, velocity: number) =>
//   Math.abs(offset) * velocity;

// /* ----------------------------------
//    ChefProfile Component
// -----------------------------------*/
// const ChefProfile: React.FC = () => {
//   const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

//   // Change slide function
//   const paginate = (newDirection: number) => {
//     setIndex(([prev]) => [
//       (prev + newDirection + chefData.length) % chefData.length,
//       newDirection,
//     ]);
//   };

//   // Auto-play every 7 seconds
//   useEffect(() => {
//     const timer = setInterval(() => paginate(1), 7000);
//     return () => clearInterval(timer);
//   }, []);

//   const current = chefData[index];

//   return (
//     <section className="min-h-[800px] bg-brand-gray px-6 py-12 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
//       {/* Left Content */}
//       <div className="flex-1 max-w-xl z-10">
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={current.id}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.5 }}
//           >
//             {/* <span className="text-[#8B5E3C] font-semibold border-b border-[#8B5E3C] pb-1">
//               {current.discount}
//             </span> */}
//             {/* <span className="text-gray-500 ml-2">for our first service</span> */}

//             <h1 className="text-5xl md:text-6xl font-bold text-[#2D1B14] mt-6 leading-tight">
//               This is {current.name}. {current.title}
//             </h1>

//             <p className="text-gray-500 mt-8 text-lg leading-relaxed">
//               {current.description}
//             </p>
//           </motion.div>
//         </AnimatePresence>

//         {/* Buttons */}
//         <div className="flex items-center gap-6 mt-10">
//           <button className="bg-[#5D3A29] text-white px-10 py-4 rounded-md font-medium hover:bg-[#4A2E21] transition-colors">
//             Contact
//           </button>

//           <button className="flex items-center gap-3 group">
//             <div className="w-12 h-12 bg-[#2D1B14] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
//               <User size={20} fill="currentColor" />
//             </div>
//             <span className="font-semibold text-[#2D1B14] border-b-2 border-[#2D1B14]">
//               View Profile
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="flex-1 relative flex justify-center items-center">
//         <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-[#2D1B14] border-[12px] border-[#3D261C] overflow-hidden">
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.div
//               key={current.id}
//               className="absolute inset-0"
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ duration: 0.6 }}
//               drag="x"
//               dragConstraints={{ left: 0, right: 0 }}
//               dragElastic={0.8}
//               onDragEnd={(e, { offset, velocity }) => {
//                 const swipe = swipePower(offset.x, velocity.x);
//                 if (swipe < -swipeConfidenceThreshold) paginate(1);
//                 else if (swipe > swipeConfidenceThreshold) paginate(-1);
//               }}
//             >
//               <img
//                 src={current.image}
//                 alt={current.name}
//                 className="w-full h-full object-cover rounded-full pointer-events-none"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChefProfile;

// import { motion } from "framer-motion";
// import type { Chef } from "../types/chefs";
// import type { JSX } from "react";

// type ChefProfilingProps = {
// chefs: Chef[];
// };

// function ChefProfiling({ chefs }: ChefProfilingProps): JSX.Element {
// return (
// <section className="py-20 px-6 lg:px-20">
// <h2 className="text-3xl lg:text-4xl font-bold mb-12">
// Meet Our <span className="text-orange-600">Chefs</span>
// </h2>

// <div className="space-y-20">
// {chefs.map((chef, index) => (
// <motion.div
// key={chef.id}
// initial={{ opacity: 0, y: 50 }}
// whileInView={{ opacity: 1, y: 0 }}
// viewport={{ once: true }}
// transition={{ duration: 0.7, delay: index * 0.2 }}
// className="grid lg:grid-cols-2 gap-10 items-center bg-orange-50 rounded-3xl p-8"
// >
// <div>
// <h3 className="text-2xl font-bold">{chef.name}</h3>
// <p className="text-zinc-600 mt-2">{chef.tagline}</p>

// <div className="flex gap-6 mt-6">
// <div>
// <p className="text-orange-600 font-bold text-xl">
// {chef.rating}★
// </p>
// <p className="text-sm text-zinc-500">Rating</p>
// </div>
// <div>
// <p className="font-semibold">{chef.experience}</p>
// </div>
// </div>

// <div className="mt-6">
// <p className="font-semibold mb-2">Signature Dishes</p>
// <div className="flex flex-wrap gap-2">
// {chef.dishes.map((dish) => (
// <span
// key={dish}
// className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
// >
// {dish}
// </span>
// ))}
// </div>
// </div>

// <button className="mt-8 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-xl transition">
// Book {chef.name}
// </button>
// </div>

// <motion.img
// whileHover={{ scale: 1.05 }}
// src={chef.image}
// alt={chef.name}
// className="rounded-3xl shadow-lg object-cover w-full h-[350px]"
// />
// </motion.div>
// ))}
// </div>
// </section>
// );
// }

// export default ChefProfiling

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import chef1 from "../assets/Images/chef1.png";
import chef2 from "../assets/Images/chef2.png";
import chef3 from "../assets/Images/chef3.png";
import chef4 from "../assets/Images/chef4.png";
// import chef5 from "../assets/Images/chef5.png";
// import chef6 from "../src/Images/chef6.png";

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
  // {
  //   name: "Chef Kofi Mensah",
  //   specialty: "Traditional Ghanaian",
  //   rating: 4.8,
  //   image: chef5,
  // },
  // {
  //   name: "Chef Nana Yaa",
  //   specialty: "Healthy Cuisine",
  //   rating: 4.6,
  //   image: chef6,
  // },
];

export default function ChefProfiling() {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;

  const next = () => {
    if (index < chefs.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section
      id="featured-chefs"
      className="py-20 px-6 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">Our Featured Chefs</h2>

          <div className="flex gap-4">
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

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {chefs.map((chef, i) => (
              <div key={i} className="w-1/3 flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition duration-300 hover:-translate-y-2">
                  {/* Chef Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={chef.image}
                      alt={chef.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-gray-200"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>

                  {/* Specialty */}
                  <p className="text-gray-500 mb-4">{chef.specialty}</p>

                  {/* Rating */}
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

                  {/* Button */}
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
