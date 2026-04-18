import React from 'react';
import Achar from '../../assets/achaer.png'; // Your jar image

const Product = () => {
  const products = [
    {
      name: 'তেঁতুল আচার',
      nameEn: 'Tamarind Pickle',
      price: '৳২৫০',
      color: 'orange',
      description: 'টক-মিষ্টি স্বাদে মুখরোচক তেঁতুল আচার',
    },
    {
      name: 'বরই আচার',
      nameEn: 'Jujube Pickle',
      price: '৳২২০',
      color: 'green',
      description: 'টক-মিষ্টি স্বাদে অতুলনীয় সুস্বাদু বরই আচার',
    },
    {
      name: 'তেঁতুল-বরই মিক্সড আচার ',
      nameEn: 'Tamarind-Jujube Mixed Pickle',
      price: '৳৩০০',
      color: 'orange',
      description: 'টক-ঝাল-মিষ্টি মিশেলে তৈরি স্পেশাল আচার',
    },
    {
      name: 'তেঁতুল,বরই ও তেঁতুল-বরই মিক্সড আচার কম্বো',
      nameEn: 'Tamarind-Jujube Mixed Pickler Combo',
      price: '৳২৮০',
      color: 'green',
      description: 'টক-ঝাল-মিষ্টি সকল স্পেশাল আচার',
    },
  ];

  const colorStyles = {
    orange: {
      bg: 'from-orange-50 to-amber-50',
      border: 'hover:border-orange-200',
      text: 'text-orange-600',
      button: 'bg-orange-500 hover:bg-orange-600',
      ring: 'focus:ring-orange-500',
    },
    green: {
      bg: 'from-green-50 to-emerald-50',
      border: 'hover:border-green-200',
      text: 'text-green-600',
      button: 'bg-green-500 hover:bg-green-600',
      ring: 'focus:ring-green-500',
    },
  };

  // scroll to checkout section

  const scrollCheckOut = () => {
    const checkOut = document.getElementById('checkOut');
    if (checkOut) {
      checkOut.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 md:py-16 px-4 min-h-screen  font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            কি কি আচার থাকতেছে আমাদের
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-orange-200/50 skew-y-1 -z-10 rounded-lg"></span>
              <span className="text-orange-600"> স্টকে?</span>
            </span>
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${
                colorStyles[product.color].bg
              } rounded-md shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/50 ${colorStyles[product.color].border}`}
            >
              {/* Decorative Badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-block px-2 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-xs font-bold text-gray-600 shadow-sm">
                  নতুন
                </span>
              </div>

              {/* Image Container */}
              <div className="relative pt-8 pb-4 flex justify-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
                </div>
                <img
                  src={Achar}
                  alt={product.name}
                  className="w-36 md:w-40 mx-auto drop-shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10"
                />
              </div>

              {/* Product Info */}
              <div className="text-center px-4 pb-6">
                <h3
                  className={`text-xl md:text-2xl font-bold ${colorStyles[product.color].text} mb-1`}
                >
                  {product.name}
                </h3>
                <p className="text-xs text-gray-400 tracking-wide mb-2">
                  {product.nameEn}
                </p>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <button
                  onClick={scrollCheckOut}
                  className={`w-full py-2.5 rounded-xl ${colorStyles[product.color].button} text-white font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 ${colorStyles[product.color].ring} focus:ring-offset-2`}
                >
                  অর্ডার করুন
                </button>
              </div>

              {/* Bottom Decorative Line */}
              <div
                className={`h-1 w-full absolute bottom-0 left-0 bg-gradient-to-r ${colorStyles[product.color].button} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-7 md:mt-20 grid grid-cols-4 gap-1 md:gap-4">
          <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              ১০০% হাইজিন
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-2">
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              প্রিমিয়াম প্যাকেজিং
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              দ্রত ডেলিভারি
            </span>
          </div>
          <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-2xl backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-700">
              ক্যাশ অন ডেলিভারি
            </span>
          </div>
        </div>
 
        {/* Bottom CTA */}
        <div className="text-center mt-7 md:mt-12">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-[2px] shadow-lg">
            <div className="bg-white rounded-full px-8 py-3">
              <p className="text-orange-600  md:text-2xl font-bold">
                সেরা স্বাদের ও প্রিমিয়াম প্যাকেজিং আচার 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
