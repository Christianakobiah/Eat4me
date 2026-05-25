import React from "react";

// Components
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ChefProfile from "../components/ChefProfile";
import ChefOnboarding from "../components/ChefOnboarding";
import ValueSection from "../components/ValueSection";
import SuggestionBox from "../components/Support";
import ReportIssue from "../components/ReportIssue";


import Footer from "../components/Footer";



// import { CHEFS } from "../data/content";
import SignatureGhanaianExcellence from "../components/SignatureGhanaianExcellence";

const Home: React.FC = () => {
  // const heroChef = CHEFS[0];

  return (
    <main className="font-sans antialiased text-brand-black bg-white">
      <div className="mb-30"><Navigation/></div>
      <Hero/>
      <SignatureGhanaianExcellence />
      <ChefProfile />
      <ChefOnboarding />
      <ValueSection />
      <SuggestionBox />
      <ReportIssue />
      <Footer />
    </main>
  );
};

export default Home;
