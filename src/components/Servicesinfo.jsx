import React from "react";
import { useNavigate } from "react-router-dom";

const Servicesinfo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/services");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Service"
          className="w-full h-64 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-700 mb-6">
            We offer a wide range of services to make your special day
            unforgettable. From venue arrangements and decorations to catering
            and entertainment, we have everything you need to celebrate in
            style.
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            View Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Servicesinfo;
