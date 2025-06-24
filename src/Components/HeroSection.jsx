import React, { useState, useEffect } from 'react';
import { assets } from "../assets/assets";

const slides = [
  {
    id: 1,
    title: "Strategic Growth Starts Here",
    desc: "“Empowering businesses with strategy, strength, and sustainable growth.” ",
    img: assets.Mainbanner1,
  },
  {
    id: 2,
    title: "A Partner in Every Step",
    desc: "“Behind every successful venture is the right partner — that’s where we come in.” ",
    img: assets.Mainbanner2,
  },
  {
    id: 3,
    title: "Vision. Execution. Legacy",
    desc: "“Driven by vision. Backed by expertise. Built for long-term success.” ",
    img: assets.Mainbanner3,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 400);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 400);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='heroContainer'>
      <div className={`heroBGWrapper ${fade ? 'fade-in' : 'fade-out'}`}>
        <img className='heroBG' src={slides[currentSlide].img} alt="" />
      </div>
      <div className='blueBG'></div>

      <div className='heroSliderContainer'>
        <div className={`leftSide ${fade ? 'fade-in' : 'fade-out'}`}>
          <h1>{slides[currentSlide].title}</h1>
          <p>{slides[currentSlide].desc}</p>
        </div>
        <div className={`rightSide slide-${fade ? 'in' : 'out'}`}>
          <img src={slides[currentSlide].img} alt="" />
        </div>
      </div>

      {/* <div className="sliderControls">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div> */}
    </div>
  );
};

export default HeroSection;
