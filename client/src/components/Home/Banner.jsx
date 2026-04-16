import React from 'react';
import Image1 from '../../assets/amlocky.png';
import Image2 from '../../assets/tetul.png';

const Banner = () => {
  // scroll to checkout section
  const scrollCheckOut = () => {
    const checkOut = document.getElementById('checkOut');
    if (checkOut) {
      checkOut.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-4 relative overflow-hidden  md:pt-10">
      {/* Decorative Background
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div> */}

      {/* Left Image */}
      <div className="absolute top-16 left-0 w-28 md:w-1/3 -mt-22 lg:-mt-40 -ml-2 md:-ml-10">
        <img
          src={Image1}
          alt="Amloki"
          className="w-full max-w-[500px] drop-shadow-2xl"
        />
      </div>
      {/* Right Image */}
      <div
        className="absolute top-16 right-0 w-28  md:w-1/3 -mt-22 lg:-mt-40 
  -mr-2  lg:-mr-34 "
      >
        <img src={Image2} alt="Tetul" className="w-full max-w-[500px] " />
      </div>

      {/* Center Content */}
      <div className="text-center px-4 sm:px-6 relative z-10 max-w-2xl mx-auto pt-6 md:pt-0">
        <div className="inline-block">
          <div className="relative">
            <h2 className="text-4xl md:text-8xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent pt-3">
              স্বাদ ও রুচি
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"></div>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-green-700 mt-4 md:mt-6  md:mb-4">
          দুটোই বাড়িয়ে তুলবে
        </h3>

        <p className="md:mt-2 text-gray-700 text-base sm:text-lg">
          প্রিমিয়াম সুস্বাদু{' '}
          <span className="text-orange-500 font-bold text-lg sm:text-xl relative inline-block">
            তেতুল
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-300 rounded-full"></span>
          </span>{' '}
          ও{' '}
          <span className="text-green-600 font-bold text-lg sm:text-xl relative inline-block">
            বরই
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-300 rounded-full"></span>
          </span>{' '}
          আচার।
        </p>

        <button
          onClick={scrollCheckOut}
          className="mt-6 sm:mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-base sm:text-lg"
        >
          অর্ডার করুন
        </button>
      </div>
    </div>
  );
};

export default Banner;
