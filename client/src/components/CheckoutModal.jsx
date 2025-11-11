// CheckoutModal.jsx
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaLock } from 'react-icons/fa';
import axios from 'axios';
import SuccessModal from './Modal/SuccessModal';
import Swal from 'sweetalert2';

function CheckoutModal({
  book,
  quantity,
  setQuantity,
  savings,
  totalPrice,
  formData,
  handleInputChange,
  setShowCheckout,
}) {
  const [showSuccess, setShowSuccess] = useState(false);
  // Add this new state at the top (inside component)
  const [orderIdInput, setOrderIdInput] = useState('');
  const [isOrderVerified, setIsOrderVerified] = useState(false);

  // 🔹 Radio field select handler
  const handleQuantityChange = e => {
    setQuantity(Number(e.target.value));
  };

  // 🔹 Function to generate unique order ID
  const generateOrderId = () => {
    const datePart = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `ORD-${datePart}-${randomPart}`;
  };

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'view_content',
      productId: book.id,
      booksName: book.title,
      price: book.price,
    });
  }, [book]);

  console.log(window.dataLayer);

  // 🔹 Handle form submit
  const handleSubmitOrder = async e => {
    e.preventDefault();

    const orderId = generateOrderId();
    const finalQuantity = book?.combo ? 10 : quantity;

    const order = {
      orderId, // unique order ID
      product: {
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        image: book.image,
      },
      combo: book.combo,
      quantity: finalQuantity, // from radio button
      savings,
      totalPrice,
      customer: formData,
      status: 'Pending',
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'purchase',
      orderId: orderId,
      product: {
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        image: book.image,
      },
      totalPrice: totalPrice,
      userEmail: formData.email,
      userPhone: formData.phone,
      combo: book.combo,
      quantity: finalQuantity,
    });

    console.log(window.dataLayer);

    try {
      const response = await axios.post(
        'https://rifibazar-7vuv.vercel.app/orders',
        order
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

  return (
    <div className="max-w-7xl mx-auto md:px-2 md:py-12 relative">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <button
            onClick={() => setShowCheckout(false)}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            <FaArrowLeft />
            <span>Back to Book</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Order Summary
            </h3>

            <div className="flex items-center space-x-4 mb-6">
              <img
                src={book.image}
                alt={book.title}
                className="object-cover rounded-lg shadow-md w-full h-48"
              />
            </div>

            <div className="flex justify-between py-5">
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  {book.title}
                </h4>
                <p className="text-gray-600 text-sm">by {book.author}</p>
              </div>
              <div>
                <p className="text-indigo-600 font-semibold text-lg">
                  {book.price} Tk
                </p>
              </div>
            </div>
            {/* Quantity Selector - Minimal */}
            {book?.combo === false && (
              <div className=" rounded-lg  mb-6 ">
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
                ? 'border-blue-500 bg-blue-500 text-white'
                : 'border-gray-300 text-gray-700 hover:border-gray-400'
            }
          `}
                    >
                      <input
                        type="radio"
                        name="quantity"
                        value={value}
                        checked={quantity === value}
                        onChange={handleQuantityChange}
                        className="hidden"
                      />
                      {value} Kg
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Price Breakdown */}
            <div className="space-y-3 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Unit Price</span>
                <span className="font-semibold">{book.price} Tk</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity</span>
                <span className="font-semibold">{quantity} Kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">
                  {isOrderVerified ? totalPrice * 0.5 : totalPrice}
                  Tk
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-green-600">FREE</span>
              </div>
              {savings > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">You Save</span>
                  <span className="font-semibold text-green-600">
                    {savings}
                    Tk{' '}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                <span>Total</span>
                <span className="text-indigo-600">
                  {isOrderVerified ? totalPrice * 0.5 : totalPrice}
                  Tk
                </span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 text-center">
                📦 Buy {quantity} Kg and get free shipping!
              </p>
            </div>
          </div>

          {/* Checkout Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Shipping & Payment
            </h3>
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Shipping Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter your complete shipping address"
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
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg 
               font-semibold hover:bg-blue-700 transition"
                >
                  Check
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#01662c] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#054923] transition duration-300 shadow-md hover:shadow-lg"
              >
                Complete Order -{' '}
                {isOrderVerified ? totalPrice * 0.5 : totalPrice}
                Tk
              </button>

              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <FaLock />
                <span className="text-sm">
                  Your payment is secure and encrypted
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <SuccessModal
          message={`✅ Order placed successfully! Order ID: ${generateOrderId()} for ${quantity} Kg of "${
            book.title
          }".`}
          onClose={handleSuccessClose}
        />
      )}
    </div>
  );
}

export default CheckoutModal;
