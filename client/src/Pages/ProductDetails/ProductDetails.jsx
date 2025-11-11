import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import SuccessModal from '../../components/Modal/SuccessModal';

const ProductDetails = () => {
  const { id } = useParams();
  const [isOrderVerified, setIsOrderVerified] = useState(false);
  const [orderIdInput, setOrderIdInput] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // All hooks at the top
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    fetch(`https://rifibazar-7vuv.vercel.app/single-products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error('Error fetching single product:', err));
  }, [id]);

  const handleCheckOrder = async e => {
    e.preventDefault();
    if (!orderIdInput.trim()) {
      alert('Please enter an Order ID');
      return;
    }

    try {
      const response = await axios.get(
        `https://rifibazar-7vuv.vercel.app/orders/${orderIdInput}`
      );

      if (response.data?.orderId === orderIdInput) {
        setIsOrderVerified(true);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: ' Order verified successfully! You got 50% discount.',
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

  // 🔹 Function to generate unique order ID
  const generateOrderId = () => {
    const datePart = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `ORD-${datePart}-${randomPart}`;
  };

  // 🔹 Handle form submit
  const handleSubmitOrder = async e => {
    e.preventDefault();

    const orderId = generateOrderId();
    const finalQuantity = product?.combo ? 10 : quantity;

    e.preventDefault();
    console.log(product);

    const finalData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      status: 'pending',

      product: {
        title: product.title,
        image: product.image,
        details: product.details,
        description: product.description,
        combo: product.combo,
        originalPrice: product.originalPrice,
        price: product.price,
        rating: product.rating,
        reviews: product.reviews,
      },
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'purchase',
      orderId: orderId,

      product: {
        id: product.id,
        title: product.title,
        author: product.author,
        price: product.price,
        image: product.image,
      },
      totalPrice: totalPrice,
      userEmail: formData.email,
      userPhone: formData.phone,
      combo: product.combo,
      quantity: finalQuantity,
    });

    console.log(window.dataLayer);

    try {
      const response = await axios.post(
        'https://rifibazar-7vuv.vercel.app/orders',
        finalData
      );
      console.log('✅ Order Submitted:', response.data);
      setShowSuccess(true);
    } catch (error) {
      console.error('❌ API Error:', error);
      alert('Failed to submit order. Please try again.');
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    setShowCheckout(false);
  };

  // Handle input changes
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm text-gray-500">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/#" className="hover:text-blue-600">
              Products
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">
              {product.title}
            </span>
          </nav>
        </div>

        <div className="flex max-w-7xl mx-auto border border-gray-100 shadow-sm">
          {/* Left side - Product Details */}
          <div className="w-1/2 space-y-6">
            <div className="relative group">
              {/* Product Image */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-t-md p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {product.combo && (
                <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  🎁 COMBO OFFER
                </span>
              )}

              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-md">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-lg">⭐</span>
                  <span className="font-bold text-gray-800">
                    {product.rating}
                  </span>
                  <span className="text-gray-500 text-sm">
                    ({product.reviews})
                  </span>
                </div>
              </div>

              {/* Product Information */}
              <div className="p-6 bg-white rounded-md">
                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h1>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {product.price} Tk
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="line-through text-gray-500 text-xl">
                        {product.originalPrice} Tk
                      </span>
                      <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm font-medium">
                        Save {product.originalPrice - product.price} Tk
                      </span>
                    </>
                  )}
                </div>

                {/* combo control */}
                {product.combo ? null : (
                  <div className="rounded-lg mb-6">
                    <span className="block text-gray-700 font-medium mb-3">
                      Quantity
                    </span>

                    <div className="flex gap-2">
                      {[1, 2, 3].map(value => (
                        <label
                          key={value}
                          className={`
          flex-1 text-center py-3 px-4 rounded-md border cursor-pointer transition-colors
          ${
            quantity === value
              ? 'bg-gradient-to-r from-[#007200] to-[#70e000] hover:from-[#035303] hover:to-[#61c003]  text-white'
              : 'border-gray-300 text-gray-700 hover:border-gray-400'
          }
        `}
                        >
                          <input
                            type="radio"
                            name="quantity"
                            value={value}
                            checked={quantity === value}
                            onChange={() => setQuantity(value)} // ✅ Add this line
                            className="hidden"
                          />
                          {value} Kg
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Details
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.details}
                    </p>
                  </div>
                </div>
                {/* Total Price */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      Total:
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {totalPrice} Tk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Checkout Form */}
          <div className="w-1/2">
            <div className="sticky top-6">
              <div className="bg-white rounded-t-md p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Complete Your Order
                  </h3>
                  <p className="text-gray-600">
                    Secure checkout with encrypted payment
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmitOrder}>
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+880 XXX XXX XXX"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Shipping Address *
                    </label>
                    <textarea
                      name="address"
                      required
                      rows="5"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Enter your complete shipping address with area, city, and zip code"
                    />
                  </div>
                  {/* Order ID Check Section */}
                  <div className="flex gap-4 items-end">
                    <div className="flex-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Order ID
                      </label>
                      <input
                        type="text"
                        value={orderIdInput}
                        onChange={e => setOrderIdInput(e.target.value)}
                        placeholder="Enter Order ID to check"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                 focus:border-transparent"
                      />
                    </div>

                    <button
                      onClick={handleCheckOrder}
                      className="bg-gradient-to-r from-[#f94144] to-purple-600 hover:from-[#dd2d4a] hover:to-purple-700 text-white px-6 py-3 rounded-lg 
               font-semibold  transition"
                    >
                      Check
                    </button>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-md font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <FaLock className="text-white" />
                      <span>
                        Complete Order -{' '}
                        {isOrderVerified ? totalPrice * 0.5 : totalPrice} Tk
                      </span>
                    </div>
                  </button>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-2 text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <FaLock className="text-green-600" />
                    <span className="text-sm font-medium">
                      256-bit SSL Encrypted Payment
                    </span>
                  </div>
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
  );
};

export default ProductDetails;
