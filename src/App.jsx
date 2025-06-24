import React from 'react'
import { Routes, Route } from "react-router-dom";
import AllPage from "./Components/AllPage.jsx";
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
import TermsCondition from "./Components/TermsCondition.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<AllPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/TermsCondition" element={<TermsCondition />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App  