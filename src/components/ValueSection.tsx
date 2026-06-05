import { motion } from "framer-motion";
import {
  Wallet,
  Smartphone,
  HeartHandshake,
  MapPinned,
  ChefHat,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState } from "react";
import videoss from "../assets/Videos/video1.mp4";

const values = [
  {
    title: "Verified Home Cooks",
    icon: <ChefHat size={30} />,
    desc: "Every cook on eat4me has passed our Kitchen Quality Assessment before going live on the platform. Real people. Real kitchens. Real food.",
  },
  {
    title: "Food for Every Budget",
    icon: <Wallet size={30} />,
    desc: "From daily meals to special occasions — eat4me has a cook and a price point that works for you.",
  },
  {
    title: "Simple to Use",
    icon: <Smartphone size={30} />,
    desc: "Browse cooks, pick your meal, set your delivery time, and you are done. Ordering takes less than two minutes.",
  },
  {
    title: "Clear and Secure",
    icon: <HeartHandshake size={30} />,
    desc: "No hidden fees. Secure payments. What you see at checkout is exactly what you pay.",
  },
  {
    title: "Real-Time Order Tracking",
    icon: <MapPinned size={30} />,
    desc: "Follow your order from the moment your cook starts preparing it to the moment it arrives at your door.",
  },
];

const ValueSection = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-24 bg-[#fcfcfc] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Why Choose <span className="text-orange-600">eat4Me?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              eat4me was built on one simple belief — the best food in Ghana
              isn't always in a restaurant. It's in someone's home nearby, made
              by someone who has been cooking it their whole life. We built the
              platform to connect those cooks with you.
            </p>
            <div className="inline-block border-l-4 border-orange-500 pl-6 py-2">
              <p className="text-orange-600 font-bold text-xl italic leading-snug">
                "Because the best meals come from someone who actually cares
                what you eat, <br />
                <span className="text-gray-400 font-medium not-italic text-lg">
                  Not a Kitchen Line."
                </span>
              </p>
            </div>
          </motion.div>

          {/* VIDEO TOGGLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-video rounded-[2rem] bg-gray-900 overflow-hidden shadow-2xl relative z-10">
              <video
                autoPlay
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={videoss} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* VIDEO OVERLAY BUTTON */}
              <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 transform active:scale-95"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/*  background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-orange-100 rounded-[2rem] -z-10" />
          </motion.div>
        </div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-7">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative overflow-hidden bg-white rounded-[2rem] border border-orange-100 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)] transition-all duration-500 p-8"
            >
              {/* Background Accent */}
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-orange-500 to-orange-300" />

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white mb-6 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-xl mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.desc}
              </p>

              {/* Decorative Circle */}
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-orange-50 rounded-full group-hover:scale-125 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
