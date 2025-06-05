import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className='navbarContainer'>
      <div className='leftSide'>
        <a href="#home" onClick={() => scrollToSection('home')}>LOGO</a>
      </div>

      <div className={`rightSide ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => scrollToSection('home')}>HOME</a>
        <a href="#about" onClick={() => scrollToSection('about')}>ABOUT</a>
        <a href="#service" onClick={() => scrollToSection('service')}>SERVICE</a>
        <a href="#teams" onClick={() => scrollToSection('teams')}>TEAMS</a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>CONTACT</a>
      </div>

      <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </div>
  );
};

export default Navbar;
