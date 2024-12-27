import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const Photography = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Photography.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Photography
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Photography_Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="relative z-10  bday_font2 container mx-auto p-4 md:p-6 lg:p-8 xl:p-10 text-white">
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h1 className="text-3xl md:text-5xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">SDream Birthday Event</h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Photography Services:</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Candid + Traditional Photoshoot:</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Our expert photographers will capture the essence of your special day with a mix of candid and traditional photoshoots, ensuring that every moment is preserved for a lifetime.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Unique Photo Booth Setup:</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Create unforgettable memories with our unique photo booth setup, complete with props and backdrops that will make your birthday event truly special.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Customizable Album Library:</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Choose from our extensive library of customizable albums, designed to perfectly capture the essence of your birthday event and preserve your memories for years to come.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Selfie Unit Setup:</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Take your birthday event to the next level with our selfie unit setup, complete with instant printing and social media sharing capabilities, ensuring that your guests have an unforgettable experience.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Photography