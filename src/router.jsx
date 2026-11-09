import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Shompod from "./pages/Shompod";
import Business from "./pages/Business";
import Compliance from "./pages/Compliance";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import RiskDisclosure from "./pages/RiskDisclosure";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/brands/shompod" element={<Shompod />} />
        <Route path="/business" element={<Business />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/risk-disclosure" element={<RiskDisclosure />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
