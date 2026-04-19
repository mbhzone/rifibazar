import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Achar from '../../assets/tetul b.png'; // Your jar image
import { FaStar, FaRegStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
// import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const products = [
  {
    id: 1,
    name: 'তেতুল আচার',
    nameEn: 'Tetul Achar',
    description: 'টক-ঝাল তেতুল আচার, সম্পূর্ণ প্রাকৃতিক উপাদানে তৈরি।',
    price: '৳১৫০',
    originalPrice: '৳২০০',
    rating: 5,
    reviewCount: 128,
    badge: 'বেস্টসেলার',
    badgeColor: 'orange',
    image: Achar,
  },
  {
    id: 2,
    name: 'আমের আচার',
    nameEn: 'Mango Achar',
    description: 'কাঁচা আমের টক-মিষ্টি আচার, যা মায়ের হাতের স্বাদের মতো।',
    price: '৳১৮০',
    originalPrice: '৳২৫০',
    rating: 5,
    reviewCount: 95,
    badge: 'নতুন',
    badgeColor: 'green',
    image: Achar,
  },
  {
    id: 3,
    name: 'মরিচের আচার',
    nameEn: 'Morich Achar',
    description: 'ঝালপ্রেমীদের জন্য স্পেশাল হোমমেড মরিচের আচার।',
    price: '৳১৩০',
    originalPrice: '৳১৭০',
    rating: 4,
    reviewCount: 67,
    badge: 'ঝাল স্পেশাল',
    badgeColor: 'red',
    image: Achar,
  },
  {
    id: 4,
    name: 'লেবুর আচার',
    nameEn: 'Lebu Achar',
    description: 'টক-ঝাল লেবুর আচার যা খাবারের স্বাদ বাড়িয়ে দেয়।',
    price: '৳১৪০',
    originalPrice: '৳১৯০',
    rating: 5,
    reviewCount: 82,
    badge: 'সেরা বিক্রি',
    badgeColor: 'purple',
    image: Achar,
  },
  {
    id: 5,
    name: 'হরির আচার',
    nameEn: 'Horitoky Achar',
    description: 'হারিয়ে যাওয়া ঐতিহ্যের হরির আচার, স্বাদে অনন্য।',
    price: '৳১৬০',
    originalPrice: '৳২২০',
    rating: 4,
    reviewCount: 43,
    badge: 'সীমিত সংস্করণ',
    badgeColor: 'blue',
    image: Achar,
  },
  {
    id: 6,
    name: 'কুলের আচার',
    nameEn: 'Kuler Achar',
    description: 'মিষ্টি-টক কুলের আচার যা মুখরোচক।',
    price: '৳১২০',
    originalPrice: '৳১৬০',
    rating: 5,
    reviewCount: 56,
    badge: 'লিমিটেড',
    badgeColor: 'pink',
    image: Achar,
  },
];

// const badgeColors = {
//   orange: 'bg-orange-100 text-orange-700',
//   green: 'bg-green-100 text-green-700',
//   red: 'bg-red-100 text-red-700',
//   purple: 'bg-purple-100 text-purple-700',
//   blue: 'bg-blue-100 text-blue-700',
//   pink: 'bg-pink-100 text-pink-700',
// };

const Sidler = () => {
  // const [liked, setLiked] = useState({});

  // const toggleLike = id => {
  //   setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  // };

  // scroll to checkout section

  const scrollCheckOut = () => {
    const checkOut = document.getElementById('checkOut');
    if (checkOut) {
      checkOut.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative pb-5 md:pb-2 px-4 overflow-hidden ">
      {/* Animated Background Elements */}
      {/* <div className="absolute top-0 left-0 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div> */}

      {/* Decorative Dots Pattern */}
      <div className="absolute top-20 right-10 opacity-20">
        <div className="grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-orange-500 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={true}
          loop={true}
          speed={800}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          className="product-slider"
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <div className="group h-full">
                <div className="bg-white rounded-2xl shadow-lg  overflow-hidden h-full flex flex-col relative">
                  {/* Image Container */}
                  <div className="relative w-full h-64 md:h-72 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-center mt-7 md:mt-12">
          <button
            onClick={scrollCheckOut}
            className="group relative px-8 py-3 bg-white border-2 border-orange-500 text-orange-600 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden"
          >
            <span className="relative z-10">অর্ডার করুন</span>
            <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .product-slider {
          padding-bottom: 3.5rem !important;
        }
        .product-slider .swiper-pagination {
          bottom: 0 !important;
        }
        .product-slider .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #fdba74;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .product-slider .swiper-pagination-bullet-active {
          background-color: #f97316;
          opacity: 1;
          width: 24px;
          border-radius: 10px;
        }
        .product-slider .swiper-button-prev,
        .product-slider .swiper-button-next {
          background-color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        .product-slider .swiper-button-prev:hover,
        .product-slider .swiper-button-next:hover {
          background-color: #f97316;
          transform: scale(1.1);
        }
        .product-slider .swiper-button-prev:hover::after,
        .product-slider .swiper-button-next:hover::after {
          color: white;
        }
        .product-slider .swiper-button-prev::after,
        .product-slider .swiper-button-next::after {
          font-size: 18px;
          font-weight: bold;
          color: #f97316;
          transition: color 0.3s ease;
        }
        .product-slider .swiper-button-prev {
          left: -10px;
        }
        .product-slider .swiper-button-next {
          right: -10px;
        }
        @media (max-width: 768px) {
          .product-slider .swiper-button-prev,
          .product-slider .swiper-button-next {
            display: none;
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Sidler;
