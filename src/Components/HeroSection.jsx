import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Slide 1 Title",
    desc: "This is the description for Slide 1.",
    img: "https://cdn.pixabay.com/photo/2017/05/02/03/41/action-2277292_1280.jpg"
  },
  {
    id: 2,
    title: "Slide 2 Title",
    desc: "This is the description for Slide 2.",
    img: "https://cdn.pixabay.com/photo/2021/06/16/16/14/swans-6341698_1280.jpg"
  },
  {
    id: 3,
    title: "Slide 3 Title",
    desc: "This is the description for Slide 3.",
    img: "https://cdn.pixabay.com/photo/2025/04/14/16/31/animals-9533774_1280.jpg"
  }
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
