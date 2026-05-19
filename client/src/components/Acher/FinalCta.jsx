import React from 'react';
import {
  ShoppingCart,
  Zap,
  Trophy,
  CreditCard,
  Truck,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Gift,
  TrendingUp,
  Heart,
  Code,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const FinalCta = () => {
  const scrollOrder = () => {
    const order = document.getElementById('checkOut');
    if (order) {
      order.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700 tracking-wide">
              সীমিত সময়ের অফার
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            আর দেরি কেন?
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                আজই Combo অর্ডার করুন!
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 300 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6 Q 75 10, 150 6 T 300 6"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
            FoodAppi-র সাথে রাজশাহী যাওয়ার সুযোগ সীমিত।
            <span className="font-semibold text-orange-600 block sm:inline">
              {' '}
              প্রতিটি কম্বো অর্ডার = ১টি লটারি এন্ট্রি।
            </span>
          </p>

          {/* Feature Chips */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              {
                icon: Zap,
                text: 'অফার সীমিত সময়ের',
                color: 'from-yellow-50 to-amber-50',
                textColor: 'text-yellow-700',
              },
              {
                icon: Trophy,
                text: '৪টি পরিবার জিতবে',
                color: 'from-amber-50 to-orange-50',
                textColor: 'text-orange-700',
              },
              {
                icon: CreditCard,
                text: 'COD Available',
                color: 'from-green-50 to-emerald-50',
                textColor: 'text-green-700',
              },
              {
                icon: Truck,
                text: 'সারাদেশে ডেলিভারি',
                color: 'from-blue-50 to-indigo-50',
                textColor: 'text-blue-700',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 bg-gradient-to-r ${item.color} px-4 py-2 rounded-full border border-gray-100 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer`}
              >
                <item.icon className={`w-3.5 h-3.5 ${item.textColor}`} />
                <span className={`text-sm font-medium ${item.textColor}`}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button
              onClick={scrollOrder}
              className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2 text-lg">
                <ShoppingCart className="w-5 h-5" />
                এখনই Combo অর্ডার করুন
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-t border-gray-800 ">
            <div className="bg-gray-800/40 rounded-2xl p-3">
              <div className="flex items-center justify-between gap-2 whitespace-nowrap">
                {/* Left */}
                <div className="flex items-center gap-1">
                  <Code className="w-3 h-3 text-orange-400" />
                  <span className="text-[10px] md:text-sm text-gray-400">
                    Dev
                  </span>
                </div>

                {/* Middle (TEXT + LINK together) */}
                <div className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-red-400 animate-pulse" />

                  <span className="text-[10px] md:text-sm text-orange-300">
                    Design and develop by
                  </span>

                  <a
                    href="https://delt-a-digivast-frontend.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] md:text-sm font-semibold text-orange-400 hover:text-orange-300 underline"
                  >
                    Delta Digivast
                  </a>

                  <Star className="w-3 h-3 text-yellow-400" />
                </div>

                {/* Right */}
                <div className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-blue-400" />
                  <a
                    href="https://delt-a-digivast-frontend.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] md:text-sm text-gray-400 hover:text-white"
                  >
                    website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FinalCta;
