

import { useState } from "react";
import { Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";

import Legals from "./Legals";

const Footer = () => {
  const [showLegals, setShowLegals] = useState(false);

  const [initialDoc, setInitialDoc] = useState(0);

  return (
    <>
      <footer
        id="footer"
        className="bg-brand-black text-white pt-20 pb-10 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-brand-orange">Eat4Me</h2>

            <p className="text-gray-400 text-sm">More Than a Meal.</p>

            <div className="flex gap-4">
              <Instagram className="hover:text-brand-orange cursor-pointer transition" />
              <Facebook className="hover:text-brand-orange cursor-pointer transition" />
              <Twitter className="hover:text-brand-orange cursor-pointer transition" />
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="font-bold mb-6">Explore</h4>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">
                About Eat4Me
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Chef Sign-Up
              </li>

              <li className="hover:text-white cursor-pointer transition">
                FAQs
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-bold mb-6">Support</h4>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li
                onClick={() => {
                  setInitialDoc(0);
                  setShowLegals(true);
                }}
                className="hover:text-white cursor-pointer transition"
              >
                Terms & Conditions
              </li>

              <li
                onClick={() => {
                  setInitialDoc(1);
                  setShowLegals(true);
                }}
                className="hover:text-white cursor-pointer transition"
              >
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer transition">
                Report an Issue
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold mb-6">Contact</h4>

            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                support@eat4me.com
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Accra, Ghana
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
          © 2026 Eat4Me. All rights reserved.
        </div>
      </footer>

      {/* LEGALS COMPONENT */}
      <Legals
        isOpen={showLegals}
        onClose={() => setShowLegals(false)}
        initialDocument={initialDoc}
      />
    </>
  );
};

export default Footer;
