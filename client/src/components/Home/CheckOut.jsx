import React, { useState } from 'react';
import axios from 'axios';
import {
  CreditCard,
  Gift,
  ShoppingBag,
  ChevronRight,
  Plus,
  Minus,
  MapPin,
  Phone,
  Mail,
  User,
  Clock,
  Star,
} from 'lucide-react';

const CheckOut = () => {
  const products = [
    {
      id: 1,
      name: 'তেতুল আচার',
      nameEn: 'Tetul Achar',
      price: 250,
      image:
        'https://i.ibb.co.com/zh4J5bY1/prod-3736676-boroi-removebg-preview.png',
      badge: 'বেস্ট সেলার',
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: 'বরই আচার',
      nameEn: 'Boroi Achar',
      price: 220,
      image:
        'https://i.ibb.co.com/zh4J5bY1/prod-3736676-boroi-removebg-preview.png',
      badge: 'টক-মিষ্টি',
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 3,
      name: 'মিক্সড আচার',
      nameEn: 'Mixed Achar',
      price: 300,
      image:
        'https://i.ibb.co.com/zh4J5bY1/prod-3736676-boroi-removebg-preview.png',
      badge: 'স্পেশাল',
      rating: 4.9,
      reviews: 256,
    },
    {
      id: 4,
      name: 'আম আচার',
      nameEn: 'Aam Achar',
      price: 280,
      image:
        'https://i.ibb.co.com/zh4J5bY1/prod-3736676-boroi-removebg-preview.png',
      badge: 'টক ঝাল',
      rating: 4.7,
      reviews: 167,
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [qty, setQty] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const scrollOrderSummary = () => {
    const checkOut = document.getElementById('order-summary');
    if (checkOut) {
      checkOut.scrollIntoView({ behavior: 'smooth' });
    }
  };

  //  ONLY FIXED DELIVERY CHARGE
  const subtotal = selectedProduct.price * qty;
  const delivery = 160;
  const total = subtotal + delivery;

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setIsSubmitting(true);

    const orderData = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      address: formData.address,
      productName: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      qty: qty,
      total: total,
      status: 'processing',
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/orders`,
        orderData,
      );

      console.log('Order Saved:', res.data);
    } catch (error) {
      console.error(error);
      alert('Order failed!');
    } finally {
      setOrderPlaced(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        address: '',
        city: '',
        notes: '',
      });
    }
  };

  return (
    <div id="checkOut" className="min-h-screen ">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-12">
        {/* Header Section with Animation */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-lg mb-4">
            <CreditCard className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">
              সুরক্ষিত চেকআউট
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-700 to-amber-700 bg-clip-text text-transparent">
            আপনার অর্ডার নিশ্চিত করুন
          </h1>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            দেশের সেরা হাতের তৈরি আচার, সরাসরি আপনার দোরগোড়ায়
          </p>
        </div>

        {/* Product Selection Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                আপনার পছন্দের আচার বেছে নিন
              </h2>
            </div>
            <span className="text-sm text-gray-500 hidden sm:block">
              {products.length}টি আইটেম
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5">
            {products.map((product, idx) => (
              <div
                key={product.id}
                onClick={() => {
                  setSelectedProduct(product);
                  scrollOrderSummary();
                  setQty(1);
                }}
                className={`group cursor-pointer `}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="bg-white rounded-md overflow-hidden shadow-md ">
                  <div className="relative">
                    <div className="relative flex justify-center items-center h-40">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                        {product.badge}
                      </span>
                    </div>
                    {selectedProduct.id === product.id && (
                      <div className="absolute top-3 right-3 bg-green-500 rounded-full p-1 shadow-lg animate-bounce">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-gray-800 text-lg">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-400 mb-1">
                      {product.nameEn}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-yellow-500 text-sm mb-2">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-gray-700">{product.rating}</span>
                      <span className="text-gray-400 text-xs">
                        ({product.reviews})
                      </span>
                    </div>
                    <p className="text-orange-600 font-bold text-xl">
                      {product.price} TK
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Checkout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/*  LEFT: Order Summary Card */}
          <div id="order-summary" className="lg:col-span-1">
            <div className="bg-white rounded-md shadow-xl overflow-hidden sticky top-8 border border-gray-100">
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-5 text-white">
                <div className="flex items-center gap-2">
                  <Gift className="w-6 h-6" />
                  <h2 className="text-xl font-bold">অর্ডার সামারি</h2>
                </div>
                <p className="text-orange-100 text-sm mt-1">
                  আপনার নির্বাচিত আইটেম
                </p>
              </div>

              <div className="p-6">
                {/* Selected Product Card */}
                <div className="flex gap-4 items-center bg-orange-50 rounded-2xl p-4 mb-6">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-20 h-20 object-cover rounded-xl "
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-orange-600 font-bold text-xl">
                      {selectedProduct.price} Tk
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-500">
                        {selectedProduct.rating} ★
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quantity Control with modern design */}
                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3 mb-6">
                  <span className="font-semibold text-gray-700">পরিমাণ</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQty(q => (q > 1 ? q - 1 : 1))}
                      className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-200 text-orange-600 font-bold"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-xl w-8 text-center text-gray-800">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(q => q + 1)}
                      className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-200 text-orange-600 font-bold"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 border-b border-gray-100 pb-5">
                  <div className="flex justify-between text-gray-600">
                    <span>মূল্য ({qty} টি)</span>
                    <span>{subtotal} Tk</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center gap-1">
                      ডেলিভারি চার্জ{' '}
                    </span>

                    <span>{delivery} Tk</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-5 pb-6">
                  <span className="text-lg font-bold text-gray-800">
                    মোট বিল
                  </span>
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    ৳{total}
                  </span>
                </div>

                {/* Cash on delivery info */}
                <div className="mt-5 text-center text-xs text-gray-500 bg-gray-50 p-3 rounded-xl">
                  <p className="flex items-center justify-center gap-1">
                    <CreditCard className="w-3 h-3" /> ক্যাশ অন ডেলিভারি উপলব্ধ
                  </p>
                  <p className="mt-1">অর্ডার কনফার্মেশনের জন্য কল দেওয়া হবে</p>
                </div>
              </div>
            </div>
          </div>
          {/*RIGHT : Order Information Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-md shadow-xl p-6 md:p-8 border border-white/50">
              <div className="flex items-center gap-3 mb-6  border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  ডেলিভারি তথ্য
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all outline-none"
                    placeholder="আপনার নাম"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all outline-none"
                    placeholder="মোবাইল নম্বর"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all outline-none"
                    placeholder="ইমেইল (ঐচ্ছিক)"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="পূর্ণ ঠিকানা (বাড়ি/রাস্তা/জেলা)"
                    required
                  />
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-500 bg-amber-50 p-3 rounded-xl">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span>
                    অর্ডার করার ২৪ ঘন্টার মধ্যে ডেলিভারি দেওয়া হবে ইনশাআল্লাহ
                  </span>
                </div>
                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !formData.name ||
                    !formData.mobile ||
                    !formData.address
                  }
                  className={`w-full py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                    isSubmitting ||
                    !formData.name ||
                    !formData.mobile ||
                    !formData.address
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      প্রক্রিয়াকরণ...
                    </>
                  ) : (
                    <>
                      অর্ডার কনফার্ম করুন
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Order Success Toast */}
        {orderPlaced && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
              <div className="bg-white rounded-full p-1">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold">অর্ডার সফল হয়েছে!</p>
                <p className="text-sm text-green-100">
                  আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translate(-50%, 40px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default CheckOut;
