import React, { useState } from "react";
import SectionTitle from './SectionTitle'
const Services = () => {

const serviceData = [
  {
    title: "Investment & Capital Management",
    image: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?uid=R149874759&ga=GA1.1.1614317828.1733923836&semt=ais_items_boosted&w=740",
    description: "Funding and financial oversight for subsidiaries.",
  },
  {
    title: "Strategic Business Development",
    image: "/images/service2.jpg",
    description: "Growth planning and market expansion support. ",
  },
  {
    title: "Corporate Governance & Compliance",
    image: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?uid=R149874759&ga=GA1.1.1614317828.1733923836&semt=ais_items_boosted&w=740",
    description: "Ensuring adherence to local and international regulations. ",
  },
  {
    title: "Operational Support & Advisory ",
    image: "/images/service4.jpg",
    description: "Providing guidance on best practices, risk management, and efficiency improvements.",
    },
   {
        title: "Mergers & Acquisitions (M&A) ",
        image: "/images/service4.jpg",
        description: " Identifying opportunities for expansion and partnerships. ",
    },
];

const [activeIndex, setActiveIndex] = useState(0);
    
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <SectionTitle text1={'s'} text2={'services'} />
    <section id='service' className="service-section">
      <div className="service-left">
        
        <div className="buttons">
          {serviceData.map((service, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`service-btn ${index === activeIndex ? "active" : ""}`}
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
