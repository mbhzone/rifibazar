import React, { useState, useEffect } from 'react';
import Banner1 from '../assets/banner1.jpg';
import Banner2 from '../assets/banner2.jpg';
import Banner3 from '../assets/banner3.jpg';
import MBanner1 from '../assets/mv.png';
import MBanner2 from '../assets/mv2.png';
import MBanner3 from '../assets/mv3.png';

const Heading = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const slides = [
    {
      image: Banner1,
      badge: 'Premium',
      title: 'Pure Date Molasses',
      description: 'Taste the natural goodness of our finest date molasses.',
    },
    {
      image: Banner2,
      badge: 'Organic',
      title: 'Rich in Nutrients',
      description: 'Packed with vitamins and minerals to boost your energy.',
    },
    {
      image: Banner3,
      badge: 'Natural',
      title: 'Vegan Friendly',
      description: 'Suitable for all diets, heart-healthy and pure.',
    },
  ];

  const mobileBanner = [MBanner1, MBanner2, MBanner3];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeSlides = isMobile
    ? mobileBanner.map((image, i) => ({
        image,
        badge: slides[i].badge,
        title: slides[i].title,
        description: slides[i].description,
      }))
    : slides;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % activeSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlides]);

  const nextSlide = () =>
    setCurrentSlide(prev => (prev + 1) % activeSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      prev => (prev - 1 + activeSlides.length) % activeSlides.length
    );
  const goToSlide = index => setCurrentSlide(index);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative mb-16">
        <div className="relative h-[40vh] min-h-[500px] overflow-hidden shadow-2xl">
          {activeSlides.map((slide, index) => (
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

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 shadow-2xl"
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
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 shadow-2xl"
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
            {activeSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full border-2 border-white transition-all ${
                  index === currentSlide
                    ? 'bg-amber-400 scale-125 border-amber-400'
                    : 'bg-transparent hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
