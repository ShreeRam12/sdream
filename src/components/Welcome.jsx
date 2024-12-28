import React from "react";
import "./styles.css";
const Welcome = () => {
  return (
    <div className="relative w-full h-screen">
      <video autoPlay loop muted className="top-0 left-0 absolute w-full h-full object-cover">
        <source src="/Sdream_Birthday_Video.mp4" type="video/mp4" />
      </video>
      {/* Overlay Content */}
      <div className="top-0 left-0 absolute flex flex-col justify-center items-center space-y-4 bg-black bg-opacity-50 p-4 w-full h-full">
        <h1 className="font-bold text-3xl text-center text-white md:text-7xl bday_font">
          <span className="text-red glow">B</span>
          <span className="text-orange delay-1 glow">i</span>
          <span className="text-yellow delay-2 glow">r</span>
          <span className="text-green delay-3 glow">t</span>
          <span className="text-blue delay-4 glow">h</span>
          <span className="text-indigo delay-5 glow">d</span>
          <span className="text-violet delay-6 glow">a</span>
          <span className="text-red delay-7 glow">y</span>
          <span className="text-orange delay-8 glow"> </span>
          <span className="text-yellow delay-9 glow">C</span>
          <span className="text-green delay-10 glow">e</span>
          <span className="text-blue delay-11 glow">l</span>
          <span className="text-indigo delay-12 glow">e</span>
          <span className="text-violet delay-13 glow">b</span>
          <span className="text-red delay-14 glow">r</span>
          <span className="text-orange delay-15 glow">a</span>
          <span className="text-yellow delay-16 glow">t</span>
          <span className="text-green delay-17 glow">i</span>
          <span className="text-blue delay-18 glow">o</span>
          <span className="text-indigo delay-19 glow">n</span>
        </h1>
        <p className="text-center text-lg text-white md:text-xl bday_font2">
          Get Ready for an Unforgettable Experience
        </p>
      </div>
    </div >
  );
};

export default Welcome;