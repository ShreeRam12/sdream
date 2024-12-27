import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const PreVideo = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="z-0 absolute inset-0 w-full h-full object-cover"
                    src="/Pre_Video_Making.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="z-10 absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative top-32 z-20 w-full text-center text-white bday_font">
                    <h1 className="mb-4 font-bold text-4xl md:text-7xl">
                      Pre Video Making
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="z-0 absolute inset-0 w-full h-full object-cover"
                    src="/PreVideo_Making.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="z-10 absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative z-10 mx-auto p-4 md:p-6 lg:p-8 xl:p-10 text-white bday_font2 container">
                    <div className="flex flex-col justify-center items-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-center">
                        <h1 className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-bold text-3xl md:text-5xl lg:text-3xl">SDream Event Management</h1>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-2xl">Venue Details:</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-center">
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">Address: Saligramam, Chennai</p>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">Capacity: 500 Guests</p>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">Amenities: AC, Parking, Catering, Decorations</p>
                        <p className="mb-4 md:mb-6 lg:mb-8 xl:mb-10 font-medium text-lg md:text-xl lg:text-xl">Description: Our venue is perfect for weddings, corporate events, and parties. With its elegant decor and state-of-the-art amenities, it's sure to impress your guests.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-center">
                        <h2 className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-bold text-2xl md:text-4xl lg:text-3xl">Accommodation Options:</h2>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">Hotel: Our luxurious hotel rooms offer the perfect blend of comfort and style, ensuring a relaxing stay for you and your guests.</p>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">Private Party Hall: Our private party hall is designed to provide an intimate and exclusive setting for your special occasions, complete with personalized service and customized amenities.</p>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">Resort: Escape to our serene resort, nestled in a tranquil setting, offering a range of activities and amenities to make your stay unforgettable.</p>
                        <p className="mb-4 md:mb-6 lg:mb-8 xl:mb-10 font-medium text-lg md:text-xl lg:text-xl">Star Hotel: Experience the epitome of luxury at our star hotel, featuring lavish rooms, world-class dining, and exceptional service, making it the perfect choice for discerning guests.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-center">
                        <h2 className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-bold text-2xl md:text-4xl lg:text-3xl">SDream in Chennai:</h2>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">Located in the heart of Chennai, SDream Event Management offers a unique blend of traditional hospitality and modern amenities, making it the ideal destination for your events and celebrations.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PreVideo