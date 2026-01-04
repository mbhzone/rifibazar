import React from 'react';
import {
  FaTimes,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaBox,
  FaCalendar,
  FaTag,
  FaShoppingCart,
  FaMoneyBill,
} from 'react-icons/fa';

const OrderViewModal = ({ order, onClose }) => {
  if (!order) return null;

  // Format date for better display
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Calculate total
  const totalPrice = (order?.product?.price || 0) * (order?.quantity || 1);

  // Status color mapping
  const getStatusColor = status => {
    switch (status?.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Order Details</h2>
              <p className="text-blue-100 mt-1">
                Order #{order?.orderId || 'N/A'}
              </p>
            </div>
            <button
              className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200"
              onClick={onClose}
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Status Badge */}
          <div className="mt-4 flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                order?.status
              )}`}
            >
              {order?.status || 'Unknown'}
            </span>
            <span className="text-sm text-white/80">
              {formatDate(order?.createdAt)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className=" overflow-y-auto p-6">
          <div className="">
            {/* Product Section */}
            <div className="">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FaBox className="text-blue-500" /> Product Information
                </h3>

                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-shrink-0">
                    <img
                      src={
                        order?.product?.image ||
                        'https://via.placeholder.com/150'
                      }
                      alt={order?.product?.title}
                      className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg shadow-md"
                      onError={e => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/150';
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {order?.product?.title || 'Product Name'}
                    </h4>

                    <div className="space-y-3 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 flex items-center gap-2">
                          <FaMoneyBill className="text-green-500" /> Unit Price
                        </span>
                        <span className="font-semibold">
                          {Number(order?.product?.price || 0).toLocaleString()}{' '}
                          ৳
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 flex items-center gap-2">
                          <FaShoppingCart className="text-blue-500" /> Quantity
                        </span>
                        <span className="font-semibold">
                          {order?.quantity || 1}
                        </span>
                      </div>

                      <div className="border-t border-gray-200 pt-3">
                        <div className="flex justify-between items-center text-lg">
                          <span className="text-gray-700 font-semibold">
                            Total
                          </span>
                          <span className="font-bold text-xl text-purple-600">
                            {totalPrice.toLocaleString()} ৳
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer & Order Info */}
            <div className="flex">
              {/* Customer Info */}
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FaUser className="text-purple-500" /> Customer Details
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FaUser className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">
                        {order?.name || 'Not provided'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaPhone className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">
                        {order?.phone || 'Not provided'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium">
                        {order?.address || 'Not provided'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Info */}
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FaTag className="text-green-500" /> Order Info
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <FaTag className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Order ID</p>
                      <p className="font-medium">{order?.orderId || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaCalendar className="text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-500">Order Date</p>
                      <p className="font-medium">
                        {formatDate(order?.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderViewModal;
