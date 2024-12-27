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
                    className="z-0 absolute inset-0 w-full h-full object-cover"
                    src="/Gifting.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="z-10 absolute inset-0 bg-black bg-opacity-30"></div>
                <div className="relative top-32 z-20 w-full text-center text-white bday_font">
                    <h1 className="mb-4 font-bold text-4xl md:text-7xl">
                        Gifting
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="z-0 absolute inset-0 w-full h-full object-cover"
                    src="/Gifting_Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="z-10 absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 mx-auto p-4 md:p-6 lg:p-8 xl:p-10 text-white bday_font2 container">
                    <div className="flex flex-col justify-centeri mb-4 md:mb-6 lg:mb-8 xl:mb-1 text-center0 tmst-center">
                        <h1 className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-bold text-3xl md:text-5xl lg:text-3xl">SDream Event Management</h1>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-2xl">Venue Details:</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-center">
                        <h2 className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-bold text-2xl md:text-4xl lg:text-3xl">Return Gift Arrangement:</h2>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">At SDream Event Management, we understand the importance of return gifts in making your event even more special. Our team of experts will help you choose the perfect return gifts for your guests, ensuring that they remember your event for a long time.</p>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">We offer a wide range of return gift options, including personalized items, decorative pieces, and gourmet treats. Our team will work closely with you to understand your preferences and budget, and suggest the most suitable return gifts for your event.</p>
                        <p className="mb-2 md:mb-4 lg:mb-6 xl:mb-8 font-medium text-lg md:text-xl lg:text-xl">Some of our popular return gift options include:</p>
                        <ul className="mb-4 md:mb-6 lg:mb-8 xl:mb-10 font-medium text-lg md:text-xl lg:text-xl">
                            <li>Personalized photo frames and albums</li>
                            <li>Customized candles and diffusers</li>
                            <li>Gourmet food and wine hampers</li>
                            <li>Decorative planters and vases</li>
                            <li>Handmade soaps and spa products</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gifting