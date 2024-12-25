import React from "react";
import "./styles.css";
const Welcome = () => {
  return (
    <div className="relative w-full h-screen">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/Sdream_Birthday_Video.mp4" type="video/mp4" />
      </video>
      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 p-4">
        <h1 className="bday_font text-white text-3xl md:text-7xl text-center font-bold ">
          <span className="text-red glow">B</span>
          <span className="text-orange glow delay-1">i</span>
          <span className="text-yellow glow delay-2">r</span>
          <span className="text-green glow delay-3">t</span>
          <span className="text-blue glow delay-4">h</span>
          <span className="text-indigo glow delay-5">d</span>
          <span className="text-violet glow delay-6">a</span>
          <span className="text-red glow delay-7">y</span>
          <span className="text-orange glow delay-8"> </span>
          <span className="text-yellow glow delay-9">C</span>
          <span className="text-green glow delay-10">e</span>
          <span className="text-blue glow delay-11">l</span>
          <span className="text-indigo glow delay-12">e</span>
          <span className="text-violet glow delay-13">b</span>
          <span className="text-red glow delay-14">r</span>
          <span className="text-orange glow delay-15">a</span>
          <span className="text-yellow glow delay-16">t</span>
          <span className="text-green glow delay-17">i</span>
          <span className="text-blue glow delay-18">o</span>
          <span className="text-indigo glow delay-19">n</span>
        </h1>
        <p className="bday_font2 text-white text-lg md:text-xl text-center">
          Get Ready for an Unforgettable Experience
        </p>
      </div>
    </div >
  );
};

export default Welcome;