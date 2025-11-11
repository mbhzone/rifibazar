import { useState } from 'react';
import {
  FaCalendar,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaLeaf,
} from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    { name: 'Home', icon: <FaLeaf className="mr-2" /> },
    { name: 'Products', icon: <FaCalendar className="mr-2" /> },
    { name: 'Services', icon: <FaLeaf className="mr-2" /> },
    { name: 'About', icon: <FaCalendar className="mr-2" /> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-800 shadow-lg sticky top-0 z-50 md:py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-full">
              <FaLeaf className="text-white text-xl" />
            </div>
            <span className="text-white text-xl font-bold font-serif">
              Date Molasses
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {routes.map((route, index) => (
              <a
                key={index}
                href="#"
                className="text-green-100 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
              >
                {route.icon}
                {route.name}
              </a>
            ))}
          </div>

          {/* Cart & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-green-100 hover:text-white p-2 rounded-full hover:bg-green-700 transition duration-300">
              <FaShoppingCart className="text-lg" />
            </button>
            <button className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Shop Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="text-green-100 hover:text-white p-2">
              <FaShoppingCart className="text-lg" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-green-100 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Absolute positioning to appear above */}
        <div
          className={`
          md:hidden absolute top-16 left-0 right-0 bg-green-700 shadow-lg transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {routes.map((route, index) => (
              <a
                key={index}
                href="#"
                className="text-green-100 hover:text-white hover:bg-green-600 block px-4 py-3 rounded-md text-base font-medium transition duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {route.icon}
                {route.name}
              </a>
            ))}
            <div className="pt-2 px-2">
              <button className="w-full bg-green-600 hover:bg-green-500 text-white px-4 py-3 rounded-full text-base font-medium transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
