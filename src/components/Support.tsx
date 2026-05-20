// // import { motion } from "framer-motion";
// import { Lightbulb } from 'lucide-react';

// const SuggestionBox = () => {
//   return (
//     <section className="py-24 px-6">
//       <div className="max-w-5xl mx-auto bg-brand-gradient rounded-[3rem] p-12 text-white relative overflow-hidden">
//         {/* Decorative Background Icon */}
//         <Lightbulb className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 rotate-12" />

//         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-4xl font-serif mb-6">Share With Us</h2>
//             <ul className="space-y-4 mb-8">
//               {[
//                 "Features you want to see",
//                 "Improvements to current services",
//                 "New food ideas or chef categories"
//               ].map((item, i) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-white rounded-full" />
//                   <span className="text-white/90">{item}</span>
//                 </li>
//               ))}
//             </ul>
//             <p className="text-xl font-bold font-serif italic">You share. We listen. We improve.</p>
//           </div>

//           <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
//             <textarea
//               rows={4}
//               placeholder="Tell us what will make your experience better..."
//               className="w-full bg-white/20 border-0 rounded-2xl p-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white outline-none mb-4"
//             />
//             <button className="w-full bg-white text-brand-orangeDark py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
//               Send Suggestion
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default SuggestionBox;

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Lightbulb } from "lucide-react";

const Support = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_xxe840g",
        "template_40f185h",
        {
          message: message,
        },
        "_H1uOghshgCCX_TRn",
      );

      setSent(true);
      setMessage("");

      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      console.error("Failed to send:", error);
      alert("Message not sent. Try again.");
    }

    setLoading(false);
  };

  return (
    <>
    <div className="text-center pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Need Support From <span className="text-[#F54900]">eat4me</span>
            </h1>
          </div>
   
    <section className="py-24 px-6">
      <div id="support" className="max-w-5xl mx-auto bg-[#FF6900] rounded-[3rem] p-12 text-white relative overflow-hidden">
        <Lightbulb className="absolute -bottom-10 -right-10 w-64 h-64 opacity-10 rotate-12" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif mb-6">Share With Us</h2>

            <ul className="space-y-4 mb-8">
              {[
                "Features you want to see",
                "Improvements to current services",
                "New food ideas or chef categories",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-bold font-serif italic">
              You share. We listen. We improve.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what will make your experience better..."
              className="w-full bg-white/20 border-0 rounded-2xl p-4 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white outline-none mb-4"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="w-full bg-white py-4 rounded-xl font-bold text-gray-400 hover:bg-gray-300 hover:text-[#FF6900] transition-colors"
            >
              {loading ? "Sending..." : sent ? "Sent ✅" : "Send Suggestion"}
            </button>
          </div>
        </div>
      </div>
    </section>
     </>
  );
};

export default Support;
