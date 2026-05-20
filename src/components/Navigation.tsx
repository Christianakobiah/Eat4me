// import React, { useState } from "react";
// import { Link } from "react-router";
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

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     setIsScrolled(latest > 50);
//   });

//   const navItems = [
//     "Services",
//     "Featured Chefs",
//     "Combo",
//     "About Us",
//     "Support",
//     "Report Issue",
//   ];

//   const getLink = (item: string) => {
//     if (item === "About Us") return "#about-us";
//     return `#${item.toLowerCase().replace(" ", "-")}`;
//   };

//   //FUNCTION FOR THE APP DOWNLOADS
//   const iosLink = "https://apps.apple.com/us/app/eat4me/id6766040974";

//   const androidLink =
//     "https://play.google.com/store/apps/details?id=org.pywe.eat4me";

//   const getAppLink = () => {
//     const userAgent =
//       navigator.userAgent || navigator.vendor || (window as any).opera;

//     // Apple devices
//     if (/iPad|iPhone|iPod/.test(userAgent)) {
//       return iosLink;
//     }

//     // Android or Windows
//     if (/android/i.test(userAgent) || /Windows/i.test(userAgent)) {
//       return androidLink;
//     }

//     // Default fallback
//     return androidLink;
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-[100]">
//       {/* TOP BAR */}
//       <div className="bg-brand-black text-white/90 py-2.5 px-6 md:px-12 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest border-b border-white/10">
//         <div className="flex gap-6 items-center">
//           <a
//             href={getAppLink()}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 hover:text-brand-orange transition-colors"
//           >
//             <Smartphone size={14} className="text-brand-orange" />
//             Get the App
//           </a>

//           <a
//             href="#"
//             className="hidden sm:flex items-center gap-2 hover:text-brand-orange transition-colors"
//           >
//             <UserPlus size={14} className="text-brand-orange" />
//             Become a Cook
//           </a>
//         </div>

//         <div className="flex gap-4 items-center">
//           <span className="hidden md:inline text-white/50">Follow Us:</span>
//           <Instagram
//             size={14}
//             className="hover:text-brand-orange cursor-pointer"
//           />
//           <Facebook
//             size={14}
//             className="hover:text-brand-orange cursor-pointer"
//           />
//         </div>
//       </div>

//       {/* MAIN NAV */}
//       <nav
//         className={`bg-white/95 backdrop-blur-md px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300 ${
//           isScrolled ? "shadow-lg py-3" : "shadow-sm"
//         }`}
//       >
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src={logo} alt="Eat4Me Logo" className="w-36 h-auto" />
//         </div>

//         {/* DESKTOP NAV */}
//         <div className="hidden lg:flex gap-10 items-center font-bold text-[13px] uppercase tracking-tighter text-brand-black">
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={getLink(item)}
//               className="hover:text-brand-orange transition-colors relative group"
//             >
//               {item}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
//             </a>
//           ))}
//         </div>

//         {/* CTA + MOBILE MENU */}
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

//       {/* MOBILE MENU */}
//       {isMobileMenuOpen && (
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="fixed inset-0 top-[110px] bg-white z-[90] p-8 lg:hidden"
//         >
//           <div className="flex flex-col gap-8 text-2xl font-serif">
//             {navItems.map((item) => (
//               <a
//                 key={item}
//                 href={getLink(item)}
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
import { Link, useLocation } from "react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Instagram,
  Facebook,
  Smartphone,
  UserPlus,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/Images/logo.jpg";

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // APP LINKS
  const iosLink = "https://apps.apple.com/us/app/eat4me/id6766040974";

  const androidLink =
    "https://play.google.com/store/apps/details?id=org.pywe.eat4me";

  const getAppLink = () => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    // iOS
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return iosLink;
    }

    // Android / Windows
    if (/android/i.test(userAgent) || /Windows/i.test(userAgent)) {
      return androidLink;
    }

    return androidLink;
  };

  // NAV ITEMS
  const navItems = [
    {
      label: "Services",
      href: "/servicegrid",
      type: "route",
    },
    {
      label: "Featured Chefs",
      href: "/#featured-chefs",
      type: "anchor",
    },
    {
      label: "Combo",
      href: "/combofeature",
      type: "route",
    },
    {
      label: "About Us",
      href: "/about",
      type: "route",
    },
    {
      label: "Support",
      href: "/#support",
      type: "anchor",
    },
    {
      label: "Report Issue",
      href: "/#report-issue",
      type: "anchor",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      {/* TOP BAR */}
      <div className="bg-brand-black text-white/90 py-2.5 px-6 md:px-12 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest border-b border-white/10">
        <div className="flex gap-6 items-center">
          {/* APP LINK */}
          <a
            href={getAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-brand-orange transition-colors"
          >
            <Smartphone size={14} className="text-brand-orange" />
            Get the App
          </a>

          {/* CHEF REGISTRATION */}
          <a
            href="https://vendor.eat4me.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 hover:text-brand-orange transition-colors"
          >
            <UserPlus size={14} className="text-brand-orange" />
            Become a Cook
          </a>
        </div>

        {/* SOCIALS */}
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
        className={`bg-white/95 backdrop-blur-md px-6 md:px-12 transition-all duration-300 flex justify-between items-center ${
          isScrolled ? "py-3 shadow-lg" : "py-4 shadow-sm"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Eat4Me Logo" className="w-32 md:w-36 h-auto" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-10 items-center font-bold text-[13px] uppercase tracking-tighter text-brand-black">
          {navItems.map((item) =>
            item.type === "route" ? (
              <Link
                key={item.label}
                to={item.href}
                className={`hover:text-brand-orange transition-colors relative group ${
                  location.pathname === item.href ? "text-brand-orange" : ""
                }`}
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-brand-orange transition-colors relative group"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-full" />
              </a>
            ),
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block bg-brand-gradient text-white px-7 py-2.5 rounded-full font-bold text-sm shadow-md shadow-orange-200"
            onClick={() => window.open("https://vendor.eat4me.org/", "_blank")}
          >
            Register as a Chef
          </motion.button>

          {/* MOBILE MENU BUTTON */}
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
          className="fixed inset-0 top-[110px] bg-white z-[90] p-8 lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col gap-8 text-2xl font-serif">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-gray-100 pb-4"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-gray-100 pb-4"
                >
                  {item.label}
                </a>
              ),
            )}

            <button
              onClick={() =>
                window.open("https://vendor.eat4me.org/", "_blank")
              }
              className="bg-brand-gradient text-white w-full py-5 rounded-2xl font-bold"
            >
              Register as a Chef
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;
