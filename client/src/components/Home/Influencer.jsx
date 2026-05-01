import React, { useState, useEffect } from 'react';
import Image from '../../assets/FoodAppi.jpg';

const Influencer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollOrder = () => {
    const order = document.getElementById('checkOut');
    if (order) {
      order.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 md:px-4  overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 transform  md:px-0 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-lg mb-4">
            <span className="text-sm font-semibold tracking-wide">
              ✨ বিশেষ কোলাবোরেশন ✨
            </span>
          </div>

          <h2 className="text-[23px] md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-700 via-amber-700 to-orange-700 bg-clip-text text-transparent">
            FoodAppi বলছেন{' '}
            <span className="relative inline-block text-green-600">
              Rifi Bazar
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 4 Q 50 8, 100 4 T 200 4"
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            সম্পর্কে
          </h2>

          <p className="text-xs text-gray-600 max-w-2xl mx-auto text-lg">
            বাংলাদেশের জনপ্রিয় ফুড ভ্লগার নিজে ট্রাই করেছেন এবং রিভিউ দিয়েছেন
          </p>
        </div>

        {/* Main Card with Hover Effect */}
        <div
          className={`group transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-md  overflow-hidden border border-white/50  shadow-md">
            {/* Decorative Top Bar */}
            <div className="h-2 bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400"></div>

            <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              {/* Left Side - Influencer Info with Animation */}
              <div className="text-center md:w-1/3 relative">
                {/* Image Container with Animation */}
                <div className="relative inline-block">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto transform">
                    <img
                      src={Image}
                      alt="FoodAppi"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Verification Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg animate-bounce">
                    <svg
                      className="w-5 h-5 text-white"
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
                </div>

                <h3 className="font-bold text-2xl text-gray-800 mt-6 mb-1">
                  FoodAppi
                </h3>
                <p className="text-sm text-gray-500">
                  বাংলাদেশের জনপ্রিয় <br /> ফুড কন্টেন্ট ক্রিয়েটর
                </p>

                <div className="flex justify-center gap-2 mt-4">
                  <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium shadow-sm">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    ভেরিফাইড ভ্লগার
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-medium">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    1.2M ফলোয়ার্স
                  </span>
                </div>

                {/* Social Icons */}
                {/* <div className="flex justify-center gap-3 mt-4">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-3.847c1.202-2.224 1.84-4.758 1.84-7.293 0-.58-.013-1.16-.038-1.734a10.07 10.07 0 002.5-2.593z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                    </svg>
                  </a>
                </div> */}
              </div>

              {/* Right Side - Review Content */}
              <div className="md:w-2/3 space-y-6">
                {/* Review Header */}
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full">
                    <p className="text-sm font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      📢 FoodAppi-র রিভিউ
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Quote Card with Animation */}
                <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-md p-6 md:p-8 border-l-8 border-orange-400 shadow-lg transform transition-all duration-300 hover:shadow-xl">
                  {/* Quote Icon */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic">
                    "Rifi Bazar-এর আচার কম্বো একবার ট্রাই করলে বারবার অর্ডার
                    করতে মন চাইবে। রাজশাহীর আসল তেঁতুল আর বরইয়ের স্বাদ এখানেই
                    আছে — বাজারের কোনো আচারের সাথে তুলনাই হয় না!"
                  </p>

                  {/* Signature line */}
                  <div className="mt-4 flex items-center gap-2 text-orange-600">
                    <div className="w-8 h-px bg-orange-400"></div>
                    <span className="text-sm font-medium">- FoodAppi</span>
                  </div>
                </div>

                {/* Special Offer Card with Animation */}
                <div className="group/offer relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-md p-6 shadow-xl overflow-hidden cursor-pointer ">
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 group-hover/offer:translate-x-full transition-transform duration-700"></div>

                  <div className="relative flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                    <div className="flex gap-3 items-start">
                      <div className="text-4xl animate-bounce">🏆</div>
                      <div>
                        <p className="text-white font-bold text-lg md:text-xl mb-1">
                          বিশেষ সুযোগ! 🎁
                        </p>
                        <p className="text-white/90 text-sm md:text-base">
                          FoodAppi ঘোষণা করেছেন: Rifi Bazar Combo কিনলে রাজশাহী
                          সিটি ট্যুর + কালাভুনা + আম বাগান জেতার সুযোগ!
                        </p>
                        <div className="mt-2 inline-flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                          <svg
                            className="w-4 h-4 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-white text-xs font-medium">
                            লটারিতে ৪টি পরিবার বিজয়ী হবেন
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div
                        onClick={scrollOrder}
                        className="bg-white rounded-full px-6 py-2 shadow-lg transform transition-all hover:scale-105"
                      >
                        <span className="text-orange-600 font-bold text-sm">
                          অর্ডার করুন এখনই
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Influencer;
