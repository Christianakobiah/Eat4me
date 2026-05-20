

import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import About from "./pages/AboutUs";
// import Forms from "./pages/Forms";
import ComboFeature from "./pages/ComboFeature";
import ServiceGrid from "./pages/ServiceGrid";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/combofeature" element={<ComboFeature />} />
        <Route path="/servicegrid" element={<ServiceGrid />} />
       
      </Routes>
    </BrowserRouter>
  );
}