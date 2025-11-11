import React from 'react';
import { Link } from 'react-router';

const Products = ({ product }) => {
  const {
    title,
    _id,
    price,
    originalPrice,
    description,
    image,
    rating,
    reviews,
    combo,
    createdAt,
  } = product;

  // Calculate discount percentage
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  // Format date
  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Generate star rating
  const renderStars = rating => {
    const numericRating = parseFloat(rating);
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-sm ${
              index < numericRating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 max-w-sm overflow-hidden border border-gray-100">
      {/* Product Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col space-y-2">
        {combo && (
          <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            COMBO
          </span>
        )}
        {discount > 0 && (
          <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            -{discount}% OFF
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 bg-white hover:bg-red-500 text-gray-400 hover:text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110">
        ♥
      </button>

      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={e => {
            e.target.src = 'https://via.placeholder.com/300x300?text=No+Image';
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p>{description}</p>

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {renderStars(rating)}
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
          <span className="text-xs text-gray-400">
            Added {formatDate(createdAt)}
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              {price} Tk{' '}
            </span>
            {originalPrice && price !== originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                {originalPrice} Tk
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link to={`/single-products/${_id}`} className="w-full block">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
