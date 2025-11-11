import React from 'react';

const HeroCardSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-0">
      {/* Additional Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
        <div className="bg-white p-3 sm:p-6 rounded-md shadow-lg border border-amber-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4">🌿</div>
          <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
            100% Natural
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            No additives or preservatives
          </p>
        </div>

        <div className="bg-white p-3 sm:p-6 rounded-md shadow-lg border border-amber-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hidden md:block">
          <div className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4">🥄</div>
          <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
            Rich in Nutrients
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            Packed with vitamins & minerals
          </p>
        </div>

        <div className="bg-white p-3 sm:p-6 rounded-md shadow-lg border border-amber-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4">🚚</div>
          <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
            Free Shipping
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            On orders above ৳ 500
          </p>
        </div>
      </div>

      {/* Product Features Section - 2 cards on mobile */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-md p-6 sm:p-8 lg:p-10 shadow-lg border border-amber-200 mt-8 sm:mt-12 lg:mt-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 lg:mb-10">
          Why Choose Our Date Molasses?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center group">
            <div className="bg-white rounded-md p-3 sm:p-4 shadow-md mb-3 sm:mb-4 inline-block group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <span className="text-xl sm:text-2xl lg:text-3xl">🍯</span>
            </div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
              Pure Quality
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-tight sm:leading-relaxed">
              Made from finest quality dates
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-md p-3 sm:p-4 shadow-md mb-3 sm:mb-4 inline-block group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <span className="text-xl sm:text-2xl lg:text-3xl">💪</span>
            </div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
              Energy Boost
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-tight sm:leading-relaxed">
              Natural source of energy
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-md p-3 sm:p-4 shadow-md mb-3 sm:mb-4 inline-block group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <span className="text-xl sm:text-2xl lg:text-3xl">❤️</span>
            </div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
              Heart Healthy
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-tight sm:leading-relaxed">
              Supports cardiovascular health
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-white rounded-md p-3 sm:p-4 shadow-md mb-3 sm:mb-4 inline-block group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <span className="text-xl sm:text-2xl lg:text-3xl">🌱</span>
            </div>
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">
              Vegan Friendly
            </h4>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-tight sm:leading-relaxed">
              Suitable for all diets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardSection;
