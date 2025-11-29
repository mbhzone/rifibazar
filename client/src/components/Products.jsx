import React from 'react';
import { Link } from 'react-router';

const Products = ({ product }) => {
  const {
    title,
    _id,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    combo,
    createdAt,
    description,
  } = product;

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const renderStars = rating => {
    const numericRating = parseFloat(rating);
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-xs sm:text-sm ${
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
    <Link
      to={`/single-products/${_id}`}
      className="group relative bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full overflow-hidden border border-gray-100 flex flex-col"
    >
      {/* Product Badges */}
      <div className="absolute top-2 left-2 z-10 flex flex-col space-y-1 sm:space-y-2">
        {combo && (
          <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full shadow-md">
            COMBO
          </span>
        )}
        {discount > 0 && (
          <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full shadow-md">
            -{discount}% OFF
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        type="button"
        className="absolute top-2 right-2 z-10 bg-white hover:bg-red-500 text-gray-400 hover:text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110"
        onClick={e => e.preventDefault()} // Prevent navigation when clicking ♥
      >
        ♥
      </button>

      {/* Product Image */}
      <div className="relative h-40 sm:h-56 md:h-64 overflow-hidden">
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
      <div className="flex flex-col justify-between flex-grow p-3 sm:p-4 md:p-6">
        <div>
          <h3 className="font-bold text-sm sm:text-base md:text-lg text-green-700 mb-2 line-clamp-2">
            {title}
          </h3>

          <p className="hidden md:flex text-gray-600 text-sm mb-3">
            {description?.length > 100
              ? description.slice(0, 80) + '...'
              : description}
          </p>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1 sm:space-x-2">
              {renderStars(rating)}
              <span className="text-xs sm:text-sm text-gray-500">
                ({reviews})
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-400">
              {formatDate(createdAt)}
            </span>
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                {price} Tk
              </span>
              {originalPrice && price !== originalPrice && (
                <span className="text-sm sm:text-base text-gray-500 line-through">
                  {originalPrice} Tk
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Button always at bottom */}
        <button
          type="button"
          className="w-full bg-[#f48323] text-white text-sm sm:text-base py-2 sm:py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md mt-auto"
        >
          Order Now
        </button>
      </div>
    </Link>
  );
};

export default Products;
