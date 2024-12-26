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
          <div className="bday_font2 w-full sm:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <div className="flex justify-center items-center">
              <a href="/">
                <img src="/sdream.webp" alt="Sdream_Logo" className="h-8 w-8 md:h-10 md:w-20" />
              </a>
            </div>
            <p className="mt-2 text-gray-400">
              Making your special day unforgettable with our expert birthday services.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-1/3 lg:w-1/4  sm:mb-0">
            <h3 className="bday_font2 text-xl font-bold">Quick Links</h3>
            <ul className="bday_font2 space-y-5 mt-5">
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
          <div className="bday_font2 w-full sm:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className='space-y-5 mt-5'>
              <p className="text-gray-400 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Saligramam, Chennai, Tamil Nadu 600093
              </p>
              <p className="text-gray-400 flex items-center mt-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                9025869175
              </p>
              <p className="text-gray-400 flex items-center mt-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                eventssdream@gmail.com
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bday_font2 w-full sm:w-1/3 lg:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-xl font-bold ">Follow Us</h3>
            <div className="flex justify-center space-x-4 mt-5">
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
        <div className="bday_font2 mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; {new Date().getFullYear()} SDream Birthday. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
