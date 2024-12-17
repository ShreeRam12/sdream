import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { useNavigate } from "react-router-dom";
const Contactus = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "", // Add service to formData
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

    // WhatsApp API URL
    const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your WhatsApp number
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
      <div
        className="relative w-full h-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/your-background-image.jpg')", // Replace with your background image path
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 w-full max-w-4xl px-4 py-8 md:p-12 bg-white bg-opacity-90 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h2>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Select a Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
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

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
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
      </div>
      <Footer />
    </>
  );
};

export default Contactus;
