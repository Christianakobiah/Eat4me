import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const AboutUs = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <>
    <div className="mb-30"><Navigation/></div>
     
    <section
      id="about-us"
      className="min-h-screen bg-gradient-to-br from-[#fff3ee] via-[#ffe1d6] to-[#ffd0bf] px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Floating brand blobs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#F54900] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ff7a3d] opacity-10 rounded-full blur-3xl" />

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden relative">
          {/* Top accent strip */}
          <div className="h-2 bg-gradient-to-r from-[#F54900] via-[#ff7a3d] to-[#ffb199]" />

          <div className="text-center pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-[#F54900]">eat4me</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-10 p-10 md:p-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Intro */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#F54900]">eat4Me</span>{" "}
                  exists because the best meal you've ever had was probably not
                  in a restaurant. It was made by someone; a mother, an auntie
                  or a neighbor who cooked it with genuine care and years of
                  practice. We are a technology platform that gives those cooks
                  a stage, an income, and the recognition they have always
                  deserved, while giving you access to the most authentic food
                  in your city. eat4me is not a delivery company. We are a
                  community of cooks who love what they do, and people who love
                  what they eat.
                </p>

                <p className="text-gray-600">
                  We connect you to fresh, local, and professionally prepared
                  meals from trusted chefs across Ghana.
                </p>
              </div>

              {/* Mission */}
              <div className="p-6 rounded-2xl bg-[#fff0ea] border border-[#ffd6c7]">
                <h2 className="text-xl font-bold text-[#F54900] mb-2">
                  Our Mission
                </h2>
                <p className="text-gray-700">
                  To give Ghana's most talented home cooks an income and a
                  platform and also give every customer access to authentic,
                  affordable, home-quality meals through technology.
                </p>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-2xl bg-[#fff0ea] border border-[#ffd6c7]">
                <h2 className="text-xl font-bold text-[#F54900] mb-2">
                  Our Vision
                </h2>
                <p className="text-gray-700">
                  To build Africa's most trusted community of home cooks and
                  food lovers — where authentic food culture is celebrated,
                  fairly rewarded, and accessible to everyone.
                </p>
              </div>

              {/* Disclaimer Toggle */}
              <div>
                <button
                  onClick={() => setShowDisclaimer(!showDisclaimer)}
                  className="text-[#F54900] font-semibold cursor-pointer hover:underline transition hover:text-blue-500"
                >
                  {showDisclaimer ? "Hide Disclaimer" : "View Disclaimer"}
                </button>

                {showDisclaimer && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 p-5 rounded-2xl bg-[#fff5f1] border border-[#ffd6c7]"
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">
                      eat4me is a technology marketplace platform connecting
                      independent food entrepreneurs with customers. eat4me does
                      not prepare, handle, or take responsibility for the
                      production of any food listed on this platform. All cooks
                      and chefs operate as independent contractors and are
                      individually responsible for compliance with applicable
                      food safety laws and regulations in their jurisdiction.
                      eat4me's Kitchen Quality Assessment is a proprietary
                      platform standard and does not constitute a government
                      food safety certification or hygiene permit.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[2.5rem] h-[420px] shadow-2xl border-4 border-white bg-gradient-to-br from-[#F54900] via-[#ff7a3d] to-[#ffb199] flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full -top-10 -left-10" />
                <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full -bottom-20 -right-20" />

                {/* Logo center */}
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">eat4Me</div>
                  <p className="text-sm opacity-90">
                    Great Food • Great Chefs • Anytime
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4 border border-[#ffd6c7]">
                <p className="text-sm text-gray-500">Trusted by </p>
                <p className="font-bold text-[#F54900] text-lg">
                  our growing community of food lovers across Ghana
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom strip */}
          <div className="text-center py-8 bg-gradient-to-r from-[#F54900] to-[#ff7a3d] text-white">
            <p className="text-lg font-semibold">
              Eat better. Live better.{" "}
              <span className="font-bold">eat4Me.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default AboutUs;
