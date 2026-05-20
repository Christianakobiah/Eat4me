import { useState } from "react";
import { FileText, ShieldCheck, ChefHat, Bike, X } from "lucide-react";

// IMPORT PDFs
import eat4meTerms from "../assets/pdfs/eat4me-terms.pdf";
import privacyPolicy from "../assets/pdfs/privacy-policy.pdf";
import chefTerms from "../assets/pdfs/chef-terms.pdf";
import riderTerms from "../assets/pdfs/rider-terms.pdf";

type LegalModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

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
    file: chefTerms,
    icon: <ChefHat size={18} />,
  },
  {
    title: "Rider Terms & Conditions",
    file: riderTerms,
    icon: <Bike size={18} />,
  },
];

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
  const [selectedDoc, setSelectedDoc] = useState(documents[0]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-7xl h-[95vh] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col">
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition"
          >
            <X size={22} />
          </button>

          {/* HEADER */}
          <div className="border-b border-gray-100 px-6 py-5 md:px-8 md:py-6 pr-16 shrink-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a0f07]">
              Terms & Policies
            </h2>

            <p className="text-gray-500 mt-1 text-xs md:text-base">
              Read all Eat4Me policies, vendor agreements and legal documents.
            </p>
          </div>

          {/* MOBILE TABS HEADER TRACK (Moved outside parent overflow container) */}
          <div className="md:hidden w-full bg-white border-b border-gray-100 overflow-x-auto scrollbar-none shrink-0 subtle-scroll">
            <div className="flex gap-2 px-6 py-3 w-max">
              {documents.map((doc, index) => {
                const active = selectedDoc.title === doc.title;

                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDoc(doc)}
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      active
                        ? "bg-orange-600 text-white shadow-sm"
                        : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                    }`}
                  >
                    {doc.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN CONTAINER BODY */}
          <div className="flex flex-1 overflow-hidden flex-col md:flex-row min-h-0">
            {/* DESKTOP SIDEBAR */}
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

                      <span className="font-semibold text-sm">{doc.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CONTENT & VIEWER CONTAINER */}
            <div className="flex-1 flex flex-col min-h-0">
              {/* ACCESSIBLE TITLE TRACK (Hidden on mobile because the scroll pills show selection) */}
              <div className="hidden md:flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
                <h3 className="font-bold text-base md:text-lg text-[#1a0f07] truncate mr-2">
                  {selectedDoc.title}
                </h3>

                <a
                  href={selectedDoc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition shrink-0"
                >
                  Open PDF
                </a>
              </div>

              {/* MOBILE TOP ACTION BAR (Only Actionable Button on Mobile) */}
              <div className="md:hidden flex items-center justify-end px-6 py-2 border-b border-gray-100 shrink-0 bg-white">
                <a
                  href={selectedDoc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 py-1"
                >
                  Open PDF in New Tab ↗
                </a>
              </div>

              {/* PDF RENDER VIEW */}
              <div className="w-full flex-1 bg-gray-50 overflow-hidden relative">
                <iframe
                  src={selectedDoc.file}
                  title={selectedDoc.title}
                  className="w-full h-full border-0 absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Global Styles utility to remove ugly scroll bars but keep native track functionality */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
