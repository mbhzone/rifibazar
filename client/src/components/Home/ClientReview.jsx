import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';

const fakeReviews = [
  {
    text: 'আমাদের আচার একদম ঘরোয়া স্বাদের মতো হয়েছে। টেস্ট, গুণমান এবং প্যাকেজিং সবকিছুই অসাধারণ ছিল। বিক্রি অনেক বেড়ে গেছে।',
    author: 'রফিকুল ইসলাম',
    position: 'ঢাকা ',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
  {
    text: 'তেতুল আর আমের আচার এত ভালো হবে ভাবিনি। একদম মায়ের হাতের মতো স্বাদ। কাস্টমাররাও খুব পছন্দ করছে।',
    author: 'নাসরিন আক্তার',
    position: 'চট্টগ্রাম ',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    text: 'অসাধারণ মানের আচার সরবরাহ করেছে। সময়মতো ডেলিভারি এবং ভালো প্যাকেজিং আমাদের ব্যবসাকে অনেক এগিয়ে নিয়েছে।',
    author: 'মোঃ সোহেল রানা',
    position: 'রাজশাহী ',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    text: 'মরিচের আচারটা একদম পারফেক্ট ঝাল আর টেস্টের ব্যালেন্স। কাস্টমাররা বারবার অর্ডার দিচ্ছে।',
    author: 'আব্দুল করিম',
    position: 'সিলেট ',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  },
  {
    text: 'এই আচারগুলো খাওয়ার পর আমাদের দোকানের রিভিউ অনেক ভালো হয়েছে। কোয়ালিটি সত্যিই প্রিমিয়াম লেভেলের।',
    author: 'তানিয়া রহমান',
    position: 'খুলনা ',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
  },
  {
    text: 'টক-ঝাল আচার একদম অসাধারণ। বাংলাদেশের ঘরোয়া স্বাদ ঠিক রেখে তৈরি করা হয়েছে। সবাই খুব পছন্দ করছে।',
    author: 'মোঃ হাসান আলী',
    position: 'বরিশাল ',
    rating: 4,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
];

const ClientReview = () => {
  return (
    <div className="relative pt-10  overflow-hidden ">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            গ্রাহকদের মতামত
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 tracking-tight">
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
