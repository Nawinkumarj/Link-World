import React from 'react'
import { assets } from '../assets/assets'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";


const About = () => {

  const data = [
    "Expansion into emerging markets with high investment potential.",
    "Strengthening the performance of existing subsidiaries through innovation and technology.",
    "Forming strategic alliances and partnerships for global reach.",
    "Sustainable and ESG-driven (Environmental, Social, Governance) investments."
  ];

  const visionMissionData = [
  {
    title: 'Our Vision',
    points: [
      'To invest in and manage high-potential businesses across multiple industries.',
      'To drive value creation through effective governance, financial expertise, and strategic leadership.',
      'To foster sustainable and profitable growth for our subsidiaries and stakeholders.',
    ],
  },
  {
    title: 'Our Mission',
    reverse: 'reverse',
    points: [
      'To empower innovation and operational excellence in every business we engage with.',
      'To act with integrity and social responsibility in all our business dealings.',
      'To build a legacy of trust, performance, and growth across diverse sectors.',
    ],
  },
];

  return (
    <>
    <div id="about" className='aboutContainer'>
      <div className='aboutTitle'>
        <span></span>
        <h1>
          Lorem ipsum simple text align has been seen
        </h1>
      </div>

      <div className='aboutContent'>
        <div className='leftSide'>
          <img src="https://cdn.pixabay.com/photo/2017/05/02/03/41/action-2277292_1280.jpg" alt="" />
        </div>
        <div className='rightSide'>
          <p>Link World <span>FZCO</span> is a Dubai-based holding company that strategically manages a diverse portfolio of subsidiary companies across various industries. With a focus on sustainable growth and global expansion, Link World FZCO provides financial, strategic, and operational support to its subsidiaries, ensuring long-term success.</p>
            <img src="https://cdn.pixabay.com/photo/2017/05/02/03/41/action-2277292_1280.jpg" alt="" />
        </div>
      </div>

      {visionMissionData.map((section, index) => (
        <div className={`vision-mission-container ${section.reverse}`} key={index}>
          <div className='leftSide'>
            <img className='top' src={assets.visionMissionTop} alt="" />
            <img className='bottom' src={assets.visionMissionTop} alt="" />
            <h1>{section.title}</h1>
          </div>
          <div className='rightSide'>
            {section.points.map((point, i) => (
              <div className='points' key={i}>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
  
    </div>
    
    <div className="strategy-section">
        <div className="growth-title-mobile">
          <h2>
            <span className="outline">FUTURE</span>
            <span className="filled"> GROWTH </span>
            <span className="outline">STRATEGY</span>
          </h2>
        </div>
        <div className="card-row">
          <div className="quote-card">
            <span className="quote-icon open"><BiSolidQuoteAltLeft /></span>
            <p>{data[0]}</p>
            <span className="quote-icon close"><BiSolidQuoteAltRight /></span>
          </div>
          <div className="quote-card">
            <span className="quote-icon open"><BiSolidQuoteAltLeft /></span>
            <p>{data[1]}</p>
            <span className="quote-icon close"><BiSolidQuoteAltRight /></span>
          </div>
        </div>

        <div className="growth-title">
          <h2>
            <span className="outline">FUTURE</span>
            <span className="filled"> GROWTH </span>
            <span className="outline">STRATEGY</span>
          </h2>
        </div>

        <div className="card-row">
          <div className="quote-card">
            <span className="quote-icon open"><BiSolidQuoteAltLeft /></span>
            <p>{data[2]}</p>
            <span className="quote-icon close"><BiSolidQuoteAltRight /></span>
          </div>
          <div className="quote-card">
            <span className="quote-icon open"><BiSolidQuoteAltLeft /></span>
            <p>{data[3]}</p>
            <span className="quote-icon close"><BiSolidQuoteAltRight /></span>
          </div>
        </div>
      </div>
      </>
  )
}

export default About