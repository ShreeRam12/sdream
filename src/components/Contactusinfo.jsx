import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUsinfo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Contact Us"
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-6">
            Reach out to us for any inquiries, feedback, or support. Our team is always here to assist you with your needs and ensure your experience with us is exceptional.
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsinfo;
