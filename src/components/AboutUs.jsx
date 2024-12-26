import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <div className="relative w-full h-96 overflow-hidden">
                    {/* Background Video */}
                    <video
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        src="/AboutUs_Video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

                    {/* Header Content */}
                    <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                        <h1 className="text-4xl md:text-7xl font-bold mb-4">
                            About US
                        </h1>
                    </div>
                </div>
                <div className='bday_font2 container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-7xl'>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center mb-8">
                        <img src="/AboutUs_Img.webp" alt="SDream Event Management" className="shadow-2xl rounded-3xl w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0 md:mr-4 lg:mr-4 xl:mr-4" />
                        <div className="text-md text-justify md:ml-4 lg:ml-4 xl:ml-4">
                            <p>Welcome to SDream Event Management, your premier partner for unforgettable birthday celebrations in Saligramam!</p>
                            <p>At SDream, we understand the importance of making your special day truly unforgettable. Our team of expert event planners will work closely with you to craft a customized celebration that exceeds your expectations.</p>
                            <p>From intimate gatherings to grand affairs, we offer a wide range of services to make your birthday party a memorable one. Our services include venue selection, catering, decorations, entertainment, and more.</p>
                            <p>We take pride in our attention to detail, ensuring that every aspect of your celebration is meticulously planned and executed. Our team is dedicated to providing exceptional service, making sure that your birthday party is truly unforgettable.</p>
                            <p>At SDream, we believe that every birthday is a special occasion, and we're committed to making yours truly unforgettable. Whether you're looking for a small, intimate gathering or a grand celebration, we have the expertise and resources to make it happen.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center mb-8 mt-10">
                        <div className="text-md text-justify md:mr-4 lg:mr-4 xl:mr-4">
                            <p>Our team is dedicated to providing exceptional service and attention to detail, ensuring that every aspect of your celebration is meticulously planned and executed.</p>
                            <p>At SDream, we believe that every birthday is a special occasion, and we're committed to making yours truly unforgettable.</p>
                            <p>We understand that every birthday is unique, and we work closely with our clients to understand their vision and preferences. Our team of expert event planners will work with you to create a customized celebration that exceeds your expectations.</p>
                        </div>
                        <img src="/AboutUs_Img2.webp" alt="Birthday Celebration" className="shadow-2xl rounded-3xl w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0" />
                    </div>
                </div>

            </div >
            <Footer />
        </>

    )
}

export default AboutUs