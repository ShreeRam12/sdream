import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const Servicesinfo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/services");
  };

  return (
    <div className="flex justify-center items-center mx-auto min-h-screen container">
      <div className="bg-white w-full overflow-hidden">
        {/* Content Section */}
        <div className="p-8">
          <h1 className="mb-4 font-bold text-5xl bday_font">Our Services</h1>
          <p className="mb-6 text-gray-700 bday_font2">
            We offer a wide range of services to make your special day
            unforgettable. From venue arrangements and decorations to catering
            and entertainment, we have everything you need to celebrate in
            style.
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white transition bday_font2"
          >
            View Our Services
          </button>
        </div>
        {/* Video Section */}
        <video
          src="/Service_Info.mp4"
          className="shadow-lg rounded-lg w-full h-96 object-cover"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Servicesinfo;
