import React, { useState } from 'react';
import {
  FaShoppingCart,
  FaEdit,
  FaCheckCircle,
  FaTimesCircle,
  FaEye,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import OrderViewModal from '../../../components/Modal/OrderViewModal';
import axios from 'axios';

const OrderTable = ({ order, setOrders }) => {
  const [newStatus, setNewStatus] = useState(order?.status || '');
  const [showModal, setShowModal] = useState(false);

  const handleUpdate = async () => {
    if (!newStatus || newStatus === 'all') return;

    try {
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/update-order/${order._id}`,
        { status: newStatus }
      );
      setOrders(prev =>
        prev.map(o => (o._id === order._id ? { ...o, status: newStatus } : o))
      );
      toast.success('Order updated successfully ✅');
    } catch (error) {
      toast.error('Failed to update order ❌');
      console.log(error);
    }
  };

  const statusConfig = {
    pending: { color: 'bg-yellow-100 text-yellow-800', icon: FaShoppingCart },
    processing: { color: 'bg-blue-100 text-blue-800', icon: FaEdit },
    delivered: { color: 'bg-green-100 text-green-800', icon: FaCheckCircle },
    cancel: { color: 'bg-red-100 text-red-800', icon: FaTimesCircle },
  };

  const getStatusBadge = status => {
    const config = statusConfig[status];
    if (!config) return null;
    const Icon = config.icon;
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
    <>
      <tr className="hover:bg-gray-50">
        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
          <div className="w-14 h-14 bg-gray-50 rounded-md overflow-hidden border border-gray-200 flex items-center justify-center shadow-sm">
            <img
              src={order?.product?.image}
              alt={order?.product?.title || 'Product'}
              className="w-full h-full object-contain p-1"
              onError={e =>
                (e.target.src =
                  'https://via.placeholder.com/56x56?text=No+Image')
              }
            />
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{order?.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
          {order?.address
            ? order.address.length > 15
              ? order.address.slice(0, 15) + '...'
              : order.address
            : '-'}
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          {order?.createdAt
            ? new Date(order.createdAt).toLocaleDateString()
            : '-'}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {Number(order?.product?.price || 0).toLocaleString()} Tk
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{order?.phone || '-'}</td>
        <td className="px-6 py-4 whitespace-nowrap">{order?.orderId || '-'}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {getStatusBadge(order?.status)}
        </td>

        <td className="flex items-center gap-2">
          <select
            value={newStatus}
            onChange={e => setNewStatus(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2"
          >
            <option value="all">Select Status</option>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="cancel">Cancel</option>
            <option value="processing">Processing</option>
          </select>

          <button
            onClick={handleUpdate}
            className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Update
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="ml-2 px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 flex items-center gap-1"
          >
            <FaEye /> View
          </button>
        </td>
      </tr>

      {showModal && (
        <OrderViewModal order={order} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default OrderTable;
