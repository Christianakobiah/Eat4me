import { useState, useEffect, useRef } from "react";
import {
  FileText,
  ShieldCheck,
  ChefHat,
  Bike,
  X,
  Download,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// PDF WORKER
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
    icon: <FileText className="text-orange-500" size={16} />,
  },
  {
    title: "Privacy Policy",
    file: privacyPolicy,
    icon: <ShieldCheck className="text-orange-500" size={16} />,
  },
  {
    title: "Chef Terms & Conditions",
    file: chefsTerms,
    icon: <ChefHat className="text-orange-500" size={16} />,
  },
  {
    title: "Rider Terms & Conditions",
    file: riderTerms,
    icon: <Bike className="text-orange-500" size={16} />,
  },
];

interface LegalsProps {
  isOpen: boolean;
  onClose: () => void;
  initialDocument?: number;
}

const Legals = ({ isOpen, onClose, initialDocument = 0 }: LegalsProps) => {
  const [selectedDoc, setSelectedDoc] = useState<DocumentType>(
    documents[initialDocument],
  );
  const [numPages, setNumPages] = useState<number>(0);
  const [pdfWidth, setPdfWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement>(null);

  // dynamic sizes
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        //  mobile paddings
        const availableWidth = containerRef.current.clientWidth - 24;
        setPdfWidth(availableWidth > 800 ? 800 : availableWidth);
      }
    };

    const resizeObserver = new ResizeObserver(() => updateWidth());
    resizeObserver.observe(containerRef.current);

    updateWidth();
    return () => resizeObserver.disconnect();
  }, [selectedDoc, isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-0 md:p-4 lg:p-6 animate-fade-in">
        <div className="bg-[#faf9f6] w-full max-w-7xl h-full md:h-[92vh] rounded-none md:rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col">
          {/* HEADER  CONTAINER */}
          <div className="border-b border-gray-200/80 px-5 md:px-8 py-4 bg-white flex items-center justify-between shrink-0">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-[#1a0f07] tracking-tight">
                Terms & Policies
              </h2>
              <p className="text-gray-400 hidden md:block text-xs mt-0.5 font-medium">
                Review platform rules, user terms, and legal protection
                protocols.
              </p>
            </div>

            <div className="flex items-center gap-2 pr-12 md:pr-0">
              <a
                href={selectedDoc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-50 hover:bg-orange-100 text-orange-600 px-3.5 py-2 rounded-xl font-bold transition flex items-center gap-1.5 text-xs shrink-0"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="absolute top-3.5 right-4 z-30 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2.5 transition active:scale-95"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* MOBILE VIEW */}
          <div className="md:hidden w-full bg-white border-b border-gray-100 overflow-x-auto scrollbar-none shrink-0 touch-pan-x">
            <div className="flex flex-nowrap gap-2 px-5 py-3 w-max">
              {documents.map((doc, index) => {
                const active = selectedDoc.title === doc.title;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedDoc(doc)}
                    className={`py-2 px-4 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 whitespace-nowrap flex-shrink-0 border ${
                      active
                        ? "bg-orange-600 border-orange-600 text-white shadow-sm shadow-orange-600/20"
                        : "bg-orange-50 border-orange-100 text-orange-600"
                    }`}
                  >
                    <span>{doc.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* INNER INTERACTIVE CONTAINER BODY */}
          <div className="flex flex-1 overflow-hidden flex-col md:flex-row min-h-0">
            {/* DESKTOP SIDEBAR DECK LAYER */}
            <div className="w-[280px] lg:w-[320px] border-r border-gray-200/60 bg-white p-5 overflow-y-auto hidden md:block shrink-0">
              <p className="text-[11px] font-bold tracking-wider text-gray-400 uppercase mb-3 px-1">
                Legal Documents
              </p>
              <div className="space-y-1.5">
                {documents.map((doc, index) => {
                  const active = selectedDoc.title === doc.title;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDoc(doc)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-3.5 ${
                        active
                          ? "bg-orange-600 text-white font-bold shadow-md shadow-orange-600/10"
                          : "text-[#1a0f07] hover:bg-gray-50 font-medium"
                      }`}
                    >
                      <span className={active ? "text-white" : "text-gray-400"}>
                        {doc.icon}
                      </span>
                      <span className="text-sm truncate">{doc.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* VIEWPORT CONTROLLER CANVAS  */}
            <div className="flex-1 flex flex-col min-h-0 bg-[#faf9f6]">
              {/* VIEW TITLE NOTIFIER REGION (Hidden on Mobile) */}
              <div className="px-6 py-3.5 bg-white border-b border-gray-200/50 hidden md:block shrink-0">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block">
                  Currently Viewing
                </span>
                <h3 className="font-extrabold text-base text-[#1a0f07] truncate mt-0.5">
                  {selectedDoc.title}
                </h3>
              </div>

              {/*  ADJUSTABLE PDF CONTAINER CANVAS WRAPPER */}
              <div
                ref={containerRef}
                className="flex-1 overflow-y-auto p-3 md:p-6 flex justify-center items-start scroll-smooth"
              >
                <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-start [text-align:-webkit-center] [&_.react-pdf\_\_Page]:!w-full [&_.react-pdf\_\_Page\_\_canvas]:!w-full [&_.react-pdf\_\_Page\_\_canvas]:!h-auto">
                  <Document
                    file={selectedDoc.file}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    loading={
                      <div className="flex flex-col items-center justify-center py-32 gap-3">
                        <div className="w-7 h-7 border-3 border-orange-600 border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest animate-pulse">
                          Loading Document...
                        </span>
                      </div>
                    }
                  >
                    {Array.from(new Array(numPages), (_, index) => (
                      <div
                        key={index}
                        className="mb-4 md:mb-6 w-full bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-200/40"
                      >
                        <Page
                          pageNumber={index + 1}
                          width={pdfWidth}
                          loading=""
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

      {/* Scrollbar Cleanup styles injected */}
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
};

export default Legals;
