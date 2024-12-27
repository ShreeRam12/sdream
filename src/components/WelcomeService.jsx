import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const WelcomeSerivce = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-96 overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/Welcome_Service.webp"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        <div className="bday_font relative z-20 w-full top-32 text-center text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            Welcome Service
          </h1>
        </div>
      </div>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/Welcome_Service.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="bday_font2 relative bday_font2 z-10  p-4 md:p-6 lg:p-8 xl:p-10 text-white">
          <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            <h1 className="text-3xl md:text-5xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Welcome to SDream Birthday Event</h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Join us for an unforgettable celebration!</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Special Attractions for Girls:</h2>
            <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Get ready for a fun-filled evening with Cartoon Caricatures!</p>
            <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Enjoy a complimentary Welcome Drink, specially crafted for our lovely ladies!</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Event Highlights:</h2>
            <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Live Music Performance</p>
            <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Delicious Food and Beverages</p>
            <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Exciting Games and Activities</p>
            <p className="text-lg md:text-xl lg:text-xl  font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">Photo Booth and More!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WelcomeSerivce