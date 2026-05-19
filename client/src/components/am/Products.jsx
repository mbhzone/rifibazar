import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';
import { Package, Star, TrendingUp, Eye, ArrowRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Products = ({ product }) => {
  // Sample product data with names and prices (you can replace with actual data)
  const productsWithDetails =
    product?.map((img, index) => ({
      image: img,
      name: `গুরুত্বপূর্ণ পণ্য ${index + 1}`,
      price: '৳২৫০',
      rating: 4.5,
      reviews: 120,
    })) || [];

  const scrollCheckOut = () => {
    const checkOut = document.getElementById('checkout');
    if (checkOut) {
      checkOut.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className=" mb-8 md:mb-12 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            আমগুলো দেখুন একদম <span className="text-orange-500">টাটকা</span>
          </h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Slider Section */}
        <div className="relative px-3  md:px-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
                effect: 'coverflow',
              },
            }}
            className="products-swiper"
          >
            {productsWithDetails.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative bg-white rounded-[7px] md:rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-lg">
                        টাটকা
                      </div>
                    </div>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Button - Enhanced */}
        <div className="flex justify-center pt-2">
          <button
            onClick={scrollCheckOut}
            className="group bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3.5 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
          >
            <span>অর্ডার করুন</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .products-swiper {
          padding: 10px 0 40px 0 !important;
        }

        .products-swiper .swiper-button-prev,
        .products-swiper .swiper-button-next {
          width: 36px;
          height: 36px;
          background: white;
          border-radius: 7px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .products-swiper .swiper-button-prev:after,
        .products-swiper .swiper-button-next:after {
          font-size: 14px;
          font-weight: bold;
          color: #f97316;
        }

        .products-swiper .swiper-button-prev:hover,
        .products-swiper .swiper-button-next:hover {
          background: #f97316;
          transform: scale(1.1);
        }

        .products-swiper .swiper-button-prev:hover:after,
        .products-swiper .swiper-button-next:hover:after {
          color: white;
        }

        .products-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .products-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: #f97316;
        }

        @media (max-width: 768px) {
          .products-swiper .swiper-button-prev,
          .products-swiper .swiper-button-next {
            width: 28px;
            height: 28px;
          }

          .products-swiper .swiper-button-prev:after,
          .products-swiper .swiper-button-next:after {
            font-size: 10px;
          }

          .products-swiper {
            padding: 5px 0 35px 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
