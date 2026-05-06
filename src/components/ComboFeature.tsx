

import { motion, AnimatePresence } from "framer-motion";
import { Utensils, Link2 } from "lucide-react";
import { useState } from "react";

export default function ComboFeature() {
  const [active, setActive] = useState<number | null>(0);

  const steps = [
    {
      icon: Utensils,
      title: "Submit Your Combo Request",
      desc1:
        "Fill out the form with your business name, contact details, and the meal or product you want to promote.",
      desc2:
        "Make sure your details are accurate so we can process your request quickly.",
    },
    {
      icon: Link2,
      title: "Choose a Perfect Pair",
      desc1:
        "Select a complementary product or meal from another vendor to create a combo offer.",
      desc2:
        "Example: Pair Jollof Rice with Sobolo or Grilled Chicken with Fresh Juice.",
    },
  ];

  return (
    <section id="combo" className="py-24 bg-orange-50 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* FORM SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-24"
        >
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 ring-8 ring-orange-100/20">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeiRS9TBI9Ocf5w7M9ximstBrrNxGEOYNFK_LWF546K_iyWrw/viewform?embedded=true"
              className="w-full h-[600px]"
              title="Combo Request Form"
            />
          </div>
        </motion.div>

        {/* CONTENT SIDE */}
        <div className="space-y-10">
          <header>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a0f07] leading-tight">
              The Eat4Me <span className="text-orange-600">Combo</span> Feature
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-xl">
              Increase your revenue by pairing your meals with drinks or
              products from other vendors.
            </p>
          </header>

          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isOpen = active === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActive(isOpen ? null : index)}
                  className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    isOpen
                      ? "bg-white shadow-lg border-orange-200"
                      : "bg-white/60 border-orange-100 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="bg-orange-600 text-white font-bold text-xs w-8 h-8 flex items-center justify-center rounded-full shadow-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div
                      className={`p-3 rounded-xl transition-colors ${isOpen ? "bg-orange-600 text-white" : "bg-orange-100 text-orange-600 group-hover:bg-orange-200"}`}
                    >
                      <Icon size={24} />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-[#1a0f07]">
                        {step.title}
                      </h4>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 space-y-2">
                              <p className="text-gray-600 leading-relaxed">
                                {step.desc1}
                              </p>
                              <p className="text-orange-600/80 text-sm font-medium italic">
                                {step.desc2}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiRS9TBI9Ocf5w7M9ximstBrrNxGEOYNFK_LWF546K_iyWrw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all w-full md:w-auto"
          >
            Open Full Form
          </motion.a>
        </div>
      </div>
    </section>
  );
}
