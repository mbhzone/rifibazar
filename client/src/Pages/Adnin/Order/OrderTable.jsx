import axios from 'axios';
import React, { useState } from 'react';
import {
  FaShoppingCart,
  FaEdit,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';

import { toast } from 'react-toastify';

const OrderTable = ({ order, setOrders }) => {
  const [newStatus, setNewStatus] = useState(order?.status || '');

  const handleUpdate = async () => {
    if (!newStatus || newStatus === 'all') return;

    try {
      await axios.patch(
        `https://rifibazar-7vuv.vercel.app/update-order/${order._id}`,
        { status: newStatus }
      );

      setOrders(prevOrders =>
        prevOrders.map(o =>
          o._id === order._id ? { ...o, status: newStatus } : o
        )
      );

      toast.success('Order updated successfully ✅');
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update order ❌');
    }
  };
  const statusConfig = {
    pending: { color: 'bg-yellow-100 text-yellow-800', icon: FaShoppingCart },
    processing: { color: 'bg-blue-100 text-blue-800', icon: FaEdit },
    delivered: { color: 'bg-green-100 text-green-800', icon: FaCheckCircle },
    cancel: { color: 'bg-red-100 text-red-800', icon: FaTimesCircle },
  };

  const getStatusBadge = status => {
    const config = statusConfig[status]; // status অনুযায়ী config নাও
    if (!config) return null; // unknown status হলে কিছু দেখাবে না

    const Icon = config.icon; // icon component
    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.color}`}
      >
        <Icon className="mr-1" />{' '}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <tr key={order._id} className="hover:bg-gray-50">
      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
        <div className="relative group">
          <div className="w-14 h-14 bg-gray-50 rounded-md overflow-hidden border border-gray-200 flex items-center justify-center shadow-sm">
            <img
              src={order?.product?.image}
              alt={order?.product?.title || 'Product'}
              className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-200"
              onError={e => {
                e.target.src =
                  'https://via.placeholder.com/56x56?text=No+Image';
              }}
            />
          </div>
          {order?.product?.title && (
            <div className="absolute hidden group-hover:block z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md whitespace-nowrap">
              {order.product.title}
            </div>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {order?.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {order?.address}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {order?.createdAt
          ? new Date(order.createdAt).toLocaleDateString()
          : '-'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {Number(order?.product?.price || 0).toLocaleString()} Tk
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {order?.phone || '-'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {order?.orderId || '-'}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {getStatusBadge(order?.status)}
      </td>

      <td className="whitespace-nowrap flex justify-center items-center mt-5">
        <select
          value={newStatus}
          onChange={e => setNewStatus(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">Select Status</option>
          <option value="pending">Pending</option>
          <option value="delivered">Delivered</option>
          <option value="cancel">cancel</option>
          <option value="processing">Processing </option>
        </select>

        <button
          onClick={handleUpdate}
          className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;
