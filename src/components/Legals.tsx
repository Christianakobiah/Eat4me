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
          <div className="border-b border-gray-100 px-8 py-6 pr-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a0f07]">
              Terms & Policies
            </h2>

            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Read all Eat4Me policies, vendor agreements and legal documents.
            </p>
          </div>

          {/* BODY */}
          <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
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

            {/* MOBILE TABS (FIXED HORIZONTAL SCROLL) */}
            <div className="md:hidden w-full overflow-x-auto bg-white border-b border-gray-100 touch-pan-x">
              <div className="flex gap-2 px-4 py-3 min-w-max">
                {documents.map((doc, index) => {
                  const active = selectedDoc.title === doc.title;

                  const mobileTitle =
                    index === 0
                      ? "Eat4Me Terms"
                      : index === 1
                        ? "Privacy"
                        : index === 2
                          ? "Chef Terms"
                          : "Rider Terms";

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDoc(doc)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        active
                          ? "bg-orange-600 text-white shadow-sm"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {mobileTitle}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PDF VIEWER CONTAINER */}
            <div className="flex-1 flex flex-col min-h-0">
              {/* TOP BAR */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
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

              {/* PDF */}
              <iframe
                src={selectedDoc.file}
                title={selectedDoc.title}
                className="w-full flex-1 border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
