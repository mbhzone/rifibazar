import React, { useState, useEffect } from 'react';
import MobileBanner1 from '../assets/mv.png';
import MobileBanner2 from '../assets/mv2.png';
import MobileBanner3 from '../assets/mv3.png';
import DesktopBanner1 from '../assets/banner1.jpg';
import DesktopBanner2 from '../assets/banner2.jpg';
import DesktopBanner3 from '../assets/banner3.jpg';

const Heading = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // md এর নিচে হলে mobile

  // ✅ update screen size dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ choose banners based on device
  const slides = isMobile
    ? [
        { image: MobileBanner1 },
        { image: MobileBanner2 },
        { image: MobileBanner3 },
      ]
    : [
        { image: DesktopBanner1 },
        { image: DesktopBanner2 },
        { image: DesktopBanner3 },
      ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides]);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  const goToSlide = index => setCurrentSlide(index);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative mb-16">
        {/* ✅ Responsive Height */}
        <div
          className={`relative overflow-hidden shadow-2xl ${
            isMobile ? 'h-[240px]' : 'h-[500px]'
          }`}
        >
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110  hidden md:flex"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hidden md:flex"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-amber-400 scale-125 border-amber-400'
                    : 'bg-transparent hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div
              className="h-full bg-amber-400 transition-all duration-1000 ease-linear"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
