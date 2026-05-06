// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import gourmetImg from "../assets/Images/delivery.jpeg";
// import mealPlanImg from "../assets/Images/planing.png";
// import privateChefImg from "../assets/Images/private.png";
// import cateringImg from "../assets/Images/catering.png";
// import SignatureExperience from "../assets/Images/signature.png";

// interface Service {
//   title: string;
//   description: string;
//   image: string;
// }

// const services: Service[] = [
//    {
//     title: "Meal Planning",
//     description:
//       "Customized weekly and monthly meal plans designed by expert chefs.",
//     image: mealPlanImg,
//   },
//   {
//     title: "Event Catering",
//     description: "Professional service and menus for events of all sizes.",
//     image: cateringImg,
//   },
//   {
//     title: "Gourmet Delivery",
//     description: "Restaurant-grade meals delivered fresh to your doorstep.",
//     image: gourmetImg,
//   },
//   {
//     title: "Private Chefs",
//     description: "Personalized in-home dining tailored to your dietary needs.",
//     image: privateChefImg,
//   },

//   {
//     title: "Signature Experiences",
//     description: "Enjoy authentic Ghanaian food experiences hosted by chefs.",
//     image: SignatureExperience,
//   },
// ];

// const ServiceGrid: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     if (index < services.length - 4) {
//       setIndex(index + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     }
//   };

//   return (
//     <section id="services" className="bg-white py-20 px-6 lg:px-20 overflow-hidden">
//       <div className="max-w-7xl mx-auto relative">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-12">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-bold text-[#1a0f07]">
//               Our Culinary Services
//             </h2>
//             <p className="text-gray-600 mt-3 text-lg">
//               Tailored dining experiences for every occasion and palate.
//             </p>
//           </div>

//           {/* Arrows */}
//           <div className="flex gap-3">
//             <button
//               onClick={prevSlide}
//               className="w-10 h-10 rounded-full border border-orange-700 flex items-center justify-center hover:bg-gray-100 transition bg-[#FF6900]"
//             >
//               <ChevronLeft size={20} className="text-white hover:text-black" />
//             </button>

//             <button
//               onClick={nextSlide}
//               className="w-10 h-10 rounded-full border border-orange-700 flex items-center justify-center hover:bg-gray-100  transition bg-[#FF6900]"
//             >
//               <ChevronRight size={20} className="text-white hover:text-black" />
//             </button>
//           </div>
//         </div>

//         {/* Slider */}
//         <div className="overflow-hidden">
//           <motion.div
//             animate={{ x: `-${index * 25}%` }}
//             transition={{ type: "spring", stiffness: 100, damping: 20 }}
//             className="flex"
//           >
//             {services.map((service, i) => (
//               <div key={i} className="min-w-[25%] px-3">
//                 <motion.div
//                   whileHover={{ y: -10 }}
//                   className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
//                 >
//                   <div className="overflow-hidden">
//                     <img
//                       src={service.image}
//                       alt={service.title}
//                       className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
//                     />
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold text-[#1a0f07] mb-2">
//                       {service.title}
//                     </h3>
//                     <p className="text-[#95756A] text-sm leading-relaxed">
//                       {service.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceGrid;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gourmetImg from "../assets/Images/delivery.jpeg";
import mealPlanImg from "../assets/Images/planing.png";
import privateChefImg from "../assets/Images/private.png";
import cateringImg from "../assets/Images/catering.png";
import SignatureExperience from "../assets/Images/signature.png";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Meal Planning",
    description:
      "Customized weekly and monthly meal plans designed by expert chefs.",
    image: mealPlanImg,
  },
  {
    title: "Event Catering",
    description: "Professional service and menus for events of all sizes.",
    image: cateringImg,
  },
  {
    title: "Gourmet Delivery",
    description: "Restaurant-grade meals delivered fresh to your doorstep.",
    image: gourmetImg,
  },
  {
    title: "Private Chefs",
    description: "Personalized in-home dining tailored to your dietary needs.",
    image: privateChefImg,
  },
  {
    title: "Signature Experiences",
    description: "Enjoy authentic Ghanaian food experiences hosted by chefs.",
    image: SignatureExperience,
  },
];

const ServiceGrid: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  // ✅ Handle responsiveness properly
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else if (window.innerWidth < 1280) setCardsPerView(3);
      else setCardsPerView(4);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = services.length - cardsPerView;

  const nextSlide = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section id="services" className="bg-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a0f07]">
              Our Culinary Services
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Tailored dining experiences for every occasion and palate.
            </p>
          </div>

          {/* Arrows (desktop only) */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FF6900]"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#FF6900]"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* ✅ MOBILE = GRID (shows ALL items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ DESKTOP = SLIDER */}
        <div className="hidden md:block overflow-hidden">
          <motion.div
            animate={{ x: `-${index * (100 / cardsPerView)}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex"
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="px-3 min-w-[50%] lg:min-w-[33.33%] xl:min-w-[25%]"
              >
                <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
