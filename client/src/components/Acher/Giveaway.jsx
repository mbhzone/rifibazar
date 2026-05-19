import React, { useState, useEffect } from 'react';
import {
  Gift,
  Trophy,
  MapPin,
  Utensils,
  Apple,
  ShoppingCart,
  CheckCircle,
  Sparkles,
  Ticket,
  Users,
  Award,
  Clock,
  ShieldCheck,
  ArrowRight,
  Star,
  Calendar,
  Video,
  TrendingUp,
} from 'lucide-react';

const Giveaway = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollOrder = () => {
    const order = document.getElementById('checkOut');
    if (order) {
      order.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-20 px-4 overflow-hidden " id="giveaway">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #f97316 2px, transparent 2px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Gradient Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Animated Header */}
        <div
          className={`transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-lg mb-5">
            <Gift className="w-5 h-5 text-white" />
            <span className="text-sm font-semibold tracking-wide text-white">
              স্পেশাল গিভঅ্যাওয়ে
            </span>
            <Sparkles className="w-4 h-4 text-yellow-200" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            জিতে নিন স্বপ্নের
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent ml-3">
                রাজশাহী অ্যাডভেঞ্চার!
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full z-0"
                height="12"
                viewBox="0 0 300 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8 Q 75 12, 150 8 T 300 8"
                  stroke="#f97316"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            FoodAppi-র সাথে রাজশাহী যাওয়ার এই সুযোগ আর নাও আসতে পারে
          </p>

          {/* Timer Section */}
          <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 px-5 py-2.5 rounded-full">
            <Clock className="w-4 h-4 text-orange-600" />
            <span className="text-xs md:text-sm font-medium text-gray-700">
              অফার চলছে — মাত্র
            </span>
            <div className="flex gap-1 text-sm font-bold text-gray-800">
              <span className="bg-white shadow-sm px-2 py-0.5 rounded">
                {timeLeft.days}d
              </span>
              <span>:</span>
              <span className="bg-white shadow-sm px-2 py-0.5 rounded">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span>:</span>
              <span className="bg-white shadow-sm px-2 py-0.5 rounded">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span>:</span>
              <span className="bg-white shadow-sm px-2 py-0.5 rounded">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        </div>

        {/* Prizes Section */}
        <div
          className={`grid grid-cols-3 gap-2 md:gap-6 mt-12 transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Prize 1 */}
          <div className="group relative bg-gradient-to-br from-white to-orange-50 rounded-xl md:rounded-2xl p-2 md:p-6 shadow border border-orange-100 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 cursor-pointer">
            <div className="relative z-10 text-center">
              <div className="w-8 h-8 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-4">
                <MapPin className="w-4 h-4 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-bold text-[10px] md:text-xl text-gray-800">
                সিটি ট্যুর
              </h3>
              <p className="hidden md:block text-sm text-gray-600 mt-2">
                রাজশাহীর সেরা জায়গাগুলো ঘুরে দেখার সুযোগ
              </p>
            </div>
          </div>

          {/* Prize 2 */}
          <div className="group relative bg-gradient-to-br from-white to-orange-50 rounded-xl md:rounded-2xl p-2 md:p-6 shadow border border-orange-100 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 cursor-pointer">
            <div className="relative z-10 text-center">
              <div className="w-8 h-8 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-4">
                <Utensils className="w-4 h-4 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-bold text-[10px] md:text-xl text-gray-800">
                কালাভুনা
              </h3>
              <p className="hidden md:block text-sm text-gray-600 mt-2">
                ঐতিহ্যবাহী কালাভুনা ফেস্ট
              </p>
            </div>
          </div>

          {/* Prize 3 */}
          <div className="group relative bg-gradient-to-br from-white to-orange-50 rounded-xl md:rounded-2xl p-2 md:p-6 shadow border border-orange-100 transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 cursor-pointer">
            <div className="relative z-10 text-center">
              <div className="w-8 h-8 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-4">
                <Apple className="w-4 h-4 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-bold text-[10px] md:text-xl text-gray-800">
                আম বাগান
              </h3>
              <p className="hidden md:block text-sm text-gray-600 mt-2">
                আনলিমিটেড আম খাওয়ার সুযোগ
              </p>
            </div>
          </div>
        </div>

        {/* Stats Counter */}
        <div
          className={`grid grid-cols-3 gap-2 sm:gap-4 w-full mt-10 transition-all duration-700 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-orange-100 text-center">
            <Users className="w-5 h-5 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
            <p className="text-lg sm:text-2xl font-bold text-gray-800">৪</p>
            <p className="text-[10px] sm:text-xs text-gray-600">পরিবার</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-orange-100 text-center">
            <Users className="w-5 h-5 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
            <p className="text-lg sm:text-2xl font-bold text-gray-800">৮</p>
            <p className="text-[10px] sm:text-xs text-gray-600">
              জন (২ জন করে)
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-orange-100 text-center">
            <Award className="w-5 h-5 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
            <p className="text-lg sm:text-2xl font-bold text-gray-800">৩টি</p>
            <p className="text-[10px] sm:text-xs text-gray-600">পুরস্কার</p>
          </div>
        </div>

        {/* Steps Flow */}
        <div
          className={`mt-10 transition-all duration-700 delay-400 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex justify-center items-center gap-1 md:gap-3 flex-nowrap">
            {/* Item 1 */}
            <div className="flex items-center gap-1 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 px-2 md:px-4 py-1 md:py-2 rounded-full">
              <ShoppingCart className="w-3 h-3 md:w-4 md:h-4 text-orange-600" />
              <span className="text-[10px] md:text-sm font-medium text-gray-700">
                অর্ডার
              </span>
            </div>

            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-orange-400 animate-pulse" />

            {/* Item 2 */}
            <div className="flex items-center gap-1 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 px-2 md:px-4 py-1 md:py-2 rounded-full">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
              <span className="text-[10px] md:text-sm font-medium text-gray-700">
                এন্ট্রি নিশ্চিত
              </span>
            </div>

            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-orange-400 animate-pulse" />

            {/* Item 3 */}
            <div className="flex items-center gap-1 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 px-2 md:px-4 py-1 md:py-2 rounded-full">
              <Ticket className="w-3 h-3 md:w-4 md:h-4 text-orange-600" />
              <span className="text-[10px] md:text-sm font-medium text-gray-700">
                লটারি ড্র
              </span>
            </div>

            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-orange-400 animate-pulse" />

            {/* Item 4 */}
            <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-amber-500 px-2 md:px-4 py-1 md:py-2 rounded-full shadow">
              <Trophy className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span className="text-[10px] md:text-sm font-bold text-white">
                রাজশাহী ট্রিপ
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`mt-12 transition-all duration-700 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button
            onClick={scrollOrder}
            className="group relative bg-gradient-to-r from-gray-900 to-gray-800 text-white px-7 md:px-8 py-4 rounded-full font-bold md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              কম্বো অর্ডার করুন
              <Ticket className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">লটারিতে অংশ নিন</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <Gift className="w-3 h-3 text-orange-500" />
              <span>প্রতি কম্বো অর্ডার = ১টি লটারি এন্ট্রি</span>
            </p>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <Video className="w-3 h-3 text-orange-500" />
              <span>লটারি FoodAppi লাইভে হবে</span>
            </p>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-orange-500" />
              <span>ড্র তারিখ:(দ্রুত জানানো হবে) </span>
            </p>
          </div>

          {/* Trust Badge */}
          {/* <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-4 py-2 rounded-full">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span className="text-xs text-gray-700">
              ১০০% নিরাপদ ও স্বচ্ছ লটারি সিস্টেম
            </span>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Giveaway;
