import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const Venue = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                {/* Background Video */}
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Venue.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

                {/* Header Content */}
                <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Venue
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Venue_Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

                <div className="relative z-10 bday_font2 container mx-auto p-4 md:p-6 lg:p-8 xl:p-10 text-white">
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h1 className="text-3xl md:text-5xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">SDream Event Management</h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Venue Details:</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Address: Saligramam, Chennai</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Capacity: 500 Guests</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Amenities: AC, Parking, Catering, Decorations</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">Description: Our venue is perfect for weddings, corporate events, and parties. With its elegant decor and state-of-the-art amenities, it's sure to impress your guests.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Accommodation Options:</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Hotel: Our luxurious hotel rooms offer the perfect blend of comfort and style, ensuring a relaxing stay for you and your guests.</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Private Party Hall: Our private party hall is designed to provide an intimate and exclusive setting for your special occasions, complete with personalized service and customized amenities.</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Resort: Escape to our serene resort, nestled in a tranquil setting, offering a range of activities and amenities to make your stay unforgettable.</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">Star Hotel: Experience the epitome of luxury at our star hotel, featuring lavish rooms, world-class dining, and exceptional service, making it the perfect choice for discerning guests.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">SDream in Chennai:</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Located in the heart of Chennai, SDream Event Management offers a unique blend of traditional hospitality and modern amenities, making it the ideal destination for your events and celebrations.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Venue