import { landingPages } from '../../data/landingPageConfig';
import ProductCard from '../../components/am/ProductCard';
import {
  Package,
  Sparkles,
  TrendingUp,
  Apple,
  Leaf,
  Truck,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero / Title Section for Home */}
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm mb-4">
            <Apple className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-semibold text-amber-700 tracking-wide">
              রাজশাহীর আমের রাজধানী
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            রাজশাহীর <span className="text-amber-600">সেরা আম</span> সরাসরি
            বাগান থেকে
          </h1>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            আমাদের নিজস্ব বাগানে উৎপাদিত রসালো, মিষ্টি ও সুগন্ধিযুক্ত আম। সরাসরি
            গাছ থেকে তোলা, কোনো কেমিক্যাল ছাড়াই। সারা দেশে ডেলিভারি দেওয়া হয়।
          </p>

          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Products Grid Section */}
      <div className="py-8 md:py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full mb-3">
              <Package className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-semibold text-amber-700 tracking-wide">
                আমের সেরা কালেকশন
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              আমাদের<span className="text-amber-600"> জনপ্রিয় আম </span>
              সমূহ
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              বেছে নিন আপনার পছন্দের মানসম্পন্ন আম
            </p>
            <div className="w-12 h-0.5 bg-amber-400 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {landingPages.map(item => (
              <ProductCard key={item.id} data={item.card} id={item.id} />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-8 px-4 bg-gradient-to-r from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <Apple className="w-6 h-6 text-amber-600" />
              </div>
              <p className="font-semibold text-gray-800 text-sm">
                বাগান থেকে তাজা
              </p>
              <p className="text-xs text-gray-500">সরাসরি সংগ্রহ</p>
            </div>
            <div className="text-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-semibold text-gray-800 text-sm">
                কেমিক্যাল ফ্রি
              </p>
              <p className="text-xs text-gray-500">প্রাকৃতিক উপায়ে</p>
            </div>
            <div className="text-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-semibold text-gray-800 text-sm">সেরা মানের</p>
              <p className="text-xs text-gray-500">গ্রেড-১ আম</p>
            </div>
            <div className="text-center p-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                <Truck className="w-6 h-6 text-orange-600" />
              </div>
              <p className="font-semibold text-gray-800 text-sm">
                দ্রুত ডেলিভারি
              </p>
              <p className="text-xs text-gray-500">সারা দেশে</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
