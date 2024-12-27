import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const Catering = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Catering.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Catering
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-screen object-cover z-0"
                    src="/Catering_Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
                <div className="relative bday_font2 z-10 container mx-auto p-4 md:p-6 lg:p-8 xl:p-10 text-white">
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h1 className="text-3xl md:text-5xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">SDream Event Management</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Catering Services:</h2>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Veg Food Service: Our expert chefs prepare a wide range of delicious vegetarian dishes, from traditional Indian cuisine to international flavors.</p>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Non-Veg Food Service: Indulge in our mouth-watering non-vegetarian dishes, carefully crafted to satisfy your cravings.</p>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Food Live Counters: Experience the thrill of live cooking at our food counters, where our chefs prepare your favorite dishes right before your eyes.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Add-on Values:</h2>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Personalized Service: Our dedicated team ensures that every guest feels special and attended to.</p>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Customized Amenities: We offer a range of amenities, from decorations to entertainment, tailored to your specific needs.</p>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Special Packages: Take advantage of our exclusive packages, designed to make your event truly unforgettable.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Catering