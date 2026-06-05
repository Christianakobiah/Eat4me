import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Link2, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ComboFeature = () => {
  const [active, setActive] = useState<number | null>(0);

  const steps = [
    {
      icon: Utensils,
      title: "Submit Your Combo Request",
      desc1:
        "Fill out the form with your business name, contact details, and the meal or product you want to promote.",
      desc2:
        "Provide accurate information so our team can review and process your request quickly without delays.",
    },
    {
      icon: Link2,
      title: "Choose a Perfect Pair",
      desc1:
        "Select a complementary product or meal from another vendor to create a combo offer customers will love.",
      desc2:
        "Example: Pair Jollof Rice with Sobolo or Grilled Chicken with Fresh Juice for a premium experience.",
    },
    {
      icon: Sparkles,
      title: "Get Featured on Eat4Me",
      desc1:
        "After approval, your combo will appear on the platform for customers to discover and order easily.",
      desc2:
        "This helps increase visibility, engagement, and overall sales for both vendors involved.",
    },
  ];

  return (
    <>
      <div>
        {" "}
        <Navigation />
      </div>

      <main className="bg-[#fffaf5] text-[#1a0f07] overflow-hidden">
        {/* HERO */}
        <section className="pt-40 pb-20 px-6 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200 rounded-full blur-[120px] opacity-30" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-[140px] opacity-20" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Sparkles size={16} />
                  Grow Faster with Eat4Me Combos
                </span>

                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                  The Eat4Me{" "}
                  <span className="text-orange-600">Combo Feature</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Increase your sales by pairing your meals, drinks, or products
                  with other vendors on Eat4Me. Create irresistible combo offers
                  customers will love.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isOpen = active === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    onClick={() => setActive(isOpen ? null : index)}
                    className={`cursor-pointer rounded-[2rem] p-8 border transition-all duration-300 ${
                      isOpen
                        ? "bg-white border-orange-200 shadow-2xl shadow-orange-100"
                        : "bg-white/70 border-orange-100 hover:bg-white hover:shadow-xl"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                        <Icon size={30} />
                      </div>

                      <span className="text-5xl font-black text-orange-100">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                              {step.desc1}
                            </p>

                            <p className="text-gray-500 leading-relaxed">
                              {step.desc2}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-6 flex items-center gap-2 text-orange-600 font-semibold">
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-5">
                Submit Your Combo Request
              </h2>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete the form below to request a combo partnership on
                Eat4Me. All questions are fully visible for a smoother and
                easier experience without unnecessary scrolling inside the form.
              </p>
            </motion.div>

            {/* GOOGLE FORM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-orange-100 shadow-2xl shadow-orange-100"
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeiRS9TBI9Ocf5w7M9ximstBrrNxGEOYNFK_LWF546K_iyWrw/viewform?embedded=true"
                width="100%"
                height="2400"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Eat4Me Combo Form"
                className="w-full"
              >
                Loading…
              </iframe>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ComboFeature;
