import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import lib from './lib/fontawesome';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and About */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold">SDream Birthday</h2>
            <p className="mt-2 text-gray-400">
              Making your special day unforgettable with our expert birthday services.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300">Services</a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-gray-300">Blogs</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 123 Birthday St., Celebration City, Partyland 12345
            </p>
            <p className="text-gray-400 flex items-center mt-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> (123) 456-7890
            </p>
            <p className="text-gray-400 flex items-center mt-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@sdreambirthday.com
            </p>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-1/3 lg:w-1/4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 hover:text-gray-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 hover:text-gray-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} SDream Birthday. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
