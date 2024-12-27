import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const Invitation = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Invitation.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Invitation
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-full overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Invitation_Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                <div className="relative z-10 bday_font2 p-4 md:p-6 lg:p-8 xl:p-10 text-white">
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h1 className="text-3xl md:text-5xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">SDream Birthday Invitation in Chennai</h1>
                        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Design Your Dream Invitation</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Digital Invitation</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Create a stunning digital invitation with our expert designers and make your birthday party unforgettable.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8 text-white">Print Invitation</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Get your birthday party invitation printed with our high-quality printing services and make it a keepsake for your guests.</p>
                    </div>
                    <div className="flex flex-col items-center  justify-center text-center md:mb-6 lg:mb-8 xl:mb-32 ">
                        <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">SDream Birthday Invitation Packages</h2>
                        <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Choose from our exclusive birthday invitation packages and make your party planning a breeze.</p>
                        <div className="flex flex-wrap justify-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 lg:p-8 xl:p-10">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Package 1</h3>
                                <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Digital Invitation + Print Invitation</p>
                                <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">₹ 5,000</p>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 lg:p-8 xl:p-10">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Package 2</h3>
                                <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Digital Invitation + Print Invitation + Custom Design</p>
                                <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">₹ 10,000</p>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 lg:p-8 xl:p-10">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Package 3</h3>
                                <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Digital Invitation + Print Invitation + Custom Design + Premium Printing</p>
                                <p className="text-lg md:text-xl lg:text-xl font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">₹ 15,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Invitation