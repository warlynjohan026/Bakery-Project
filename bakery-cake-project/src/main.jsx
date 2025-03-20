
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Cotizar from "./components/Cotizar/Cotizar.jsx";
import ScrollUp from "./components/ScrollTopp/ScrollTop.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollUp/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cotizar" element={<Cotizar />} />
    </Routes>
  </BrowserRouter>
);
