import React from 'react'
import { assets } from "../assets/assets";

const CTA = () => {
  return (
    <div className="ctaContainer">
      <div className="leftSide">
        <h1>Build the Future with Us</h1>
        <p>
          Join hands with a partner that drives long-term business growth
          through intelligent investment and leadership.
        </p>
        <a href="#contact" onClick={() => scrollToSection("contact")}>
          <button>Get in Touch Today </button>
        </a>
      </div>

      <div className="rightSide">
        <img src={assets.ctaImg} alt="" />
      </div>
    </div>
  );
}

export default CTA