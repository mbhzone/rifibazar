import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import {
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Leaf,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const WhyChooseUs = ({ whyChooseUs }) => {
  const images = whyChooseUs?.images || [];

  const scrollToOrder = () => {
    const orderForm = document.getElementById('checkout');
    if (orderForm) {
      orderForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto mb-8 md:mb-12 px-3 md:px-0  ">
      <div className="">
        {/* Section Header - Responsive */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            {whyChooseUs?.heading || 'কেন বেছে নেবেন রিফি বাজার?'}
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-3 sm:mt-4 rounded-full"></div>
        </div>

        {/* Main Content - Responsive Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* LEFT SIDE - Swiper Image Slider - Responsive */}
          <div className="relative order-1 lg:order-none">
            <div className="  overflow-hidden shadow-xl">
              {images.length > 0 ? (
                <Swiper
                  modules={[Autoplay, Pagination, Navigation, EffectFade]}
                  effect="fade"
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                  }}
                  loop={true}
                  className="why-choose-us-swiper"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative ">
                        <img
                          src={image}
                          alt={`Why choose us ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="aspect-[4/3] sm:aspect-square bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                  <span className="text-gray-400 text-sm sm:text-base">
                    No images available
                  </span>
                </div>
              )}

              {/* Custom Navigation Buttons - Responsive */}
              {images.length > 1 && (
                <>
                  <button
                    className="swiper-button-prev-custom absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-gray-700" />
                  </button>
                  <button
                    className="swiper-button-next-custom absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 text-gray-700" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* RIGHT SIDE - Content - Responsive */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 lg:order-none ">
            {/* Main Description */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                {whyChooseUs?.subheading1 ||
                  'রিফি বাজারে আমরা গুণগত মান ও সেবার প্রতি অঙ্গীকারবদ্ধ। আমাদের আচার তৈরি হয় শত বছরের ঐতিহ্য ও আধুনিক হাইজিন মান বজায় রেখে।'}
              </p>
            </div>

            {/* Key Points Grid - Responsive */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
              {(
                whyChooseUs?.points || [
                  '১০০% প্রাকৃতিক উপাদান',
                  'কোনো প্রিজারভেটিভ নেই',
                  'হাতের তৈরি ঐতিহ্য',
                  'নিজস্ব বাগানের ফল',
                  'হাইজিনিক প্যাকেজিং',
                  'সারাদেশে ডেলিভারি',
                ]
              ).map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 group p-1.5 sm:p-2 rounded-lg hover:bg-orange-50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Second Description with Quote - Responsive */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-3 sm:border-l-4 border-orange-400">
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm md:text-base italic">
                "
                {whyChooseUs?.subheading2 ||
                  'আমরা বিশ্বাস করি খাদ্য হওয়া উচিত নিরাপদ, স্বাস্থ্যকর এবং সুস্বাদু। তাই প্রতিটি বয়াম সযত্নে তৈরি করা হয় আমাদের কারিগরদের দ্বারা।'}
                "
              </p>
            </div>

            {/* CTA Button - Responsive */}
            <button
              onClick={scrollToOrder}
              className="group w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>এখনই অর্ডার করুন</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for Swiper - Responsive */}
      <style jsx global>{`
        .why-choose-us-swiper {
          border-radius: 7px;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .why-choose-us-swiper {
            border-radius: 10px;
          }
        }

        .why-choose-us-swiper .swiper-pagination {
          bottom: 10px !important;
        }

        @media (min-width: 640px) {
          .why-choose-us-swiper .swiper-pagination {
            bottom: 12px !important;
          }
        }

        .why-choose-us-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: white;
          opacity: 0.7;
          transition: all 0.3s ease;
          margin: 0 3px !important;
        }

        @media (min-width: 640px) {
          .why-choose-us-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 4px !important;
          }
        }

        .why-choose-us-swiper .swiper-pagination-bullet-active {
          width: 16px;
          border-radius: 4px;
          background: #f97316;
          opacity: 1;
        }

        @media (min-width: 640px) {
          .why-choose-us-swiper .swiper-pagination-bullet-active {
            width: 24px;
          }
        }

        /* Mobile touch optimizations */
        .swiper-button-prev-custom,
        .swiper-button-next-custom {
          -webkit-tap-highlight-color: transparent;
        }

        /* Responsive navigation buttons visibility */
        @media (max-width: 640px) {
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
