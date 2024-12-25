import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const Servicesinfo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/services");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white overflow-hidden  w-full">
        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-5xl font-bold mb-4 bday_font">Our Services</h1>
          <p className="text-gray-700 mb-6 bday_font2">
            We offer a wide range of services to make your special day
            unforgettable. From venue arrangements and decorations to catering
            and entertainment, we have everything you need to celebrate in
            style.
          </p>
          <button
            onClick={handleButtonClick}
            className="bday_font2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            View Our Services
          </button>
        </div>
        {/* Video Section */}
        <video
          src="/Service_Info.mp4"
          className="w-full h-96 rounded-lg shadow-lg"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Servicesinfo;
