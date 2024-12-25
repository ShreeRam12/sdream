import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER; // Use environment variable
    const whatsappMessage = `Hello, my name is ${formData.name}. My email is ${formData.email}. I am interested in ${formData.service}. Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");

    // Reset the form
    setFormData({ name: "", email: "", message: "", service: "" });
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full h-auto flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="relative w-full h-96 overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/ContactUs_Video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

          {/* Header Content */}
          <div className="relative z-20 w-full top-32 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact US
            </h1>
          </div>
        </div>
      </div>

      {/* Main Flex Section */}
      <div className="w-full  flex flex-col lg:flex-row gap-8 items-start px-4 py-8">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-white bg-opacity-90 shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g., John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Enter your email address"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="e.g., john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-gray-700 font-medium mb-1"
              >
                Select a Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                aria-label="Select a service"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Venue">Venue</option>
                <option value="Invitation">Invitation</option>
                <option value="Decoration">Decoration</option>
                <option value="Signages">Signages</option>
                <option value="Welcome Service">Welcome Service</option>
                <option value="Catering">Catering</option>
                <option value="Photography">Photography</option>
                <option value="Videography">Videography</option>
                <option value="Cake Arrangement">Cake Arrangement</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Gifting">Gifting</option>
                <option value="Pre Video Making">Pre Video Making</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Enter your message"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Write your message here..."
                rows="4"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-black">
            Our Location
          </h3>
          <iframe
            className="w-full h-96 border rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9478932787965!2d80.1954949!3d13.054037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526653e2f2e9fd%3A0x948c44eac7de0b7d!2sSdream%20Saligramam!5e0!3m2!1sen!2sin!4v1698248765432!5m2!1sen!2sin"
            title="Our Location on Google Maps"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
