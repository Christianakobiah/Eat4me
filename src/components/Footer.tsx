// import type { JSX } from "react";

// function Footer(): JSX.Element {
//   return (
//     <footer className="bg-zinc-900 text-zinc-200 py-12 px-6 lg:px-20">
//       <div className="grid md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="font-bold text-lg mb-3">Eat4Me</h3>
//           <p className="text-sm text-zinc-400">
//             Great food from great chefs — anytime, anywhere.
//           </p>
//         </div>
//         <div className="text-sm space-y-2">
//           <p>About</p>
//           <p>FAQs</p>
//           <p>Vendor Sign-Up</p>
//         </div>
//         <div className="text-sm space-y-2">
//           <p>Terms & Conditions</p>
//           <p>Privacy Policy</p>
//           <p>Contact</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-brand-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif text-brand-orange">Eat4Me</h2>
          <p className="text-gray-400 text-sm">More Than a Meal.</p>
          <div className="flex gap-4">
            <Instagram className="hover:text-brand-orange cursor-pointer" />
            <Facebook className="hover:text-brand-orange cursor-pointer" />
            <Twitter className="hover:text-brand-orange cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About eat4Me</li>
            <li className="hover:text-white cursor-pointer">Vendor Sign-Up</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Report an Issue</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@eat4me.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Accra, Ghana
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
        © 2026 eat4Me. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
