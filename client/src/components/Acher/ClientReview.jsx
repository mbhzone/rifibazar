import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const fakeReviews = [
  {
    text: 'আচারের স্বাদটা একদম অসাধারণ, মনে হচ্ছে যেন মায়ের হাতের তৈরি আচার খাচ্ছি। ১০/১০!',
    author: 'তাহমিদ খান',
    position: 'ঢাকা ',
    rating: 5,
    image:
      'https://i.ibb.co.com/x8Kk3TqF/Screenshot-2026-04-18-211605.png',
  },
  {
    text: 'তেঁতুল আচারের টক-মিষ্টি ভাবটা জাস্ট দারুণ! জিভে জল আসার মতো স্বাদ, সবার ট্রাই করা উচিত',
    author: 'ফারিহা আক্তার',
    position: 'চট্টগ্রাম ',
    rating: 5,
    image:
      'https://i.ibb.co.com/qFc3gDVM/Screenshot-2026-04-18-211541.png',
  },
  {
    text: 'বেশ ভালো লেগেছে। এখন তো বাজারে এমন আচার পাওয়ায় যায়না,ধন্যবাদ তোমাদের',
    author: 'রাণী দেবী',
    position: 'রাজশাহী ',
    rating: 5,
    image:
      'https://i.ibb.co.com/5gtXHhsM/Screenshot-2026-04-18-211609.png',
  },
  {
    text: 'বই ফ্রেশ এবং অরিজিনাল টেস্ট। ঘরোয়া মসলার ঘ্রাণটা মুখে লেগে থাকার মতো',
    author: 'রাইহান মাহমূদ',
    position: 'সিলেট ',
    rating: 5,
    image:
      'https://i.ibb.co.com/CpxPfKd2/Screenshot-2026-04-18-211615.png',
  },
  {
    text: 'বাজারে সস্তা আচারের চেয়ে আপনাদেরটা অনেক গুণ ভালো। কোনো প্রিজারভেটিভ নেই সেটা খেয়েই বোঝা যাচ্ছে।',
    author: 'মিজানুর রহমান',
    position: 'খুলনা ',
    rating: 5,
    image:
      'https://i.ibb.co.com/93yXDKzY/Screenshot-2026-04-18-212828.png',
  },
  {
    text: 'আম্মুর জন্য নিয়েছিলাম। আম্মু বললো একদম তোর নানী এমন বানাতো',
    author: 'মোঃ হাসান ',
    position: 'বরিশাল ',
    rating: 4,
    image:
      'https://i.ibb.co.com/Hfbf4vXw/Screenshot-2026-04-18-212857.png',
  },
];

const ClientReview = () => {
  return (
    <div className="relative pt-10  overflow-hidden ">
      {/* Background Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div> */}

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            গ্রাহকদের মতামত
          </div> */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 tracking-tight">
            আমাদের
            <span className="relative inline-block ml-2">
              <span className="absolute inset-0 bg-indigo-200/60 skew-y-1 -z-10 rounded-lg"></span>
              গ্রাহকরা যা বলছেন
            </span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            শুধু আমাদের কথা নয় — আমাদের সন্তুষ্ট গ্রাহকদের মতামত শুনুন
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="client-review-swiper"
        >
          {fakeReviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="group h-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 relative border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                    <FaQuoteLeft className="text-4xl text-indigo-400" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, index) =>
                      index < review.rating ? (
                        <FaStar
                          key={index}
                          className="text-lg text-amber-400"
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-lg text-amber-400"
                        />
                      ),
                    )}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 flex-1">
                    "{review.text}"
                  </p>

                  {/* Author Section */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-sm opacity-60 group-hover:opacity-100 transition-opacity"></div>
                      <img
                        src={review.image}
                        alt={review.author}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white relative z-10"
                        onError={e => {
                          e.currentTarget.src =
                            'https://ui-avatars.com/api/?name=' +
                            encodeURIComponent(review.author) +
                            '&background=6366f1&color=fff&bold=true';
                        }}
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-800">
                        {review.author}
                      </h2>
                      <p className="text-sm text-indigo-500 font-medium">
                        {review.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .client-review-swiper {
          padding-bottom: 3rem !important;
        }
        .client-review-swiper .swiper-pagination {
          bottom: 0 !important;
          position: relative !important;
          margin-top: 2rem;
        }
        .client-review-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #c7d2fe;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .client-review-swiper .swiper-pagination-bullet-active {
          background-color: #6366f1;
          width: 24px;
          border-radius: 10px;
        }
        .client-review-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default ClientReview;
