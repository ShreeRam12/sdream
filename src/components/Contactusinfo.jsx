import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUsinfo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div className="mt-32 bg-gray-100 flex items-center justify-center">
      <div className="relative w-full h-96 overflow-hidden">
        {/* Background Video */}
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/ContactUS_Img.webp"
        ></img>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Header Content */}
        <div className="relative z-20 w-full top-32 text-center text-white bday_font2">
          <h1 className="bday_font text-4xl md:text-5xl font-bold mb-4">
            Contact US
          </h1>
          <p className="text-gray-700 mb-6 text-white">
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
