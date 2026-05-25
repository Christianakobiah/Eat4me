
import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  UtensilsCrossed,
  ChefHat,
  CalendarRange,
  Truck,
  Sparkles,
} from "lucide-react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import gourmetImg from "../assets/Images/delivery.jpeg";
import mealPlanImg from "../assets/Images/planing.png";
import privateChefImg from "../assets/Images/private.png";
import cateringImg from "../assets/Images/catering.png";
import SignatureExperience from "../assets/Images/signature.png";

interface Service {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Meal Planning",
    description:
      "Customized weekly and monthly meal plans designed by expert chefs.",
    longDescription:
      "Our chefs create healthy and personalized meal plans tailored to your lifestyle, dietary needs, and taste preferences.",
    image: mealPlanImg,
    icon: <CalendarRange size={28} />,
  },
  {
    title: "Event Catering",
    description:
      "Professional catering experiences for weddings, birthdays, and corporate events.",
    longDescription:
      "From intimate gatherings to large celebrations, Eat4Me delivers unforgettable catering experiences with premium service.",
    image: cateringImg,
    icon: <UtensilsCrossed size={28} />,
  },
  {
    title: "Gourmet Delivery",
    description:
      "Chef-prepared meals delivered fresh and beautifully packaged.",
    longDescription:
      "Enjoy restaurant-quality Ghanaian meals delivered directly to your doorstep with freshness and flavor guaranteed.",
    image: gourmetImg,
    icon: <Truck size={28} />,
  },
  {
    title: "Private Chefs",
    description:
      "Luxury in-home dining experiences designed around your preferences.",
    longDescription:
      "Book experienced private chefs for exclusive dining experiences, family dinners, and personalized celebrations.",
    image: privateChefImg,
    icon: <ChefHat size={28} />,
  },
  {
    title: "Signature Experiences",
    description:
      "Authentic Ghanaian culinary experiences hosted by professional chefs.",
    longDescription:
      "Experience culture, storytelling, and unforgettable flavors through curated premium Ghanaian food experiences.",
    image: SignatureExperience,
    icon: <Sparkles size={28} />,
  },
];

const ServiceGrid: React.FC = () => {
  return (
    <main className="bg-[#fffaf5] overflow-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-24 px-6">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-orange-200 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-orange-300 rounded-full blur-[140px] opacity-20" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-5 py-2 rounded-full font-semibold text-sm mb-8">
              <Sparkles size={16} />
              Premium Culinary Experiences
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-[#1a0f07] mb-8">
              Discover the Best of{" "}
              <span className="text-orange-600">Eat4Me Services</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              From private chefs and gourmet delivery to unforgettable catering
              experiences, Eat4Me connects you to premium culinary services
              tailored for every moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-28">
          {services.map((service, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                  reverse ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* IMAGE */}
                <div className={reverse ? "lg:col-start-2" : ""}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-orange-400 rounded-[2rem] blur-3xl opacity-10 group-hover:opacity-20 transition-all duration-500" />

                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className={`space-y-8 ${reverse ? "lg:col-start-1" : ""}`}>
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>

                  <div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a0f07] leading-tight mb-5">
                      {service.title}
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <p className="text-gray-500 leading-relaxed text-base">
                      {service.longDescription}
                    </p>
                  </div>

                  {/* FEATURES */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-2xl border border-orange-100 shadow-sm">
                      <h4 className="font-bold text-[#1a0f07] mb-2">
                        Premium Quality
                      </h4>

                      <p className="text-sm text-gray-600">
                        Carefully curated experiences delivered by experienced
                        chefs and professionals.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-orange-100 shadow-sm">
                      <h4 className="font-bold text-[#1a0f07] mb-2">
                        Trusted Service
                      </h4>

                      <p className="text-sm text-gray-600">
                        Reliable, secure, and customer-focused experiences every
                        single time.
                      </p>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200 transition-all"
                  >
                    Explore Service
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#ff6b00] to-[#ff8c3a] px-8 md:px-16 py-20 text-white text-center"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                Ready to Experience Premium Dining?
              </h2>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
                Discover authentic Ghanaian culinary excellence with Eat4Me.
                Whether you need catering, meal plans, or private chefs, we are
                ready to serve you.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl"
              >
                Book a Service Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceGrid;
