// // import Hero from "./Components/Hero";
// import ChefProfile from "./Components/ChefProfiling";
// import Chef1 from "./assets/Images/chef1.png";

// function App() {
//   return (
//     <>
//       {/* <Hero /> */}
//       <ChefProfile
//         name="Chef Kwame"
//         experience="12"
//         rating="4.9"
//         image={Chef1}
//         specialties={[
//           {
//             name: "Banku and Tilapia",
//             image: "./assets/Images/banku.jpg",
//             description:
//               "Delicious Banku and Tilapia with hot red pepper and green sauce",
//           },
//           {
//             name: "Waakye",
//             image: "./assets/Images/Waakye.jpg",
//             description: "Tasty waakye with chicken, kokoo and salad",
//           },
//         ]}
//       />
//     </>
//   );
// }

// export default App;

// import Services from "./components/Services";
// import Hero from "./components/Hero";
// import ChefProfiling from "./components/ChefProfiling";
// import FeaturedCarousel from "./components/FeaturedCarousel";
// import WhyChoose from "./components/WhyChoose";
// import Testimonials from "./components/Testimonials";
// import ReportIssue from "./components/ReportIssue";
// import SuggestionBox from "./components/SuggestionBox";
// import Footer from "./components/Footer";
// import type { JSX } from "react";

// export default function App(): JSX.Element {
// return (
// <div className="font-sans bg-white text-zinc-800">
// <Hero />
// <Services />
// <ChefProfiling />
// <FeaturedCarousel />
// <WhyChoose />
// <Testimonials />
// <ReportIssue />
// <SuggestionBox />
// <Footer />
// </div>
// );
// }

import Home from "./pages/Home";

export default function App() {
  return <Home />;
}
