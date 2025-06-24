import React from 'react'
import { FaFacebook, FaInstagram, } from "react-icons/fa";
import { LiaLinkedin } from 'react-icons/lia';
import { Link } from "react-router-dom";
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
              <a href="mailto:info@linkworld-fzco.com">
                info@linkworld-fzco.com
              </a>
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
              <Link to="/" href="#home" onClick={() => scrollToSection("home")}>
                Home
              </Link>
            </p>
            <p>
              <Link to="/" href="#about" onClick={() => scrollToSection("about")}>
                About
              </Link>
            </p>
            <p>
              <Link to="/" href="#service" onClick={() => scrollToSection("service")}>
                Services
              </Link>
            </p>
            <p>
              <Link to="/" href="#teams" onClick={() => scrollToSection("teams")}>
                Teams
              </Link>
            </p>
            <p>
              <Link to="/" href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </Link>
            </p>
          </div>
          <div className="left-center">
            <h5>Legal Notices</h5>
            <p>
              <Link to="/privacy">Privacy Policy</Link>
            </p>
            <p>
              <Link to="/TermsCondition">Terms and Conditions</Link>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-media">
            <p>© {currentYear} All Rights Reserved</p>
            <p>
              <a
                href="https://virtuai.billionairefrequencycode.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered By BFC-Virtu AI
              </a>
            </p>
          </div>
          <div className="footer-text">
            <h1>LET'S CONNECT WITH US</h1>
          </div>
        </div>
        <div className="media-icon">
          <FaFacebook />
          <FaInstagram />
          <LiaLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Footer;