import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  Zap,
  Heart,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useState } from "react";
import videoss from "../assets/Videos/video1.mp4";

const values = [
  {
    title: "Reliable delivery",
    icon: <Clock size={24} />,
    desc: "Track your meal from the chef's kitchen to your doorstep in real-time.",
  },
  {
    title: "Professional chefs",
    icon: <BadgeCheck size={24} />,
    desc: "Hand-picked culinary experts who prioritize taste and hygiene above all.",
  },
  {
    title: "Affordable options",
    icon: <Zap size={24} />,
    desc: "Premium dining experiences tailored to fit your daily budget.",
  },
  {
    title: "Easy order system",
    icon: <Heart size={24} />,
    desc: "A seamless interface designed to get you from hungry to happy in seconds.",
  },
  {
    title: "Safe & Transparent",
    icon: <ShieldCheck size={24} />,
    desc: "Clear pricing, secure payments, and no surprises on every order.",
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="flex flex-col p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="text-orange-600 mb-6 w-14 h-14 flex items-center justify-center bg-orange-50 rounded-2xl">
                {value.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-3">
                {value.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
