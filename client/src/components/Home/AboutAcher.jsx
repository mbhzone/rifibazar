import React from 'react';
import {
  CheckCircle2,
  XCircle,
  Award,
  Shield,
  Package,
  Leaf,
  Flame,
  Droplets,
  Sun,
  Star,
} from 'lucide-react';

const AboutAcher = () => {
  // scroll to checkout section

  const scrollCheckOut = () => {
    const checkOut = document.getElementById('checkOut');
    if (checkOut) {
      checkOut.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative  px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-yellow-200/10 rounded-full blur-2xl"></div> */}

      {/* Decorative Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-amber-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-orange-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-amber-400 rounded-lg rotate-45"></div>
      </div> */}

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-7 md:mb-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 tracking-tight mt-0 md:mt-3">
            কেনো নিবেন আমাদের
            <span className="relative inline-block ml-2">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-200 to-amber-200 -skew-y-2 rounded-lg -z-10"></span>
              এক্সক্লুসিভ আচার?
            </span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg mt-4">
            গুণগত মান, স্বাদ ও প্যাকেজিং - সবকিছুতেই আমরা সেরা
          </p>
        </div>
        {/* Comparison Section */}
        <div className=" md:mt-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Market Achar - Warning Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-rose-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>

              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-500 to-rose-500 px-6 py-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    বাজারের আচার
                    <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
                      এড়িয়ে চলুন
                    </span>
                  </h3>
                  <p className="text-red-100 text-sm mt-1">
                    স্বাস্থ্যের জন্য ক্ষতিকর হতে পারে
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        কৃত্রিম ফ্লেভার ব্যবহার করা হয়
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        মানহীন বা পুরনো তেল ব্যবহার
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        প্রিজারভেটিভ ও কেমিক্যাল থাকে
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        কম হাইজিন মেইনটেইন করা হয়
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        স্বাদ ও গুণগত মান অনিয়মিত
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Footer Warning */}
                <div className="bg-gradient-to-r from-red-50 to-rose-50 px-6 py-3 border-t border-red-100">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-lg">!</span>
                    </div>
                    <span className="text-red-600 text-sm font-semibold">
                      স্বাস্থ্যসম্মত নয় - এড়িয়ে চলুন
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Our Achar - Premium Card */}
            <div className="group relative">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    <span className="text-2xl">🥒</span>
                    আমাদের আচার
                    <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded-full">
                      প্রিমিয়াম
                    </span>
                  </h3>
                  <p className="text-green-100 text-sm mt-1">
                    ১০০% হাইজিন ও কোয়ালিটি অ্যাসিওরড
                  </p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        ১০০% প্রাকৃতিক উপাদান ব্যবহার করা হয়
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        খাঁটি সরিষার তেল দিয়ে তৈরি
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        কোনো কেমিক্যাল বা প্রিজারভেটিভ নেই
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        ঘরোয়া ঐতিহ্যবাহী রেসিপি
                      </span>
                    </li>
                    <li className="flex items-start gap-3 group/item">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 group-hover/item:scale-110 transition">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700 font-medium">
                        ফ্রেশ ও হাইজেনিক প্রোডাকশন
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Footer Badge */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3 border-t border-green-100">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-green-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-700"
                        >
                          ✓
                        </div>
                      ))}
                    </div>
                    <span className="text-green-700 text-sm font-semibold">
                      ১০,০০০+ হ্যাপি কাস্টমার
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-[2px] shadow-lg hover:shadow-xl transition-all">
            <button
              onClick={scrollCheckOut}
              className="group relative px-8 py-3 bg-white border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden"
            >
              <span className="relative z-10">অর্ডার করুন</span>
              <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAcher;
