import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import Teams from './Components/Teams'
import CTA from './Components/CTA'


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <CTA />
      <Teams />
      <Contact />
      <Footer />
    </div>
  )
}

export default App  