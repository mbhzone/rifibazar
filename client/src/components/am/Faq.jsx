import { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
} from 'lucide-react';

export default function Faq({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto mb-8 md:mb-12 px-3 ">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            সাধারণ জিজ্ঞাসা
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            আপনার মনে যেকোনো প্রশ্নের উত্তর এখানে খুঁজে নিন। আরও কোনো কিছু
            জানতে চাইলে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 md:space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl md:rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? 'border-orange-200 shadow-lg shadow-orange-100/50'
                  : 'border-gray-100 hover:border-orange-100 hover:shadow-md'
              }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div
                    className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-orange-500 text-white'
                        : 'bg-orange-100 text-orange-500 group-hover:bg-orange-200'
                    }`}
                  >
                    <span className="text-xs md:text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span
                    className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                      openIndex === index
                        ? 'text-orange-600'
                        : 'text-gray-800 group-hover:text-orange-600'
                    }`}
                  >
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 md:w-5 md:h-5 text-orange-500 transition-all duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer Panel */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  <div className="flex gap-3 md:gap-4">
                    <div className="w-0.5 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>

                      {/* Optional: Additional info for certain FAQs */}
                      {item.additionalInfo && (
                        <div className="mt-3 p-3 bg-orange-50 rounded-lg">
                          <p className="text-xs md:text-sm text-orange-700">
                            💡 {item.additionalInfo}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
