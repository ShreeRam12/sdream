import React from "react";

const Welcome = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="/Sdream_Birthday_Video.mp4"
        autoPlay
        muted
        loop
      ></video>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl text-center font-bold">
          Welcome to SDream Birthday Website
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
