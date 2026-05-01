import React from 'react';
import {
  Apple,
  Landmark,
  Utensils,
  MapPin,
  Award,
  Star,
  TrendingUp,
  Clock,
} from 'lucide-react';

// Import your images (make sure paths are correct)
import RajshahiCityImage from '../../assets/rajshahi-city.jpg'; // Add your Rajshahi city image
import KalavunaImage from '../../assets/kalavuna.jpg'; // Add your Kalavuna food image
import MangoGardenImage from '../../assets/mango-garden.webp'; // Add your mango garden image

const AboutRajshahi = () => {
  return (
    <section className="pt-16  px-4 bg-gradient-to-b from-white via-orange-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-600 tracking-wide">
              রাজশাহী — আমের রাজধানী
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            রাজশাহী
            <span className="relative inline-block mx-2">
              <span className="absolute inset-0 bg-orange-200/50 skew-y-1 -z-10 rounded-lg"></span>
              <span className="text-orange-600"> আমের রাজধানী</span>
            </span>
            <span className="text-amber-600">আচারের জন্মভূমি</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            রাজশাহী শুধু একটি শহর নয়, এটি একটি ঐতিহ্য। এখানেই জন্ম নেয় দেশের
            সেরা আচারের স্বাদ।
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1 - Rajshahi City */}
          <div className="group relative bg-white rounded-md shadow-lg overflow-hidden ">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src={RajshahiCityImage}
                alt="Rajshahi City"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <Landmark className="w-5 h-5 text-orange-600" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-semibold">রাজশাহী সিটি</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                ঐতিহাসিক শহর
              </h3>
              <p className="text-gray-600 leading-relaxed">
                রেশম, ইতিহাস ও সংস্কৃতির শহর রাজশাহী। পর্যটকদের কাছে এক অনন্য
                গন্তব্য যেখানে মিশেছে শত বছরের ঐতিহ্য।
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-orange-600">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">প্রাচীন ঐতিহ্যের লীলাভূমি</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Mango Garden */}
          <div className="group relative bg-white rounded-md shadow-lg overflow-hidden ">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src={MangoGardenImage}
                alt="Mango Garden"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <Apple className="w-5 h-5 text-orange-600" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <div className="flex items-center gap-2 text-white">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold">সেরা আমের উৎস</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                সেরা আমের উৎস
              </h3>
              <p className="text-gray-600 leading-relaxed">
                বাংলাদেশের সেরা আম রাজশাহী থেকে। আমাদের আচার তৈরি হয় সরাসরি
                নিজস্ব বাগানের তাজা আম ও ফলমূল দিয়ে।
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-orange-600">
                <Award className="w-4 h-4" />
                <span className="font-medium">গুণগত মানের নিশ্চয়তা</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Kalavuna */}
          <div className="group relative bg-white rounded-md shadow-lg overflow-hidden ">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src={KalavunaImage}
                alt="Famous Kalavuna of Rajshahi"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <Utensils className="w-5 h-5 text-orange-600" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">বিখ্যাত খাবার</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                বিখ্যাত কালাভুনা
              </h3>
              <p className="text-gray-600 leading-relaxed">
                রাজশাহীর কালাভুনা বাংলাদেশের অন্যতম সেরা ও ঐতিহ্যবাহী খাবার।
                গিভঅ্যাওয়ের বিজয়ীরা উপভোগ করবেন এই বিশেষ পদ।
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-orange-600">
                <Utensils className="w-4 h-4" />
                <span className="font-medium">প্রাচীন রেসিপিতে তৈরি</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRajshahi;
