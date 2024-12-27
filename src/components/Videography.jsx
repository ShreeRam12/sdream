import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const Videography = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Videography.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Videography
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Videography.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                <div className="relative z-10 bday_font2 container mx-auto p-4 md:p-6 lg:p-8 xl:p-10 text-white">
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">SDream Birthday Event Packages:</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Candid Photography: Our expert photographers will capture the most precious moments of your birthday celebration, ensuring that every smile, laugh, and tear is preserved forever.</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Traditional Photography: Our traditional photography package includes a dedicated photographer who will take posed and formal photos of you and your guests, creating timeless memories that will be cherished for years to come.</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Complete Video Shoot: Our team of videographers will capture every moment of your birthday celebration, from the cake cutting to the final farewell, ensuring that you have a beautiful video to treasure forever.</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">LED Live Visual Shoot: Our LED live visual shoot package includes a state-of-the-art LED screen that will display your favorite memories and moments in real-time, creating an immersive and engaging experience for you and your guests.</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">Final Digital Output Delivery: After the event, we will deliver a beautifully crafted digital album and video that you can share with your loved ones and treasure forever.</p>
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

export default Videography