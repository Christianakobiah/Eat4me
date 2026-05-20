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

// import { Instagram, Facebook, Twitter, Mail, MapPin } from "lucide-react";
// import { useState } from "react";
// import Legals from "./Legals";

// const Footer = () => {
//   return (
//     <footer id="footer" className="bg-brand-black text-white pt-20 pb-10 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
//         <div className="space-y-6">
//           <h2 className="text-3xl font-serif text-brand-orange">Eat4Me</h2>
//           <p className="text-gray-400 text-sm">More Than a Meal.</p>
//           <div className="flex gap-4">
//             <Instagram className="hover:text-brand-orange cursor-pointer" />
//             <Facebook className="hover:text-brand-orange cursor-pointer" />
//             <Twitter className="hover:text-brand-orange cursor-pointer" />
//           </div>
//         </div>

//         <div>
//           <h4 className="font-bold mb-6">Explore</h4>
//           <ul className="space-y-4 text-gray-400 text-sm">
//             <li className="hover:text-white cursor-pointer">About eat4Me</li>
//             <li className="hover:text-white cursor-pointer">Vendor Sign-Up</li>
//             <li className="hover:text-white cursor-pointer">FAQs</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-bold mb-6">Support</h4>
//           <ul className="space-y-4 text-gray-400 text-sm">
//             <li className="hover:text-white cursor-pointer">
//               Terms & Conditions
//             </li>
//             <li className="hover:text-white cursor-pointer">Privacy Policy</li>
//             <li className="hover:text-white cursor-pointer">Report an Issue</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-bold mb-6">Contact</h4>
//           <ul className="space-y-4 text-gray-400 text-sm">
//             <li className="flex items-center gap-2">
//               <Mail size={16} /> support@eat4me.com
//             </li>
//             <li className="flex items-center gap-2">
//               <MapPin size={16} /> Accra, Ghana
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-xs">
//         © 2026 eat4Me. All rights reserved.
//       </div>
//     </footer>
//   );
// };
// export default Footer;

import { useState } from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  FileText,
  ShieldCheck,
  ChefHat,
  Bike,
  X,
} from "lucide-react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF WORKER FIX
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// PDF FILES
const eat4meTerms = "/pdfs/eat4meterms.pdf";
const privacyPolicy = "/pdfs/privacypolicy.pdf";
const chefsTerms = "/pdfs/chefsterms.pdf";
const riderTerms = "/pdfs/riderterms.pdf";

type DocumentType = {
  title: string;
  file: string;
  icon: React.ReactNode;
};

const documents: DocumentType[] = [
  {
    title: "Eat4Me Terms & Conditions",
    file: eat4meTerms,
    icon: <FileText size={18} />,
  },
  {
    title: "Privacy Policy",
    file: privacyPolicy,
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Chef Terms & Conditions",
    file: chefsTerms,
    icon: <ChefHat size={18} />,
  },
  {
    title: "Rider Terms & Conditions",
    file: riderTerms,
    icon: <Bike size={18} />,
  },
];

const Footer = () => {
  const [showLegal, setShowLegal] = useState(false);

  const [selectedDoc, setSelectedDoc] = useState<DocumentType>(documents[0]);

  const [numPages, setNumPages] = useState<number>(0);

  return (
    <>
      {/* FOOTER */}
      <footer
        id="footer"
        className="bg-brand-black text-white pt-20 pb-10 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-brand-orange">eat4Me</h2>

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
                About eat4Me
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
                  setSelectedDoc(documents[0]);
                  setShowLegal(true);
                }}
                className="hover:text-white cursor-pointer transition"
              >
                Terms & Conditions
              </li>

              <li
                onClick={() => {
                  setSelectedDoc(documents[1]);
                  setShowLegal(true);
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

      {/* LEGAL MODAL */}
      {showLegal && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-7xl h-[95vh] rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowLegal(false)}
              className="absolute top-5 right-5 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
            >
              <X size={22} className="text-black" />
            </button>

            {/* HEADER */}
            <div className="border-b border-gray-100 px-8 py-6">
              <h2 className="text-3xl font-bold text-[#1a0f07]">
                Terms & Policies
              </h2>

              <p className="text-gray-500 mt-2">
                Read all Eat4Me policies, chef agreements, and legal documents.
              </p>
            </div>

            {/* BODY */}
            <div className="flex flex-1 overflow-hidden">
              {/* SIDEBAR */}
              <div className="w-[320px] border-r border-gray-100 bg-[#faf7f2] p-5 overflow-y-auto hidden md:block">
                <div className="space-y-3">
                  {documents.map((doc, index) => {
                    const active = selectedDoc.title === doc.title;

                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDoc(doc)}
                        className={`w-full text-left p-4 rounded-2xl transition-all flex items-center gap-4 ${
                          active
                            ? "bg-orange-600 text-white shadow-lg"
                            : "bg-white hover:bg-orange-50 text-[#1a0f07]"
                        }`}
                      >
                        {doc.icon}

                        <span className="font-semibold text-sm">
                          {doc.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* PDF VIEWER */}
              <div className="flex-1 flex flex-col bg-[#faf7f2]">
                {/* TOP BAR */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-white">
                  <h3 className="font-bold text-lg text-[#1a0f07]">
                    {selectedDoc.title}
                  </h3>

                  <a
                    href={selectedDoc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-xl font-semibold transition"
                  >
                    Download PDF
                  </a>
                </div>

                {/* MOBILE TABS */}
                <div className="md:hidden flex gap-3 overflow-x-auto p-4 border-b border-gray-100 bg-white">
                  {documents.map((doc, index) => {
                    const active = selectedDoc.title === doc.title;

                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDoc(doc)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition ${
                          active
                            ? "bg-orange-600 text-white"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {doc.title}
                      </button>
                    );
                  })}
                </div>

                {/* PDF CONTENT */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="max-w-4xl mx-auto">
                    <Document
                      file={selectedDoc.file}
                      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                      loading={
                        <div className="text-center py-20 text-gray-500">
                          Loading document...
                        </div>
                      }
                    >
                      {Array.from(new Array(numPages), (_, index) => (
                        <div
                          key={`page_${index + 1}`}
                          className="mb-8 rounded-2xl overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                        >
                          <Page
                            pageNumber={index + 1}
                            width={Math.min(window.innerWidth - 80, 900)}
                          />
                        </div>
                      ))}
                    </Document>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
