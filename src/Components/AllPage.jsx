import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Services from '../Components/Services'
import HeroSection from '../Components/HeroSection'
import Teams from '../Components/Teams'
import CTA from '../Components/CTA'
import BackToTopButton from "../Components/BackToTop.jsx";
const AllPage = () => {
  return (
    <div>
      <BackToTopButton />
      <HeroSection />
      <About />
      <Services />
      <CTA />
      <Teams />
      <Contact />
    </div>
  );
}

export default AllPage
