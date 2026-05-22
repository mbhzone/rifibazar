import React, { useState } from 'react';
import {
  ShoppingBag,
  Truck,
  Shield,
  CreditCard,
  Minus,
  Plus,
  Package,
  User,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
  Star,
} from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Checkout = ({ selectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
  });
  const packages = selectedProduct?.checkout?.packages || [];
  const [selectedPackage, setSelectedPackage] = useState(packages[0] || null);
  const [qty, setQty] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate total based on selected package price and quantity
  const total = selectedPackage.price * qty;
  const finalTotal = total;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Prepare data for backend
    const orderData = {
      name: formData.name,
      mobile: formData.mobile,
      address: formData.address,
      productName: selectedProduct?.card?.title,
      price: selectedPackage.price, // Selected package price
      image: selectedProduct?.card?.image,
      qty: selectedPackage.value, // Send KG/Package size instead of quantity
      total: finalTotal,
      status: 'processing',
      orderDate: new Date().toISOString(),
    };
    console.log(orderData);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/orders`,
        orderData,
      );
      const data = res.data;
      if (data.message === 'Order saved successfully!') {
        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
          event: 'purchase',
          ecommerce: {
            transaction_id: Date.now().toString(),
            currency: 'BDT',
            value: finalTotal,

            customer_type: 'new',
            delivery_area: formData.address,
            payment_method: 'COD',

            items: [
              {
                item_id: selectedProduct.id,
                item_name: selectedProduct.card.title,
                item_brand: 'Rifi Bazar',
                item_category: 'Mango',
                item_variant: selectedPackage.label,
                price: selectedPackage.price,
                quantity: qty,
              },
            ],
          },
        });

        // Show success UI after GTM event
        Swal.fire({
          title: 'Success!',
          text: 'Order placed successfully',
          icon: 'success',
          background: '#fff',
          color: '#222',
          confirmButtonColor: '#f59e0b', // theme color
        });
        toast.success('Order saved successfully!');

        setFormData({ name: '', mobile: '', email: '', address: '' });
        setQty(1);
        setSelectedPackage(packages[0]);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="checkout" className="md:pb-16 max-w-7xl mx-auto ">
      <div className="">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            আপনার অর্ডার কনফার্ম করুন
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="">
          {/* Single Card Container */}
          <div className="bg-white  shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="p-5 md:p-6 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-amber-50">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-orange-500" />
                এই আমের সিজন কিন্তু অল্প কয়দিনের
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                দেরি করলে এই বছর এই আম আর পাবেন না
              </p>
            </div>

            {/* Two Column Layout Inside Card */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - ORDER SUMMARY */}
              <div className="border-r border-gray-100 px-3  py-5 md:p-6 space-y-6">
                {/* Product Image & Name */}
                <div className="flex gap-4 pb-4 border-b border-gray-100">
                  <img
                    src={selectedProduct?.card?.image}
                    alt={selectedProduct?.card?.name}
                    className="w-20 h-20 object-cover rounded-xl shadow-md"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {selectedProduct?.card?.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        (৭০০+ Happy Customer)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Package Selection */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Package className="w-4 h-4 text-orange-500" />
                    প্যাকেজ সিলেক্ট করুন
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {packages.map(pkg => (
                      <button
                        key={pkg.value}
                        onClick={() => setSelectedPackage(pkg)}
                        className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          selectedPackage.value === pkg.value
                            ? 'border-orange-500 bg-orange-50 shadow-md'
                            : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/50'
                        }`}
                      >
                        {pkg.popular && (
                          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            সাশ্রয়ী ও জনপ্রিয়
                          </span>
                        )}
                        <p className="font-bold text-gray-800 text-sm">
                          {pkg.label}
                        </p>
                        <p className="text-orange-600 font-semibold text-sm mt-1">
                          {pkg.price.toLocaleString()} TK
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Control */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-3">
                    পরিমাণ (প্যাকেজ)
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQty(prev => Math.max(1, prev - 1))}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all duration-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 min-w-[40px] text-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(prev => prev + 1)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all duration-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-gray-500">প্যাকেজ</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      প্যাকেজ মূল্য ({selectedPackage.label} × {qty})
                    </span>
                    <span className="font-semibold">
                      {total.toLocaleString()} Tk
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ডেলিভারি চার্জ</span>
                    <span className="text-green-600 font-semibold">
                      সারাদেশে ফ্রী
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800">মোট টাকা</span>
                      <span className="text-2xl font-bold text-orange-600">
                        {finalTotal.toLocaleString()} TK
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - CHECKOUT FORM */}
              <div className="px-3  py-5 md:p-6 bg-white">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-orange-500" />
                    চেকআউট ফর্ম
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    আপনার তথ্য সঠিকভাবে পূরণ করুন
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      name="name"
                      placeholder="আপনার নাম"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      name="mobile"
                      placeholder="মোবাইল নম্বর"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                    <textarea
                      name="address"
                      placeholder="ঠিকানা"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                      required
                    />
                  </div>
                  <div className="mt-3">
                    <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 px-3 py-2 rounded-r-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-sm">
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
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-gray-700">
                          <span className="text-green-600">
                            আগে একটা আম খাবেন{' '}
                          </span>
                          <span className="mx-1 text-gray-400">|</span>
                          <span className="text-gray-700">
                            ভালো লাগলে টাকা দিবেন
                          </span>
                          <span className="ml-1.5 bg-green-100 text-green-700 text-xs font-bold px-1.5 py-0.5 rounded">
                            Cash On Delivery
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3.5 rounded-xl font-semibold  shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        প্রক্রিয়াকরণ...
                      </>
                    ) : (
                      <>
                        অর্ডার কনফার্ম করুন
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Delivery Info Note */}
            <div className="p-4 bg-blue-50 flex items-start gap-2">
              <Truck className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-blue-700">
                অর্ডার কনফার্মেশনের ২৪-৭২ ঘন্টার মধ্যে ডেলিভারি দেওয়া হবে
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
