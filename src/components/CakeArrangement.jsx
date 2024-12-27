import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const CakeArrangement = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Cake_Arrangement.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Cake Arrangement
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Cakearrangement.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="relative z-10 bday_font2 container mx-auto p-4 md:p-6 lg:p-8 xl:p-10 text-white flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 w-full md:w-2/3 lg:w-1/2 xl:w-2/3">
                        <h1 className="text-3xl md:text-5xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">SDream Birthday Event Management</h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Create Your Dream Birthday Cake Arrangement:</p>
                    </div>
                    <div className="container mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
                        <h1 className="text-3xl md:text-5xl lg:text-3xl font-bold mb-4">Design Your Perfect Birthday Cake:</h1>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">To create your dream birthday cake arrangement, start by selecting your cake style. You can choose from our classic round cake, modern square cake, or tiered masterpiece cake. Each style is carefully crafted to make your birthday celebration a memorable one.</p>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">Next, choose your cake flavor. Our options include strawberry shortcake, decadent chocolate, and lemon lavender dream. Each flavor is carefully selected to provide a unique and delicious taste experience.</p>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">To add a personal touch to your birthday cake arrangement, consider adding a custom message or inside joke. This will make your celebration truly unforgettable and special.</p>
                        <p className="text-lg md:text-xl lg:text-xl font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">At SDream Birthday Event Management, we're dedicated to making your birthday celebration a memorable one. Our team of experts will work with you to create a customized birthday cake arrangement that exceeds your expectations.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CakeArrangement