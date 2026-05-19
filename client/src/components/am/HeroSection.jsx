import React from 'react';
import { Clock, ArrowRight, Star, Shield, Sparkles } from 'lucide-react';

const HeroSection = ({ hero }) => {
  const scrollCheckOut = () => {
    const checkOut = document.getElementById('checkout');
    if (checkOut) {
      checkOut.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative py-10 md:py-24 lg:py-32 mb-8 md:mb-12 overflow-hidden rounded-none  shadow-2xl">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.images})` }}
      >
        {/* Enhanced Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-0.1 py-8 sm:px-6 md:px-8 lg:px-12 md:py-12 lg:py-16 flex flex-col items-center text-center">
        {/* Session Time Badge - Enhanced */}
        <div className="mb-6 md:mb-8 animate-bounce-slow">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 backdrop-blur-sm px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <span className="text-xs md:text-sm font-bold text-white tracking-wide">
              {hero.sesionTime}
            </span>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-200" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl flex flex-col items-center text-center">
          {/* Heading - Enhanced with gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 md:mb-4 leading-tight drop-shadow-lg">
            {hero.heading}
            <span className="block text-orange-400 mt-2">আমাদের সাথে</span>
          </h1>

          {/* Subheading - Enhanced */}
          <h2 className=" sm:text-2xl md:text-3xl text-orange-300 font-bold mb-4 md:mb-5 drop-shadow-md">
            {hero.subHeading}
          </h2>

          {/* CTA Button - Enhanced */}
          <div className="flex justify-center">
            <button
              onClick={scrollCheckOut}
              className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              <span>অর্ডার করুন</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
