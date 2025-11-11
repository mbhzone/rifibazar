import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {
  FaUpload,
  FaTrash,
  FaImage,
  FaTag,
  FaStar,
  FaDollarSign,
  FaInfoCircle,
} from 'react-icons/fa';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    combo: false,
    price: '',
    originalPrice: '',
    rating: '',
    reviews: '',
    description: '',
    details: '',
    image: '',
  });

  const [isUploading, setIsUploading] = useState(false);

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      Swal.fire({
        title: 'Invalid File',
        text: 'Please upload an image file',
        icon: 'error',
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      Swal.fire({
        title: 'File Too Large',
        text: 'Please upload an image smaller than 5MB',
        icon: 'error',
      });
      return;
    }

    setIsUploading(true);
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'Tech_Bazar');

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dkfxcjixb/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const urlData = await res.json();
      if (urlData.secure_url) {
        setProductData(prev => ({ ...prev, image: urlData.secure_url }));
        Swal.fire({
          title: 'Success!',
          text: 'Image uploaded successfully',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.error('Upload failed', err);
      Swal.fire({
        title: 'Upload Failed',
        text: 'Failed to upload image. Please try again.',
        icon: 'error',
      });
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    Swal.fire({
      title: 'Remove Image?',
      text: 'Are you sure you want to remove this image?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, remove it!',
    }).then(result => {
      if (result.isConfirmed) {
        setProductData(prev => ({ ...prev, image: '' }));
      }
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Basic validation
    if (!productData.title.trim()) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Product title is required',
        icon: 'error',
      });
      return;
    }

    if (!productData.price) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Product price is required',
        icon: 'error',
      });
      return;
    }

    const finalData = {
      ...productData,
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await fetch('https://rifibazar-7vuv.vercel.app/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      if (res.ok) {
        Swal.fire({
          title: 'Product Added!',
          text: 'Your product has been successfully added.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });

        setProductData({
          title: '',
          combo: false,
          price: '',
          originalPrice: '',
          rating: '',
          reviews: '',
          description: '',
          details: '',
          image: '',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong while adding the product.',
        icon: 'error',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-0">
      <div className=" ">
        {/* Header */}
        <div className=" mb-8 pl-2 md:pl-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Add New Product
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl text-left">
            Fill in the details below to add a new product to your collection.
            All fields marked with * are required.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white  shadow-2xl py-6 sm:py-8 transition-all duration-300 hover:shadow-2xl"
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Left Column - Product Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6  border border-blue-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FaInfoCircle className="text-blue-500" />
                  Product Information
                </h2>

                {/* Title */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                    <FaTag className="text-blue-500 w-3 h-3" />
                    Product Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={productData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
                    placeholder="Enter product title..."
                  />
                </div>

                {/* Combo Checkbox */}
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 mb-6">
                  <input
                    type="checkbox"
                    name="combo"
                    checked={productData.combo}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm font-medium text-gray-700">
                    This is a combo product
                  </label>
                </div>

                {/* Prices */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                      <FaDollarSign className="text-green-500 w-3 h-3" />
                      Price *
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={productData.price}
                      onChange={handleInputChange}
                      required
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Original Price
                    </label>
                    <input
                      type="number"
                      name="originalPrice"
                      value={productData.originalPrice}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                {/* Rating & Reviews */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                      <FaStar className="text-yellow-500 w-3 h-3" />
                      Rating
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="5"
                      name="rating"
                      value={productData.rating}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                      placeholder="4.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Reviews
                    </label>
                    <input
                      type="number"
                      name="reviews"
                      value={productData.reviews}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="120"
                    />
                  </div>
                </div>
                {/* Description & */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Product Description *
                    </label>
                    <textarea
                      name="description"
                      value={productData.description}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Describe your product in detail..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Media & Details */}
            <div className="space-y-6">
              {/* Image Upload */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6  border border-purple-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <FaImage className="text-purple-500" />
                  Product Image
                </h2>

                {productData.image ? (
                  <div className="text-center">
                    <div className="relative inline-block group">
                      <img
                        src={productData.image}
                        alt="Uploaded product"
                        className="w-48 h-48 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 shadow-lg hover:bg-red-600 transition-colors duration-200"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-green-600 mt-3 font-medium">
                      ✓ Image uploaded successfully
                    </p>
                  </div>
                ) : (
                  <div className="border-3 border-dashed border-gray-300 rounded-xl p-8 text-center transition-all duration-300 hover:border-purple-400 hover:bg-purple-50">
                    <div className="flex flex-col items-center justify-center">
                      {isUploading ? (
                        <div className="animate-pulse flex flex-col items-center">
                          <div className="w-12 h-12 bg-purple-200 rounded-full mb-3"></div>
                          <p className="text-sm text-purple-600 font-medium">
                            Uploading...
                          </p>
                        </div>
                      ) : (
                        <>
                          <FaUpload className="w-12 h-12 text-gray-400 mb-4" />
                          <p className="text-lg font-semibold text-gray-700 mb-2">
                            Upload Product Image
                          </p>
                          <p className="text-sm text-gray-500 mb-4 max-w-xs">
                            Supports JPG, PNG, WEBP - Max 5MB
                          </p>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="image-upload"
                          />
                          <label
                            htmlFor="image-upload"
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-semibold cursor-pointer hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                          >
                            Choose Image
                          </label>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
              {/*  Details */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Details
                </label>
                <textarea
                  name="details"
                  value={productData.details}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Add specifications, features, or other details..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                Fields marked with * are required
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 min-w-[200px] justify-center"
              >
                <FaUpload className="w-5 h-5" />
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
