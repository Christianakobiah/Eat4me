// import { motion } from "framer-motion";
// import type { JSX } from "react";

// function Testimonials(): JSX.Element {
//   const testimonials = [
//     "Eat4Me handled my wedding catering perfectly — stress-free.",
//     "The chef I booked was professional and friendly.",
//     "Meals always come fresh and well prepared.",
//   ];

//   return (
//     <section className="py-20 px-6 lg:px-20 bg-orange-50">
//       <h2 className="text-3xl lg:text-4xl font-bold mb-12">Testimonials</h2>

//       <div className="grid md:grid-cols-3 gap-8">
//         {testimonials.map((text, index) => (
//           <motion.blockquote
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.2 }}
//             className="bg-white p-6 rounded-2xl shadow"
//           >
//             “{text}”
//           </motion.blockquote>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about-us" className="min-h-screen bg-gradient-to-br from-[#fff3ee] via-[#ffe1d6] to-[#ffd0bf] px-6 py-24 flex items-center">
      <div className="max-w-6xl mx-auto relative">
        {/* Floating brand blobs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#F54900] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ff7a3d] opacity-10 rounded-full blur-3xl" />

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden relative">
          {/* Top accent strip */}
          <div className="h-2 bg-gradient-to-r from-[#F54900] via-[#ff7a3d] to-[#ffb199]" />

          {/* About Us Title */}
          <div className="text-center pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Us
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
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F54900] to-[#ff7a3d] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  E4M
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Eat4Me</h1>
              </div>

              {/* Intro */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  At <span className="font-bold text-[#F54900]">EatMe</span>, we
                  believe food is more than just something you eat — it’s an
                  experience, a connection, and a story shared around every
                  table.
                </p>

                <p className="text-gray-600">
                  We connect you to fresh, local, and professionally prepared
                  meals from trusted chefs and vendors across Ghana.
                </p>
              </div>

              {/* Mission */}
              <div className="p-6 rounded-2xl bg-[#fff0ea] border border-[#ffd6c7]">
                <h2 className="text-xl font-bold text-[#F54900] mb-2">
                  Our Mission
                </h2>
                <p className="text-gray-700">
                  To connect people to delicious, affordable, and high-quality
                  meals while empowering local chefs and food vendors to grow
                  their businesses through technology.
                </p>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-2xl bg-[#fff0ea] border border-[#ffd6c7]">
                <h2 className="text-xl font-bold text-[#F54900] mb-2">
                  Our Vision
                </h2>
                <p className="text-gray-700">
                  To become Africa’s leading digital food experience platform —
                  where anyone can discover, order, and enjoy great meals
                  anytime, anywhere.
                </p>
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
                  <div className="text-6xl font-bold mb-2">Eat4Me</div>
                  <p className="text-sm opacity-90">
                    Great Food • Great Chefs • Anytime
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4 border border-[#ffd6c7]">
                <p className="text-sm text-gray-500">Trusted by</p>
                <p className="font-bold text-[#F54900] text-lg">
                  Thousands of Customers
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom strip */}
          <div className="text-center py-8 bg-gradient-to-r from-[#F54900] to-[#ff7a3d] text-white">
            <p className="text-lg font-semibold">
              Eat better. Live better.{" "}
              <span className="font-bold">Eat4Me.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
