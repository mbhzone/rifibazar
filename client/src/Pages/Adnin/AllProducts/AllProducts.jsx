import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import {
  FaSearch,
  FaTrash,
  FaEye,
  FaPlus,
  FaBox,
  FaEdit,
  FaTimes,
} from 'react-icons/fa';

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/get-products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getProducts();
  }, []);

  const categories = [
    'Sunglasses',
    'Power Glasses',
    'Frame Collection',
    'Double Poly Sunglasses',
    'Polarized Sunglasses',
    'Ray-Ban Sunglass',
    'Corina Metal ',
    'Carbon Fiber',
    'TR90',
    'Lance Clear ',
    'Contact Lenses',
    'Fiver Frames',
    'Regular ',
  ];

  // Delete product
  const handleDelete = async id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `http://localhost:5000/products/${id}`
          );
          if (res.data.deletedCount > 0) {
            Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
            setProducts(prevProducts => prevProducts.filter(p => p._id !== id));
          }
        } catch (error) {
          console.error(error);
          Swal.fire('Error!', 'Something went wrong.', 'error');
        }
      }
    });
  };

  // View product modal
  const handleView = product => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Edit product modal
  const handleEdit = product => {
    setEditProduct({ ...product }); // clone the product object
  };

  const handleEditChange = e => {
    const { name, value } = e.target;
    setEditProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = async e => {
    e.preventDefault(); // prevent page reload
    try {
      const { _id, ...updateData } = editProduct; // use editProduct state
      const res = await axios.put(
        `http://localhost:5000/products/${_id}`,
        updateData
      );
      console.log('Update success:', res.data);

      // update local state
      setProducts(prev =>
        prev.map(p => (p._id === _id ? { ...p, ...updateData } : p))
      );

      setEditProduct(null);
      Swal.fire('Success!', 'Product updated successfully.', 'success');
    } catch (error) {
      console.error('Update error:', error);
      Swal.fire('Error!', 'Failed to update product.', 'error');
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
          <p className="text-gray-600">Manage your product inventory</p>
        </div>
        <button className="mt-4 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-md flex items-center hover:bg-blue-600">
          <FaPlus className="w-4 h-4 mr-2" />
          Add New Product
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-end">
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Products
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full lg:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              className="w-full lg:w-40 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterCategory}
              onChange={e => setFilterCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full lg:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <select
              className="w-full lg:w-40 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="price-high">Price: High to Low</option>
              <option value="price-low">Price: Low to High</option>
              <option value="sales">Sales</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products
                .filter(
                  p =>
                    (p.title || '')
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) &&
                    (filterCategory === 'all' || p.category === filterCategory)
                )
                .map(product => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-md object-cover"
                            src={product.image}
                            alt={product.title}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {product.title || 'No Name'}
                          </div>
                          <div className="text-sm text-gray-500">
                            {product.description || 'No description'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.combo === true ? 'Combo' : 'Single'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {Number(product.price || 0).toLocaleString()} Tk
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(product)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors duration-200 border border-blue-200 hover:border-blue-300"
                        >
                          <FaEye className="w-3 h-3" />
                          View
                        </button>

                        <button
                          onClick={() => handleEdit(product)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-green-600 bg-green-50 hover:bg-green-100 rounded-md transition-colors duration-200 border border-green-200 hover:border-green-300"
                        >
                          <FaEdit className="w-3 h-3" />
                          Edit
                        </button>

                        <button
                          onClick={() => handleDelete(product._id)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors duration-200 border border-red-200 hover:border-red-300"
                        >
                          <FaTrash className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <FaBox className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              No products found matching your criteria
            </p>
          </div>
        )}
      </div>

      {/* View Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl">
            {/* Header */}
            <div className="flex justify-between items-start p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {selectedProduct.title}
                </h2>
                {selectedProduct.combo && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    Combo Product
                  </span>
                )}
              </div>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
                onClick={handleCloseModal}
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Price
                    </label>
                    <p className="text-lg font-bold text-green-600">
                      {selectedProduct.price} Tk
                    </p>
                    {selectedProduct.originalPrice &&
                      selectedProduct.originalPrice !==
                        selectedProduct.price && (
                        <p className="text-sm text-gray-500 line-through">
                          {selectedProduct.originalPrice} Tk
                        </p>
                      )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-500">
                      Category
                    </label>
                    <p className="text-gray-700">{selectedProduct.category}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {selectedProduct.rating && (
                    <div>
                      <label className="text-sm font-medium text-gray-500">
                        Rating
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500">★</span>
                        <span className="text-gray-700">
                          {selectedProduct.rating}
                        </span>
                        {selectedProduct.reviews && (
                          <span className="text-sm text-gray-500">
                            ({selectedProduct.reviews})
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">
                  Description
                </label>
                <p className="text-gray-700 mt-1 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {selectedProduct.details && (
                <div>
                  <label className="text-sm font-medium text-gray-500">
                    Details
                  </label>
                  <p className="text-gray-700 mt-1 leading-relaxed">
                    {selectedProduct.details}
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 px-6 py-4">
              <button
                onClick={handleCloseModal}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editProduct && (
        <div className="fixed inset-0  flex justify-center items-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Edit Product
                </h2>
                <button
                  className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-all duration-200"
                  onClick={() => setEditProduct(null)}
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              <p className="text-blue-100 mt-2 text-sm">
                Update your product information
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleEditSubmit} className="p-6 space-y-6">
              {/* Title Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5h-2a3 3 0 00-3 3v8a3 3 0 003 3h6a3 3 0 003-3v-3m-7-8h.01M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Product Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={editProduct.title}
                  onChange={handleEditChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                  placeholder="Enter product title..."
                  required
                />
              </div>

              {/* Price Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                  Price *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    name="price"
                    value={editProduct.price}
                    onChange={handleEditChange}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              {/* Description Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <svg
                    className="w-4 h-4 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Description *
                </label>
                <textarea
                  name="description"
                  value={editProduct.description}
                  onChange={handleEditChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                  placeholder="Enter product description..."
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setEditProduct(null)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:-translate-y-0.5 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  Save Changes
                </button>
              </div>
            </form>

            {/* Footer Note */}
            <div className="bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                All fields marked with * are required
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
