// import React, { useEffect, useState } from "react";
// import {
//   Star,
//   Award,
//   ChevronRight,
//   ChevronLeft,
//   User,
// } from "lucide-react";
// import type { Specialty } from "../types/index";

// /* =======================
//    TYPES
// ======================= */

// interface HeroProps {
//   name: string;
//   experience: string;
//   rating: string;
//   image: string;
//   specialties: Specialty[];
// }

// /* =======================
//    TEMP SLIDESHOW DATA
//    (can be removed later)
// ======================= */

// const FOOD_ITEMS = [
//   {
//     title: "Butter Chicken",
//     desc: "A creamy, spiced Indian curry made with marinated grilled chicken.",
//     img: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
//   {
//     title: "Shawarma Wrap",
//     desc: "Thin slices of marinated meat wrapped in pita bread with garlic sauce.",
//     img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
//   {
//     title: "Grilled Salmon",
//     desc: "Fresh Atlantic salmon seasoned with herbs and lemon zest.",
//     img: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
//   {
//     title: "Truffle Pasta",
//     desc: "Handmade fettuccine tossed in a rich black truffle cream sauce.",
//     img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=200",
//   },
// ];

// /* =======================
//    COMPONENT
// ======================= */

// const Hero: React.FC<HeroProps> = ({
//   name,
//   rating,
//   image,
//   specialties,
// }) => {
//   const [foodIndex, setFoodIndex] = useState(0);

//   // Auto-slide food items
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setFoodIndex((prev) => (prev + 1) % FOOD_ITEMS.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="min-h-screen bg-slate-50 font-sans text-slate-800 p-6 md:p-12 lg:p-20 flex items-center justify-center overflow-hidden">
//       <div className="max-w-6xl w-full relative">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT CONTENT */}
//           <div className="z-10 animate-in fade-in slide-in-from-left duration-700">
//             <h1 className="text-5xl md:text-4xl font-bold leading-tight text-slate-700 mb-6">
//               Deliciously Personal,
//               <br />
//               <span className="text-slate-400 font-medium">
//                 Delightfully Yours
//               </span>
//             </h1>

//             <p className="text-slate-500 text-sm max-w-md mb-5 leading-relaxed">
//               <p> Delightfully Yours  Delightfully Yours  Delightfully Yours  Delightfully Yours  Delightfully Yours  Delightfully Yours  Delightfully Yours  Delightfully Yours</p>
//             </p>

//             {/* Specialties */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {specialties.map((item) => (
//                 <span
//                   key={String(item)}
//                   className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-semibold"
//                 >
//                  {String(item)}

//                 </span>
//               ))}
//             </div>

//             <div className="flex flex-wrap gap-4 mb-10">
//               <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:scale-[1.02] active:scale-[0.97]">
//                 Book a Chef
//               </button>

//               <button className="bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.97]">
//                 <User size={18} />
//                 Chef Profile
//               </button>
//             </div>
//           </div>

//           {/* RIGHT CONTENT – HERO CHEF */}
//           <div className="relative flex justify-center lg:justify-end mt-10">
//             <div className="relative w-80 h-[450px] bg-white rounded-t-full border-[12px] border-white shadow-2xl overflow-hidden">
//               <img
//                 src={image}
//                 alt={name}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               {/* Award */}
//               <div className="absolute top-10 right-4 bg-white px-5 py-2 rounded-2xl shadow-md border border-slate-100">
//                 <span className="text-xs text-slate-400 font-bold uppercase">
//                   Awarded
//                 </span>
//               </div>

//               {/* Rating */}
//               <div className="absolute bottom-20 left-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-50 animate-[float_3s_ease-in-out_infinite]">
//                 <span className="font-bold text-slate-700 text-md">
//                   {rating}
//                 </span>
//                 <Star className="text-yellow-400 fill-yellow-400" size={20} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM FLOATING FOOD MENU */}
//         <div className="mt-12 lg:-mt-24 relative z-20 bg-white/90 backdrop-blur-md rounded-[40px] p-8 shadow-2xl border border-white/50 grid grid-cols-1 md:grid-cols-7 gap-6 items-center">

//           {/* Badge */}
//           <div className="md:col-span-2 flex justify-center border-r border-slate-100 pr-4">
//             <div className="relative w-28 h-28 flex items-center justify-center">
//               <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
//                 <svg viewBox="0 0 100 100" className="w-full h-full">
//                   <path
//                     id="circlePath"
//                     d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
//                     fill="transparent"
//                   />
//                   <text className="text-[9px] font-bold uppercase tracking-[0.25em] fill-slate-400">
//                     <textPath xlinkHref="#circlePath">
//                       Award Winning Chef • Eat4Me •
//                     </textPath>
//                   </text>
//                 </svg>
//               </div>
//               <div className="bg-slate-800 p-4 rounded-full shadow-lg">
//                 <Award className="text-white" size={32} />
//               </div>
//             </div>
//           </div>

//           {/* Food Item */}
//           <div className="md:col-span-4 flex items-center gap-4">
//             <img
//               src={FOOD_ITEMS[foodIndex].img}
//               alt="dish"
//               className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-white ring-4 ring-orange-50"
//             />
//             <div>
//               <h4 className="font-bold text-slate-800">
//                 {FOOD_ITEMS[foodIndex].title}
//               </h4>
//               <p className="text-[11px] text-slate-500 leading-tight">
//                 {FOOD_ITEMS[foodIndex].desc}
//               </p>
//             </div>
//           </div>

//           {/* Controls */}
//           <div className="md:col-span-1 flex justify-center gap-2">
//             <button
//               onClick={() =>
//                 setFoodIndex((prev) =>
//                   prev === 0 ? FOOD_ITEMS.length - 1 : prev - 1
//                 )
//               }
//               className="p-2 rounded-full bg-slate-100 hover:bg-orange-100 text-slate-400 hover:text-orange-600"
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={() =>
//                 setFoodIndex((prev) => (prev + 1) % FOOD_ITEMS.length)
//               }
//               className="p-2 rounded-full bg-slate-100 hover:bg-orange-100 text-slate-400 hover:text-orange-600"
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// // import { useState, useEffect } from "react";
// // import {
// //   Star,
// //   Award,
// //   ChevronRight,
// //   ChevronLeft,
// //   User,
// // } from "lucide-react";

// // // --- Template Data ---
// // const CHEFS = [
// //   {
// //     id: 1,
// //     name: "Chef Julian",
// //     img: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=800",
// //     rating: "4.9/5",
// //   },
// //   {
// //     id: 2,
// //     name: "Chef Maria",
// //     img: "https://images.pexels.com/photos/3814444/pexels-photo-3814444.jpeg?auto=compress&cs=tinysrgb&w=800",
// //     rating: "4.8/5",
// //   },
// //   {
// //     id: 3,
// //     name: "Chef Marcus",
// //     img: "https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=800",
// //     rating: "5.0/5",
// //   },
// //   {
// //     id: 4,
// //     name: "Chef Elena",
// //     img: "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
// //     rating: "4.7/5",
// //   },
// //   {
// //     id: 5,
// //     name: "Chef David",
// //     img: "https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=800",
// //     rating: "4.9/5",
// //   },
// // ];

// // const FOOD_ITEMS = [
// //   {
// //     title: "Butter Chicken",
// //     desc: "A creamy, spiced Indian curry made with marinated grilled chicken.",
// //     img: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200",
// //   },
// //   {
// //     title: "Shawarma Wrap",
// //     desc: "Thin slices of marinated meat wrapped in pita bread with garlic sauce.",
// //     img: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=200",
// //   },
// //   {
// //     title: "Grilled Salmon",
// //     desc: "Fresh Atlantic salmon seasoned with herbs and lemon zest.",
// //     img: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=200",
// //   },
// //   {
// //     title: "Truffle Pasta",
// //     desc: "Handmade fettuccine tossed in a rich black truffle cream sauce.",
// //     img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=200",
// //   },
// //   {
// //     title: "Berry Parfait",
// //     desc: "Layered Greek yogurt with organic honey and seasonal forest berries.",
// //     img: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=200",
// //   },
// // ];

// // const Hero = () => {
// //   const [chefIndex, setChefIndex] = useState(0);
// //   const [foodIndex, setFoodIndex] = useState(0);

// //   // Auto-slide
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setChefIndex((prev) => (prev + 1) % CHEFS.length);
// //       setFoodIndex((prev) => (prev + 1) % (FOOD_ITEMS.length - 1));
// //     }, 5000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-6 md:p-12 lg:p-20 flex items-center justify-center overflow-hidden">
// //       <div className="max-w-6xl w-full relative">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //           {/* Left Content */}
// //           <div className="z-10 animate-in fade-in slide-in-from-left duration-700">
// //             <h1 className="text-5xl md:text-4xl font-bold leading-tight text-slate-700 mb-6">
// //               Deliciously Personal,
// //               <br />
// //               <span className="text-slate-400 font-medium">
// //                 Delightfully Yours
// //               </span>
// //             </h1>

// //             <p className="text-slate-500 text-sm max-w-md mb-5 leading-relaxed">
// //               I will prepare a personalized meal tailored exactly to your taste.
// //               All you need to do is contact me, and I’ll be happy to serve you
// //               right.
// //             </p>

// //             <div className="flex flex-wrap gap-4 mb-10">
// //               <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:scale-[1.02] active:scale-[0.97]">
// //                 Book a Cheff
// //               </button>

// //               <button className="bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 px-4 py-2 rounded-full font-bold transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.97]">
// //                 <User size={18} fill="currentColor" />
// //                 Chef Profile
// //               </button>
// //             </div>
// //           </div>

// //           {/* Right Content - Chef Slideshow */}
// //           <div className="relative flex justify-center lg:justify-end mt-10">
// //             <div className="relative w-80 h-[450px] md:w-86 md:h-[450px] bg-white rounded-t-full border-[12px] border-white shadow-2xl overflow-hidden">
// //               {CHEFS.map((chef, index) => (
// //                 <img
// //                   key={chef.id}
// //                   src={chef.img}
// //                   alt={chef.name}
// //                   className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out
// //                     ${
// //                       index === chefIndex
// //                         ? "opacity-100 scale-100 blur-0"
// //                         : "opacity-0 scale-105 blur-sm"
// //                     }`}
// //                 />
// //               ))}

// //               <div className="absolute top-10 -right-0 bg-white px-5 py-2 rounded-2xl shadow-md border border-slate-100 mr-4">
// //                 <span className="text-xs text-slate-400 font-bold uppercase">
// //                   Awarded
// //                 </span>
// //               </div>

// //               <div className="absolute bottom-20 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-50 ml-4 animate-[float_3s_ease-in-out_infinite]">
// //                 <span className="font-bold text-slate-700 text-md">
// //                   {CHEFS[chefIndex].rating}
// //                 </span>
// //                 <Star className="text-yellow-400 fill-yellow-400" size={20} />
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Floating Menu */}
// //         <div className="mt-12 lg:-mt-24 relative z-20 bg-white/90 backdrop-blur-md rounded-[40px] p-8 shadow-2xl border border-white/50 grid grid-cols-1 md:grid-cols-7 gap-6 items-center">
// //           {/* Circular Badge */}
// //           <div className="md:col-span-2 flex justify-center border-r border-slate-100 pr-4">
// //             <div className="relative w-28 h-28 flex items-center justify-center">
// //               <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
// //                 <svg viewBox="0 0 100 100" className="w-full h-full">
// //                   <path
// //                     id="circlePath"
// //                     d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
// //                     fill="transparent"
// //                   />
// //                   <text className="text-[9px] font-bold uppercase tracking-[0.25em] fill-slate-400">
// //                     <textPath xlinkHref="#circlePath">
// //                       Award Winning Chef • Eat4Me •
// //                     </textPath>
// //                   </text>
// //                 </svg>
// //               </div>
// //               <div className="bg-slate-800 p-4 rounded-full shadow-lg">
// //                 <Award className="text-white" size={32} />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Food Item 1 */}
// //           <div className="md:col-span-2 flex items-center gap-4 transition-all duration-500">
// //             <img
// //               src={FOOD_ITEMS[foodIndex].img}
// //               alt="dish"
// //               className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-white ring-4 ring-orange-50 transition-all duration-500 hover:scale-105"
// //             />
// //             <div className="flex-1">
// //               <h4 className="font-bold text-slate-800 truncate">
// //                 {FOOD_ITEMS[foodIndex].title}
// //               </h4>
// //               <p className="text-[11px] text-slate-500 leading-tight line-clamp-2">
// //                 {FOOD_ITEMS[foodIndex].desc}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Food Item 2 */}
// //           <div className="md:col-span-2 flex items-center gap-4 border-l border-slate-100 pl-4 transition-all duration-500">
// //             <img
// //               src={FOOD_ITEMS[(foodIndex + 1) % FOOD_ITEMS.length].img}
// //               alt="dish"
// //               className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-white ring-4 ring-orange-50 transition-all duration-500 hover:scale-105"
// //             />
// //             <div className="flex-1">
// //               <h4 className="font-bold text-slate-800 truncate">
// //                 {FOOD_ITEMS[(foodIndex + 1) % FOOD_ITEMS.length].title}
// //               </h4>
// //               <p className="text-[11px] text-slate-500 leading-tight line-clamp-2">
// //                 {FOOD_ITEMS[(foodIndex + 1) % FOOD_ITEMS.length].desc}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Controls */}
// //           <div className="md:col-span-1 flex justify-center gap-2">
// //             <button
// //               onClick={() =>
// //                 setFoodIndex((prev) =>
// //                   prev === 0 ? FOOD_ITEMS.length - 1 : prev - 1
// //                 )
// //               }
// //               className="p-2 rounded-full bg-slate-100 hover:bg-orange-100 text-slate-400 hover:text-orange-600 transition-colors"
// //             >
// //               <ChevronLeft size={20} />
// //             </button>
// //             <button
// //               onClick={() =>
// //                 setFoodIndex((prev) => (prev + 1) % FOOD_ITEMS.length)
// //               }
// //               className="p-2 rounded-full bg-slate-100 hover:bg-orange-100 text-slate-400 hover:text-orange-600 transition-colors"
// //             >
// //               <ChevronRight size={20} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;




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
            Experience <br />
            Ghanaian{" "}
            <span className="text-orange-500 border-b-4 border-orange-500 inline-block">
              Fine
            </span>{" "}
            <br />
            <span className="text-orange-500 border-b-4 border-orange-500 inline-block">
              Dining
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Discover premium culinary experiences, book elite chefs, and plan
            unforgettable private dining events with Ghana’s finest chefs.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-2xl transition duration-300 shadow-md">
              Explore Chefs →
            </button>

            <button className="bg-[#1a0f07] hover:bg-black text-white font-semibold px-8 py-4 rounded-2xl transition duration-300 shadow-md">
              Book a Chef
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
              Book Your Private Chef Today
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
