import { useNavigate } from 'react-router';
import { Eye, Star } from 'lucide-react';
import { useState } from 'react';

export default function ProductCard({ data, id }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className="group relative bg-white rounded-xs shadow-md overflow-hidden cursor-pointer flex flex-col h-full"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-56 object-cover transform transition-transform duration-700 group-hover:scale-110  "
        />

        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button
            onClick={e => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 hover:scale-105 hover:bg-orange-500 hover:text-white shadow-lg"
          >
            <Eye className="w-4 h-4" />
            দ্রুত দেখুন
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-2 md:p-5 flex flex-col flex-1">
        {/* Category */}
        {data.category && (
          <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full w-fit mb-2">
            {data.category}
          </span>
        )}

        {/* Date and Title Section - Premium Design */}
        <div className="space-y-2">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-orange-600 transition-colors">
            {data.title}
          </h3>

          {/* Delivery Date Highlight - Premium */}
          <div className="relative">
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-50 to-amber-50 px-3 py-2 rounded-lg border border-orange-200 shadow-sm">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-semibold text-orange-600 uppercase tracking-wide">
                  ডেলিভারি শুরু
                </p>
                <p className="text-sm font-bold text-gray-800 leading-tight">
                 2 জুন, ২০২৬
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="bg-green-100 px-2 py-0.5 rounded-full">
                  <span className="text-[9px] font-bold text-green-700">
                    সীমিত সময়
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-2 my-4">
          {data.shortDescription}
        </p>

        {/* 👇 FIXED BUTTON AREA */}
        <div className="mt-auto">
          <button
            onClick={e => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:from-orange-600 hover:to-amber-600 hover:shadow-lg"
          >
            বিস্তারিত দেখুন
          </button>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}
