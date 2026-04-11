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
    <div className="px-4  relative overflow-hidden ">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      {/* Main Container */}
      <div className="container mx-auto flex items-center justify-between relative z-10">
        {/* Left Image */}
        <div className="w-1/3 hidden md:block ">
          <img
            src={Image1}
            alt="Amloki"
            className="w-full max-w-[600px] drop-shadow-2xl"
          />
        </div>

        {/* Center Content */}
        <div className="text-center flex-1 px-6 ">
          <div className="inline-block">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent pt-2">
                স্বাদ ও রুচি
              </h2>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full"></div>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-green-700 mt-6 mb-4">
            দুটোই বাড়িয়ে তুলবে
          </h3>

          <p className="mt-2 text-gray-700 text-lg">
            প্রিমিয়াম সুস্বাদু{' '}
            <span className="text-orange-500 font-bold text-xl relative inline-block">
              তেতুল
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-300 rounded-full"></span>
            </span>{' '}
            ও{' '}
            <span className="text-green-600 font-bold text-xl relative inline-block">
              বরই
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-300 rounded-full"></span>
            </span>{' '}
            আচার।
          </p>

          <button
            onClick={scrollCheckOut}
            className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            অর্ডার করুন
          </button>
        </div>

        {/* Right Image */}
        <div className="w-1/3 hidden md:block text-right ">
          <img
            src={Image2}
            alt="Tetul"
            className="w-full max-w-[600px] ml-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
