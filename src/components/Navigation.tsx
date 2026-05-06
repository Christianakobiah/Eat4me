// import React, { useState } from "react";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import {
//   Instagram,
//   Facebook,
//   Smartphone,
//   UserPlus,
//   Menu,
//   X,
// } from "lucide-react";
// import logo from "../assets//Images/logo.jpg";

// const Navigation: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { scrollY } = useScroll();

//   // Detect scroll to add shadow or hide top bar if desired
//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (latest > 50) setIsScrolled(true);
//     else setIsScrolled(false);
//   });

//   return (
//     <header className="fixed top-0 left-0 w-full z-[100]">
//       {/* 1. TOP TIER: Fixed Black Utility Bar */}
//       <div className="bg-brand-black text-white/90 py-2.5 px-6 md:px-12 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest border-b border-white/10">
//         <div className="flex gap-6 items-center">
//           <a
//             href="#"
//             className="flex items-center gap-2 hover:text-brand-orange transition-colors"
//           >
//             <Smartphone size={14} className="text-brand-orange" /> Get the App
//           </a>
//           <a
//             href="#"
//             className="hidden sm:flex items-center gap-2 hover:text-brand-orange transition-colors"
//           >
//             <UserPlus size={14} className="text-brand-orange" /> Become a Vendor
//           </a>
//         </div>
//         <div className="flex gap-4 items-center">
//           <span className="hidden md:inline text-white/50">Follow Us:</span>
//           <Instagram
//             size={14}
//             className="hover:text-brand-orange cursor-pointer transition-colors"
//           />
//           <Facebook
//             size={14}
//             className="hover:text-brand-orange cursor-pointer transition-colors"
//           />
//         </div>
//       </div>

//       {/* 2. MAIN TIER: White Branding Bar */}
//       <nav
//         className={`bg-white/95 backdrop-blur-md px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300 ${isScrolled ? "shadow-lg py-3" : "shadow-sm"}`}
//       >
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src={logo} alt="Eat4Me Logo" className="w-36 h-auto" />
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden lg:flex gap-10 items-center font-bold text-[13px] uppercase tracking-tighter text-brand-black">
//           {["Services", "Featured Chefs", "Combo", "Support"].map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase().replace(" ", "-")}`}
//               className="hover:text-brand-orange transition-colors relative group"
//             >
//               {item}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:width-full" />
//             </a>
//           ))}
//         </div>

//         {/* Desktop CTA & Mobile Toggle */}
//         <div className="flex items-center gap-4">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="hidden sm:block bg-brand-gradient text-white px-7 py-2.5 rounded-full font-bold text-sm shadow-md shadow-orange-200"
//             onClick={() => window.open("https://vendor.eat4me.org/", "_blank")}
//           >
//             Register as a Chef
//           </motion.button>

//           <button
//             className="lg:hidden text-brand-black p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </nav>

//       {/* 3. MOBILE MENU OVERLAY */}
//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="fixed inset-0 top-[110px] bg-white z-[90] p-8 lg:hidden"
//         >
//           <div className="flex flex-col gap-8 text-2xl font-serif">
//             {["Services", "Featured Chefs", "Combo", "Support"].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase().replace(" ", "-")}`}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="border-b border-gray-100 pb-4"
//               >
//                 {item}
//               </a>
//             ))}
//             <button className="bg-brand-gradient text-white w-full py-5 rounded-2xl font-bold">
//               Order Food Now
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </header>
//   );
// };
// export default Navigation;

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Instagram,
  Facebook,
  Smartphone,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets//Images/logo.jpg";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

 
  const navItems = [
    "Services",
    "Featured Chefs",
    "Combo",
    "About Us",
    "Support",
    "Report Issue",
  ];

  const getLink = (item: string) => {
    if (item === "About Us") return "#about-us";
    return `#${item.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* TOP BAR */}
      <div className="bg-brand-black text-white/90 py-2.5 px-6 md:px-12 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest border-b border-white/10">
        <div className="flex gap-6 items-center">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-brand-orange transition-colors"
          >
            <Smartphone size={14} className="text-brand-orange" />
            Get the App
          </a>

          <a
            href="#"
            className="hidden sm:flex items-center gap-2 hover:text-brand-orange transition-colors"
          >
            <UserPlus size={14} className="text-brand-orange" />
            Become a Vendor
          </a>
        </div>

        <div className="flex gap-4 items-center">
          <span className="hidden md:inline text-white/50">Follow Us:</span>
          <Instagram
            size={14}
            className="hover:text-brand-orange cursor-pointer"
          />
          <Facebook
            size={14}
            className="hover:text-brand-orange cursor-pointer"
          />
        </div>
      </div>

      {/* MAIN NAV */}
      <nav
        className={`bg-white/95 backdrop-blur-md px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "shadow-lg py-3" : "shadow-sm"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Eat4Me Logo" className="w-36 h-auto" />
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-10 items-center font-bold text-[13px] uppercase tracking-tighter text-brand-black">
          {navItems.map((item) => (
            <a
              key={item}
              href={getLink(item)}
              className="hover:text-brand-orange transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA + MOBILE MENU */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-brand-gradient text-white px-7 py-2.5 rounded-full font-bold text-sm shadow-md shadow-orange-200"
            onClick={() => window.open("https://vendor.eat4me.org/", "_blank")}
          >
            Register as a Chef
          </motion.button>

          <button
            className="lg:hidden text-brand-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 top-[110px] bg-white z-[90] p-8 lg:hidden"
        >
          <div className="flex flex-col gap-8 text-2xl font-serif">
            {navItems.map((item) => (
              <a
                key={item}
                href={getLink(item)}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-gray-100 pb-4"
              >
                {item}
              </a>
            ))}

            <button className="bg-brand-gradient text-white w-full py-5 rounded-2xl font-bold">
              Order Food Now
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;
