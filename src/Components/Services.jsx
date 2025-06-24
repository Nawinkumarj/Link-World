import React, { useState } from "react";
import SectionTitle from './SectionTitle';
import { assets } from "../assets/assets";



const Services = () => {

const serviceData = [
  {
    title: "Investment & Capital Management",
    image: assets.SR1,
    description: "Funding and financial oversight for subsidiaries.",
  },
  {
    title: "Strategic Business Development",
    image: assets.SR2,
    description: "Growth planning and market expansion support. ",
  },
  {
    title: "Corporate Governance & Compliance",
    image: assets.SR3,
    description: "Ensuring adherence to local and international regulations. ",
  },
  {
    title: "Operational Support & Advisory ",
    image: assets.SR4,
    description:
      "Providing guidance on best practices, risk management, and efficiency improvements.",
  },
  {
    title: "Mergers & Acquisitions (M&A) ",
    image: assets.SR5,
    description: " Identifying opportunities for expansion and partnerships. ",
  },
];

const [activeIndex, setActiveIndex] = useState(0);
    
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div id="service" className="scroll-top">
        <SectionTitle text1={"s"} text2={"services"} />
      </div>
      <section className="service-section">
        <div className="service-left">
          <div className="buttons">
            {serviceData.map((service, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`service-btn ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
        <div className="service-right">
          <div className="image-circle">
            <img src={serviceData[activeIndex].image} alt="service" />
          </div>
          <div className="service-content-box fade-in ">
            <p>{serviceData[activeIndex].description}</p>
            {/* <a href="#" className="read-more">
            Read More →
          </a> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
