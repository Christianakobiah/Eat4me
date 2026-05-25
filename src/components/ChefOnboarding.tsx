
import { motion } from "framer-motion";
import { useState } from "react";

import Sample from "../assets/Videos/sample.mp4";

import {
  Download,
  UserPlus,
  FileCheck,
  Search,
  ShieldCheck,
  LayoutDashboard,
  Rocket,
  PlayCircle,
  XCircle,
} from "lucide-react";

import logo from "../assets/Images/logo.jpg";

const playStoreLink =
  "https://play.google.com/store/apps/details?id=org.pywe.eat4me";

const appStoreLink = "https://apps.apple.com/us/app/eat4me/id6766040974";

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
    icon: PlayCircle,
    title: "Short Introduction",

    desc1:
      "Share a 30 to 60 seconds video introducing yourself and your food to your future customers. It's simpler than it sounds.",

    desc2:
      "Record a short and clear introduction video showing your personality, cooking style, and the meals you prepare so customers can confidently connect with your brand.",

    hasVideo: true,
  },

  {
    icon: Search,
    title: "Book Assessment",

    desc1: "Schedule a kitchen inspection at your convenience with our team.",

    desc2:
      "This assessment checks that the kitchen meets Eat4Me's platform standards at the time of inspection.",
  },

  {
    icon: ShieldCheck,
    title: "Get Approved",

    desc1:
      "Our team reviews your submitted profile and conducts a platform assessment. Approval confirms you meet Eat4Me's listing requirements — chefs are responsible for the accuracy of their own information.",

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
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="chefOnboarding" className="py-24 px-6 bg-[#F4EFE9]">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Become a Chef on <span className="text-orange-600">eat4Me</span>
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            Follow these simple steps to join the platform and start earning.
          </p>
        </div>

        {/* STEPS */}
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
                <div className="bg-orange-100 p-4 rounded-xl shrink-0">
                  <Icon className="text-orange-600 w-7 h-7" />
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <p className="text-sm text-orange-500 font-bold mb-1">
                    Step {index + 1}
                  </p>

                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>

                  {/* LOGO */}
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

                  {/* VIDEO  */}
                  {step.hasVideo && (
                    <div className="mt-4">
                      <button
                        onClick={() => setShowVideo(!showVideo)}
                        className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition"
                      >
                        {showVideo ? (
                          <>
                            <XCircle size={18} />
                            Hide Sample Video
                          </>
                        ) : (
                          <>
                            <PlayCircle size={18} />
                            Click to Watch Sample
                          </>
                        )}
                      </button>

                      {showVideo && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 overflow-hidden rounded-2xl border border-orange-100 shadow-lg bg-black"
                        >
                          <video controls className="w-full h-auto">
                            <source src={Sample} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
