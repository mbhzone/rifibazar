import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';

const HeroCardSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8 lg:mb-10">
        কেন রিফি বাজারের খেজুর গুড় কিনবেন ?
      </h2>
      {/* Additional Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
        <div className="bg-white p-3 sm:p-6 rounded-md shadow-lg border border-amber-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4">🌿</div>
          <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
            শতভাগ প্রাকৃতিক
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            কেমিক্যাল ও ভেজালমুক্ত
          </p>
        </div>

        <div className="bg-white p-3 sm:p-6 rounded-md shadow-lg border border-amber-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ">
          <div className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4">🥄</div>
          <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
            ঐতিহ্যবাহী প্রস্তুত প্রণালী
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            মাটির চুলা, কাঠের আগুন আর দক্ষ হাতের স্পর্শে তৈরি
          </p>
        </div>

        <div className="bg-white p-3 sm:p-6 rounded-md shadow-lg border border-amber-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4 flex justify-center ">
            <FaBoxOpen />
          </div>
          <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
            নিরাপদ প্যাকেজিং ও মাননিয়ন্ত্রণ
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            সর্বোচ্চ হাইজিন ও প্রিমিয়াম প্যাকেজিং
          </p>
        </div>

        <div className="bg-white p-3 sm:p-6 rounded-md shadow-lg border border-amber-200 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-4">🚚</div>
          <h3 className="font-bold text-gray-900 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
            এক দেশ এক রেট
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm">
            সারাদেশে ৯৯ টাকায় হোম ডেলিভারি
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCardSection;
