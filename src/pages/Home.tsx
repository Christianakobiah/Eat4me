import React from "react";

// Components
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import ServiceGrid from "../components/ServiceGrid";
import ChefProfile from "../components/ChefProfile";
import ChefOnboarding from "../components/ChefOnboarding";
import ComboFeature from "../components/ComboFeature";
import ValueSection from "../components/ValueSection";
// import InteractionHub from "../components/InteractionHub";
import SuggestionBox from "../components/SuggestionBox";
import ReportIssue from "../components/ReportIssue";
import AboutUs from "../components/AboutUs ";

import Footer from "../components/Footer";

// Types
// import type { Chef } from "../types";

// // Images
// import ChefImg from "../assets/Images/Chef1.png";
// import BankuImg from "../assets/Images/banku.jpg";
// import WaakyeImg from "../assets/Images/Waakye.jpg";

// // Data
// const FEATURED_CHEFS: Chef[] = [
//   {
//     id: "chef-001",
//     name: "Chef Kwame",
//     experience: "12",
//     rating: "4.9",
//     image: ChefImg,
//     specialties: [
//       {
//         name: "Banku and Tilapia",
//         image: BankuImg,
//         description:
//           "Delicious Banku and Tilapia with hot red pepper and green sauce",
//       },
//       {
//         name: "Waakye",
//         image: WaakyeImg,
//         description: "Tasty waakye with chicken, kokoo and salad",
//       },
//     ],
//   },
// ];

import { CHEFS } from "../data/content";
import SignatureGhanaianExcellence from "../components/SignatureGhanaianExcellence";

const Home: React.FC = () => {
  const heroChef = CHEFS[0];

  return (
    <main className="font-sans antialiased text-brand-black bg-white">
      {/* 1. Navigation */}
      <Navigation />

      {/* 2. Hero Banner */}
      <Hero
      // name={heroChef.name}
      // experience={heroChef.experience}
      // rating={heroChef.rating}
      // image={heroChef.image}
      // specialties={heroChef.specialties}
      />

      {/* 3. What We Offer */}
      <ServiceGrid />
      <SignatureGhanaianExcellence />

      {/* 4. Featured Chefs */}
      {/* <section className="py-24 bg-[#FF8200]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-serif text-center mb-16 text-brand-black">
            Featured Chefs
          </h2> */}

      {/* <div className="space-y-12">
            {CHEFS.map((chef) => (
              <ChefProfile key={chef.id} {...chef} />
            ))}
          </div> */}

      {/* <section className="py-24 bg-brand-gray">
  <ChefProfile />
</section> */}
      <ChefProfile />
      {/* </div>
      </section> */}

      {/* 5. Chef Onboarding */}
      <ChefOnboarding />

      {/* 6. Combo Feature */}
      <ComboFeature />

      {/* 7. Why Choose Us */}
      <ValueSection />

      {/* 8. Interaction Hub */}
      {/* <InteractionHub /> */}
      <SuggestionBox />
      <ReportIssue />
      <AboutUs />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
};

export default Home;
