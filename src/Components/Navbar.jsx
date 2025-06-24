import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="navbarContainer">
      <div className="leftSide">
        <NavLink to="/" href="#home" onClick={() => scrollToSection("home")}>
          {" "}
          <img src={assets.logo} alt="" />{" "}
        </NavLink>
      </div>

      <div className={`rightSide ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" href="#home" onClick={() => scrollToSection("home")}>
          HOME
        </NavLink>
        <NavLink to="/" href="#about" onClick={() => scrollToSection("about")}>
          ABOUT
        </NavLink>
        <NavLink
          to="/"
          href="#service"
          onClick={() => scrollToSection("service")}
        >
          SERVICE
        </NavLink>
        <NavLink to="/" href="#teams" onClick={() => scrollToSection("teams")}>
          TEAMS
        </NavLink>
        <NavLink
          to="/"
          href="#contact"
          onClick={() => scrollToSection("contact")}
        >
          CONTACT
        </NavLink>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={assets.hum} alt="" />
        <div className="humContainer">
          <div id="nav-icon2" className={menuOpen ? "open" : ""}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
