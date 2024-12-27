import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const Gifting = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Gifting.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Gifting
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Venue_Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="relative bday_font2 container mx-auto p-4 md:p-6 lg:p-8 xl:p-10 text-white">
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h1 className="text-3xl md:text-5xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">SDream Event Management</h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Venue Details:</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Return Gift Arrangement:</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">At SDream Event Management, we understand the importance of return gifts in making your event even more special. Our team of experts will help you choose the perfect return gifts for your guests, ensuring that they remember your event for a long time.</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">We offer a wide range of return gift options, including personalized items, decorative pieces, and gourmet treats. Our team will work closely with you to understand your preferences and budget, and suggest the most suitable return gifts for your event.</p>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Some of our popular return gift options include:</p>
                        <ul className="text-lg md:text-xl lg:text-xl  font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                            <li>Personalized photo frames and albums</li>
                            <li>Customized candles and diffusers</li>
                            <li>Gourmet food and wine hampers</li>
                            <li>Decorative planters and vases</li>
                            <li>Handmade soaps and spa products</li>
                        </ul>
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

export default Gifting