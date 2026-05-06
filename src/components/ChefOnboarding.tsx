// import { motion } from 'framer-motion';
// import { Download, UserPlus, FileCheck, Search, ShieldCheck, LayoutDashboard, Rocket } from 'lucide-react';

// const steps = [
//   { icon: <Download />, text: "Download Eat4Me app" },
//   { icon: <UserPlus />, text: "Select Sign Up as Vendor" },
//   { icon: <FileCheck />, text: "Provide the necessary details" },
//   { icon: <Search />, text: "Book appointment for kitchen assessment" },
//   { icon: <ShieldCheck />, text: "Await platform review & approval" },
//   { icon: <LayoutDashboard />, text: "Access chef dashboard" },
//   { icon: <Rocket />, text: "Go live and start receiving orders" },
// ];

// const ChefOnboarding = () => {
//   return (
//     <section className="py-24 bg-white px-6">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-serif mb-4 text-brand-black">Grow Your Business</h2>
//           <p className="text-gray-500">Chef Onboarding Checklist — Follow these steps to join the platform.</p>
//         </div>

//         <div className="space-y-4">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="flex items-center gap-6 p-6 rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:bg-orange-50/30 transition-all group"
//             >
//               <div className="w-12 h-12 rounded-full bg-brand-gray flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">
//                 {step.icon}
//               </div>
//               <span className="text-lg font-medium text-gray-700">{step.text}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default ChefOnboarding

// import { motion } from "framer-motion";
// import { Download, UserPlus, FileCheck, Search, ShieldCheck, LayoutDashboard, Rocket } from "lucide-react";
// import logo from "../assets/Images/logo.jpg";

// // Each step now supports images
// const steps = [
//   {
//     icon: Download,
//     title: "Download the App",
//     description: "Install the Eat4Me app from Play Store or App Store.",
//     image: logo,
//   },
//   {
//     icon: UserPlus,
//     title: "Sign Up as Vendor",
//     description: "Choose vendor option and create your account.",
//     image: "/onboarding/step2.png",
//   },
//   {
//     icon: FileCheck,
//     title: "Fill Your Details",
//     description: "Provide accurate personal and business information.",
//     image: "/onboarding/step3.png",
//   },
//   {
//     icon: Search,
//     title: "Book Assessment",
//     description: "Schedule a kitchen inspection appointment.",
//     image: "/onboarding/step4.png",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Get Approved",
//     description: "Our team reviews and approves your profile.",
//     image: "/onboarding/step5.png",
//   },
//   {
//     icon: LayoutDashboard,
//     title: "Access Dashboard",
//     description: "Manage orders, menus and customers.",
//     image: "/onboarding/step6.png",
//   },
//   {
//     icon: Rocket,
//     title: "Go Live",
//     description: "Start receiving orders and grow your business.",
//     image: "/onboarding/step7.png",
//   },
// ];

// export default function ChefOnboarding() {
//   return (
//     <section className="py-24 px-6 bg-gradient-to-b from-orange-50 to-white">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
//             Become a Chef on <span className="text-orange-600">Eat4Me</span>
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             Follow these simple steps to join the platform and start earning.
//           </p>
//         </div>

//         {/* Timeline Layout */}
//         <div className="relative">
//           {/* Vertical line */}
//           <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-orange-100 -translate-x-1/2" />

//           <div className="space-y-20">
//             {steps.map((step, index) => {
//               const Icon = step.icon;
//               const isLeft = index % 2 === 0;

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className={`flex flex-col md:flex-row items-center gap-10 ${
//                     isLeft ? "md:flex-row" : "md:flex-row-reverse"
//                   }`}
//                 >
//                   {/* Image */}
//                   <div className="w-full md:w-1/2">
//                     <img
//                       src={step.image}
//                       alt={step.title}
//                       className="rounded-3xl shadow-lg w-full h-[300px] object-cover"
//                     />
//                   </div>

//                   {/* Content */}
//                   <div className="w-full md:w-1/2">
//                     <div className="bg-white rounded-3xl p-8 shadow hover:shadow-lg transition">
//                       <div className="flex items-center gap-4 mb-4">
//                         <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
//                           <Icon />
//                         </div>
//                         <span className="text-sm font-bold text-orange-500">
//                           Step {index + 1}
//                         </span>
//                       </div>

//                       <h3 className="text-2xl font-bold mb-2">
//                         {step.title}
//                       </h3>

//                       <p className="text-gray-600">
//                         {step.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import {
  Download,
  UserPlus,
  FileCheck,
  Search,
  ShieldCheck,
  LayoutDashboard,
  Rocket,
} from "lucide-react";
import logo from "../assets/Images/logo.jpg";

const playStoreLink = "#";
const appStoreLink = "#";

const getStoreLink = () => {
  if (typeof navigator !== "undefined") {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/iPad|iPhone|iPod/.test(userAgent)) return appStoreLink;
    if (/android/i.test(userAgent)) return playStoreLink;
  }
  return playStoreLink;
};

const steps = [
  {
    icon: Download,
    title: "Download the App",
    desc1:
      "Get the Eat4Me app from Play Store or App Store to begin your journey.",
    desc2:
      "Make sure you install the official app to access all vendor features.",
  },
  {
    icon: UserPlus,
    title: "Sign Up as Vendor",
    desc1:
      "Create your vendor account by selecting the vendor option during sign-up.",
    desc2: "Use an active phone number and email for smooth communication.",
  },
  {
    icon: FileCheck,
    title: "Fill Your Details",
    desc1:
      "Provide accurate personal and business information for verification.",
    desc2:
      "This helps us build trust and improve your visibility on the platform.",
  },
  {
    icon: Search,
    title: "Book Assessment",
    desc1: "Schedule a kitchen inspection at your convenience with our team.",
    desc2: "This ensures quality and safety standards are met.",
  },
  {
    icon: ShieldCheck,
    title: "Get Approved",
    desc1: "Our team reviews your profile and verifies your information.",
    desc2: "Once approved, you’re ready to start selling.",
  },
  {
    icon: LayoutDashboard,
    title: "Access Dashboard",
    desc1: "Manage your menu, track orders, and monitor your performance.",
    desc2: "Everything you need to run your business is in one place.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    desc1: "Start receiving orders and grow your customer base instantly.",
    desc2: "Deliver great food and build your brand with Eat4Me.",
  },
];

export default function ChefOnboarding() {
  return (
    <section id="chefOnboarding" className="py-24 px-6 bg-[#F4EFE9]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Become a Chef on <span className="text-orange-600">Eat4Me</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Follow these simple steps to join the platform and start earning.
          </p>
        </div>

        {/* CLEAN STACKED STEPS */}
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isFirstStep = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition flex gap-5 items-start"
              >
                {/* ICON */}
                <div className="bg-orange-100 p-4 rounded-xl">
                  <Icon className="text-orange-600 w-7 h-7" />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-sm text-orange-500 font-bold mb-1">
                    Step {index + 1}
                  </p>

                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>

                  {/* LOGO ONLY FOR STEP 1 */}
                  {isFirstStep && (
                    <a
                      href={getStoreLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={logo}
                        alt="Eat4Me App"
                        className="w-24 h-24 object-contain my-3 rounded-xl shadow"
                      />
                    </a>
                  )}

                  <p className="text-gray-600">{step.desc1}</p>
                  <p className="text-gray-500 text-sm mt-1">{step.desc2}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
