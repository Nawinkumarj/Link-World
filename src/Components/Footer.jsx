import React from 'react'
import { FaFacebook, FaInstagram, } from "react-icons/fa";
import { LiaLinkedin } from 'react-icons/lia';
const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="footer">
        <div className="footer-right">
          <div className="right-center">
            <h5>Contact Us</h5>
            <p>
              <a href="#">Dubai</a>
            </p>
            <p>
              <a href="mailto:LinkWorld@gmail.com">LinkWorld@gmail.com</a>
            </p>
            <p>
              <a href="tel:+919897947495">+91 9897947495</a>
            </p>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-circle"></div>
        </div>
        <div className="footer-left">
          <div className="left-center">
            <h5>Quick Links</h5>
            <p>
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </p>
            <p>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </p>
            <p>
              <a href="#service" onClick={() => scrollToSection("service")}>
                Services
              </a>
            </p>
            <p>
              <a href="#teams" onClick={() => scrollToSection("teams")}>
                Teams
              </a>
            </p>
            <p>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </p>
          </div>
          <div className="left-center">
            <h5>Legal Notices</h5>
            <p>
              <a href="#">Privacy Policy </a>
            </p>
            <p>
              <a href="#">Terms and Conditions</a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-media">
            <p>© {currentYear} All Rights Reserved</p>
            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Powered By BFC-Virtu AI
              </a>
            </p>
          </div>
          <div className="footer-text">
            <h1>LET'S CONNECT WITH US</h1>
          </div>
        </div>
        <div className="media-icon">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LiaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;