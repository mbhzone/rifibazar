import React from 'react';
import Boroi from '../../assets/Boroi A.png'; // Your jar image
import Tetul from '../../assets/Tetul A.png'; // Your jar image
import Mixed from '../../assets/Mixed A.png'; // Your jar image
import Combo from '../../assets/Combo A.png'; // Your jar image

const Product = () => {
  const products = [
    // {
    //   name: 'তেঁতুল আচার',
    //   nameEn: 'Tamarind Pickle',
    //   price: '৳২৫০',
    //   color: 'orange',
    //   description: 'টক-মিষ্টি স্বাদে মুখরোচক তেঁতুল আচার',
    //   img: Tetul,
    // },
    // {
    //   name: 'বরই আচার',
    //   nameEn: 'Jujube Pickle',
    //   price: '৳২২০',
    //   color: 'green',
    //   description: 'টক-মিষ্টি স্বাদে অতুলনীয় সুস্বাদু বরই আচার',
    //   img: Boroi,
    // },
    // {
    //   name: 'তেঁতুল-বরই মিক্সড আচার ',
    //   nameEn: 'Tamarind-Jujube Mixed Pickle',
    //   price: '৳৩০০',
    //   color: 'orange',
    //   description: 'টক-ঝাল-মিষ্টি মিশেলে তৈরি স্পেশাল আচার',
    //   img: Mixed,
    // },
    {
      name: 'তেঁতুল,বরই ও মিক্সড আচার কম্বো',
      nameEn: 'Tamarind-Jujube Mixed Pickler Combo',
      price: '৳২৮০',
      color: 'green',
      description: 'টক-ঝাল-মিষ্টি সকল স্পেশাল আচার',
      img: Combo,
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
      <div className="max-w-7xl mx-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 md:gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${
                colorStyles[product.color].bg
              } rounded-md shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/50 ${colorStyles[product.color].border} flex flex-col h-full`}
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
                  src={product.img}
                  alt={product.name}
                  className="w-36 md:w-40 mx-auto drop-shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10"
                />
              </div>

              {/* Product Info */}
              <div className="text-center px-4 pb-6 flex flex-col flex-1">
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

                {/* Button always bottom */}
                <button
                  onClick={scrollCheckOut}
                  className={`mt-auto w-full py-2.5 rounded-xl ${colorStyles[product.color].button} text-white font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 ${colorStyles[product.color].ring} focus:ring-offset-2`}
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

        {/* <!-- COMBO CARD --> */}
        {/* COMBO CARD - Redesigned Premium Version */}
        <div className="mt-16 relative">
          <div className="relative bg-white rounded-md shadow-2xl overflow-hidden border-2 border-orange-200/50 transform transition-all duration-500 hover:shadow-3xl">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Product Information */}
              <div className="flex-1 p-6 md:p-8 lg:p-10">
                {/* Title Section */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 leading-tight">
                    তেঁতুল, বরই ও মিক্সড আচার কম্বো
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 tracking-wide">
                    Tamarind-Jujube Mixed Pickle Combo (1.2kg)
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  তিনটি সিগনেচার আচার একসাথে — পরিবারের সবার পছন্দ এক প্যাকেজে!
                  এবং প্রতিটি কম্বো অর্ডারে পাচ্ছেন রাজশাহী ট্যুর গিভঅ্যাওয়েতে
                  এন্ট্রি!
                </p>

                {/* Items List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    'তেঁতুল আচার ৪০০ গ্রাম',
                    'বরই আচার ৪০০ গ্রাম',
                    'তেঁতুল-বরই মিক্সড ৪০০ গ্রাম',
                    '🏆 রাজশাহী ট্যুর গিভঅ্যাওয়ে এন্ট্রি',
                    '🎁 FoodAppi স্পেশাল রেসিপি কার্ড',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Order Button (visible on mobile) */}
                <button className="lg:hidden w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.972 3.6 1.488 5.571 1.486 5.522 0 10.012-4.49 10.014-10.01.001-2.677-1.04-5.19-2.93-7.08-1.89-1.89-4.401-2.93-7.079-2.931-5.524 0-10.012 4.49-10.013 10.01-.001 1.751.455 3.462 1.322 4.946l-1.404 5.13 5.209-1.361z" />
                    <path d="M17.562 15.157c-.29-.145-1.72-.849-1.986-.946-.266-.097-.459-.145-.652.145-.193.29-.746.946-.915 1.14-.169.193-.337.217-.627.072-.29-.145-1.224-.451-2.331-1.439-.862-.768-1.444-1.717-1.613-2.007-.169-.29-.018-.447.127-.591.13-.13.29-.338.435-.507.145-.169.193-.29.29-.483.097-.193.048-.362-.024-.507-.072-.145-.652-1.571-.894-2.151-.236-.564-.476-.486-.652-.494-.169-.008-.362-.008-.555-.008-.193 0-.507.072-.772.362-.265.29-1.012.99-1.012 2.415 0 1.425 1.037 2.801 1.182 2.995.145.193 2.04 3.115 4.943 4.366.69.298 1.229.476 1.649.61.693.22 1.324.189 1.823.115.556-.082 1.72-.703 1.963-1.382.242-.679.242-1.261.169-1.382-.072-.12-.265-.193-.555-.338z" />
                  </svg>
                  WhatsApp-এ অর্ডার করুন
                </button>
              </div>

              {/* Right Side - Pricing & CTA */}
              <div className="lg:w-96 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                {/* Price Section */}
                <div>
                  <div className="mb-4">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-3xl md:text-4xl font-extrabold text-gray-800">
                        ৳৯৯৯
                      </span>
                      <span className="text-lg md:text-xl text-gray-400 line-through">
                        ৳১২০০
                      </span>
                      <div className="bg-green-100 px-3 py-1 rounded-full">
                        <span className="text-green-700 font-semibold text-sm">
                          💰 ২০১ টাকা সাশ্রয়!
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Giveaway Box */}
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-4 mb-6 border border-orange-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🏆</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-800">
                          এই কম্বো কিনলে{' '}
                          <strong className="text-orange-600">
                            রাজশাহী ট্যুর লটারিতে নাম দেওয়া হবে!
                          </strong>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          ৪টি পরিবার জিতে নেবে এই সুযোগ
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Order Buttons */}
                  <button
                    onClick={scrollCheckOut}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 mb-3"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 1.5M17 13l1.5 1.5M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                    এখনই Combo অর্ডার করুন
                  </button>

                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2 hidden lg:flex">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.972 3.6 1.488 5.571 1.486 5.522 0 10.012-4.49 10.014-10.01.001-2.677-1.04-5.19-2.93-7.08-1.89-1.89-4.401-2.93-7.079-2.931-5.524 0-10.012 4.49-10.013 10.01-.001 1.751.455 3.462 1.322 4.946l-1.404 5.13 5.209-1.361z" />
                    </svg>
                    WhatsApp-এ অর্ডার করুন
                  </button>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap justify-center gap-4 mt-6 pt-4 border-t border-orange-200">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-gray-600">
                        ৭ দিনে ডেলিভারি
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-gray-600">
                        COD Available
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs text-gray-600">
                        সারাদেশে ডেলিভারি
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
