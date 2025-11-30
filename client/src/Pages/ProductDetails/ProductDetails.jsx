import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import SuccessModal from '../../components/Modal/SuccessModal';

const ProductDetails = () => {
  const { id } = useParams();
  const [isOrderVerified, setIsOrderVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const [orderIdInput, setOrderIdInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!product) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'view_item',
      product_id: product.id,
      quantity: 1,
      item_name: product.title,
      price: product.price,
      item_brand: 'Rifi Bazar',
    });
  }, [product]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/single-products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Error fetching single product:', err));
  }, [id]);

  // ✅ Handle Coupon Check (10% discount)
  const handleCheckOrder = async e => {
    e.preventDefault();
    if (!orderIdInput.trim()) {
      alert('Please enter an Order ID');
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/orders/${orderIdInput}`
      );

      if (response.data?.orderId === orderIdInput) {
        setIsOrderVerified(true);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Order verified successfully! You got 10% discount.',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        setIsOrderVerified(false);
        alert('❌ Invalid Order ID.');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Order not found. Please check your Order ID.',
      });
      console.error('❌ Order not found or API error:', error);
      setIsOrderVerified(false);
    }
  };

  // ✅ Generate Unique Order ID
  const generateOrderId = () => {
    const datePart = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `ORD-${datePart}-${randomPart}`;
  };

  // ✅ Handle Input Changes
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Order Submit
  const handleSubmitOrder = async e => {
    e.preventDefault();
    setLoading(true); // SHOW LOADER
    if (!product) return;

    const orderId = generateOrderId();
    const deliveryCharge = quantity === 5 ? 0 : 99;
    const basePrice = product.price * quantity;
    const discountPrice = isOrderVerified ? basePrice * 0.9 : basePrice; // 10% discount
    const finalPriceToPay = discountPrice + deliveryCharge;

    const finalData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      status: 'pending',
      orderId: orderId,
      product: {
        title: product.title,
        image: product.image,
        details: product.details,
        description: product.description,
        combo: product.combo,
        price: finalPriceToPay,
        rating: product.rating,
        reviews: product.reviews,
      },
      quantity,
      total: finalPriceToPay, // Save final total price with discount + delivery
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        product_id: product.id,
        item_list_name: product.title,
        price: product.price,
      },
      currency: 'BDT',
      userEmail: formData.email,
      userPhone: formData.phone,
      combo: product.combo,
      quantity: quantity,
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/orders`,
        finalData
      );
      console.log('✅ Order Submitted:', response.data);
      setShowSuccess(true);
    } catch (error) {
      console.error('❌ API Error:', error);
      alert('Failed to submit order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessClose = () => setShowSuccess(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
      <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto ">
          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-6">
            <nav className="flex text-xs sm:text-sm text-gray-500 ml-2">
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
              <span className="mx-2">/</span>
              <a href="/#" className="hover:text-blue-600">
                Products
              </a>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-xs">
                {product.title}
              </span>
            </nav>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">
            {/* Left - Product Details */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative group bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 sm:h-64 lg:h-72 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.combo && (
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      🎁 COMBO OFFER
                    </span>
                  )}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-full shadow-md">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm sm:text-lg">
                        ⭐
                      </span>
                      <span className="font-bold text-gray-800 text-xs sm:text-base">
                        {product.rating}
                      </span>
                      <span className="text-gray-500 text-xs sm:text-sm">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2">
                    {product.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {product.price} Tk
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="line-through text-gray-500 text-lg sm:text-xl">
                          {product.originalPrice} Tk
                        </span>
                        <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs sm:text-sm font-medium">
                          Save {product.originalPrice - product.price} Tk
                        </span>
                      </>
                    )}
                  </div>

                  {!product.combo && (
                    <div className="mb-4 sm:mb-6">
                      <span className="block text-gray-700 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                        Quantity
                      </span>
                      <div className="flex gap-2">
                        {[1, 2, 3, 5].map(value => (
                          <label
                            key={value}
                            className={`flex-1 text-center py-2 sm:py-3 px-3 sm:px-4 rounded-md border cursor-pointer transition-colors text-xs sm:text-sm ${
                              quantity === value
                                ? 'bg-[#f48323] text-white'
                                : 'border-gray-300 text-gray-700 hover:border-gray-400'
                            }`}
                          >
                            <input
                              type="radio"
                              name="quantity"
                              value={value}
                              checked={quantity === value}
                              onChange={() => setQuantity(value)}
                              className="hidden"
                            />
                            {value} Kg
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">
                        Description
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Total Price / Order Summary */}
                <div className="bg-white mt-6 border border-gray-100 p-6 space-y-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Order Summary
                  </h3>

                  {/* Product Price */}
                  <div className="flex justify-between">
                    <span>Product Price</span>
                    <span>{product.price * quantity} Tk</span>
                  </div>

                  {/* Discount */}
                  {isOrderVerified && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount (10%)</span>
                      <span>
                        - {(product.price * quantity * 0.1).toFixed(0)} Tk
                      </span>
                    </div>
                  )}

                  {/* Delivery Charge */}
                  <div className="flex justify-between">
                    <span>Delivery Charge</span>
                    <span>{quantity === 5 ? 'Free' : '99 Tk'}</span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200"></div>

                  {/* Total */}
                  <div className="flex justify-between text-xl font-bold text-orange-600">
                    <span>Total</span>
                    <span>
                      {(
                        (isOrderVerified
                          ? product.price * quantity * 0.9
                          : product.price * quantity) +
                        (quantity === 5 ? 0 : 99)
                      ).toFixed(0)}{' '}
                      Tk
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Checkout Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 sticky top-4 sm:top-6">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      Complete Your Order
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Secure checkout with encrypted payment
                    </p>
                  </div>

                  <form
                    className="space-y-4 sm:space-y-6"
                    onSubmit={handleSubmitOrder}
                  >
                    {['name', 'email', 'phone', 'address'].map(field => (
                      <div key={field}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          {field === 'name'
                            ? 'Full Name'
                            : field === 'email'
                            ? 'Email Address'
                            : field === 'phone'
                            ? 'Phone Number'
                            : 'Shipping Address'}{' '}
                          *
                        </label>
                        {field === 'address' ? (
                          <textarea
                            name={field}
                            rows="5"
                            required
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                            placeholder="Enter your complete shipping address"
                          />
                        ) : (
                          <input
                            type={
                              field === 'email'
                                ? 'email'
                                : field === 'phone'
                                ? 'tel'
                                : 'text'
                            }
                            name={field}
                            required
                            value={formData[field]}
                            onChange={handleChange}
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                            placeholder={
                              field === 'email'
                                ? 'your@email.com'
                                : field === 'phone'
                                ? '+880 XXX XXX XXX'
                                : 'Enter your full name'
                            }
                          />
                        )}
                      </div>
                    ))}

                    {/* Coupon Code */}
                    <div className="flex gap-4 items-end">
                      <div className="flex-1">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Coupon Code
                        </label>
                        <input
                          type="text"
                          value={orderIdInput}
                          onChange={e => setOrderIdInput(e.target.value)}
                          placeholder="Enter Coupon Code"
                          className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleCheckOrder}
                        className="bg-[#f48323] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base mt-6 sm:mt-0 h-fit"
                      >
                        Apply
                      </button>
                    </div>

                    {/* Security Badge */}
                    <div className="flex items-center justify-center gap-2 text-gray-600 bg-gray-50 p-2 sm:p-3 rounded-lg">
                      <span className="text-xs sm:text-sm font-medium">
                        Cash on delivery
                      </span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 sm:py-4 rounded-md font-bold text-base sm:text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-center gap-2 sm:gap-3">
                        <FaLock className="text-white text-sm sm:text-base" />
                        <span>
                          Order -{' '}
                          {(
                            (isOrderVerified
                              ? product.price * quantity * 0.9
                              : product.price * quantity) +
                            (quantity === 5 ? 0 : 99)
                          ).toFixed(0)}{' '}
                          Tk
                        </span>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <SuccessModal
            message={`✅ Order placed successfully! Order ID: ${generateOrderId()} for ${quantity} Kg of "${
              product.title
            }".`}
            onClose={handleSuccessClose}
          />
        )}
      </div>
    </>
  );
};

export default ProductDetails;
