import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles.css";
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

    const whatsappNumber = "9025869175";
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
      <div className="relative flex flex-col justify-center items-center w-full h-auto overflow-hidden">
        {/* Background Video */}
        <div className="relative w-full h-96 overflow-hidden">
          {/* Background Video */}
          <video
            className="z-0 absolute inset-0 w-full h-full object-cover"
            src="/ContactUs_Video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          {/* Overlay */}
          <div className="z-10 absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Header Content */}
          <div className="relative top-32 z-20 w-full text-center text-white bday_font">
            <h1 className="mb-4 font-bold text-4xl md:text-7xl">Contact US</h1>
          </div>
        </div>
      </div>

      {/* Main Flex Section */}
      <div className="flex lg:flex-row flex-col items-start gap-8 px-4 py-8 w-full bday_font2">
        {/* Contact Form */}
        <div className="bg-white bg-opacity-90 shadow-lg p-6 rounded-lg w-full lg:w-1/2">
          <h2 className="mb-6 font-bold text-3xl text-gray-800">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-gray-700 text-left"
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
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full outline-none"
                placeholder="e.g., John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-700 text-left"
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
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full outline-none"
                placeholder="e.g., john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block mb-1 font-medium text-gray-700 text-left"
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
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full outline-none"
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
                className="block mb-1 font-medium text-gray-700 text-left"
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
                className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full outline-none"
                placeholder="Write your message here..."
                rows="4"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 focus:ring-opacity-50 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 w-full font-medium text-white focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full">
          <h3 className="mb-4 font-bold text-2xl text-black">Our Location</h3>
          <iframe
            className="border rounded-md w-full h-96"
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
