import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaShippingFast,
  FaLock,
  FaHeadset,
  FaRecycle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaLeaf,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-full">
                <FaLeaf className="text-white text-xl" />
              </div>
              <span className="text-white text-xl font-bold font-serif">
                Date Molasses
              </span>
            </div>
            <p className="text-green-100 text-sm lg:text-base leading-relaxed mb-6">
              Your trusted partner for quality books and literary resources. We
              bring the world of knowledge to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaFacebook className="text-white" />
              </a>
              <a
                href="#"
                className="bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="bg-green-700 hover:bg-green-600 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6 pb-2 border-b-2 border-green-600 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Products'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-green-100 hover:text-white transition-all duration-300 group"
                  >
                    <FaArrowRight className="text-green-400 text-xs group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-sm lg:text-base">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold text-white mb-6 pb-2 border-b-2 border-green-600 inline-block">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-green-100 text-sm lg:text-base">
                  123 Book Street
                  <br />
                  Knowledge City, KC 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-400 flex-shrink-0" />
                <p className="text-green-100 text-sm lg:text-base">
                  +1 (555) 123-4567
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-400 flex-shrink-0" />
                <p className="text-green-100 text-sm lg:text-base">
                  info@bookhaven.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 bg-green-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-3 lg:space-y-0">
            <p className="text-green-300 text-sm lg:text-base text-center lg:text-left">
              © 2024 BookHaven. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4 lg:space-x-6 text-sm">
              {['Terms of Service', 'Privacy Policy', 'Cookies'].map(item => (
                <a
                  key={item}
                  href="#"
                  className="text-green-300 hover:text-white transition-colors duration-300 text-xs lg:text-sm whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
