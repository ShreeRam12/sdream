import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const Entertainment = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Entertainment.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Entertainment
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Entertainment_Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font2 mt-32 relative z-10 flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-white">
                    <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Experience the Ultimate Fun and Games:</h2>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Get ready for an unforgettable experience at SDream Birthday Event! Our fun-filled activities are designed to cater to all ages and interests, ensuring that everyone has an amazing time. From thrilling games to exciting entertainment options, we have it all!</p>
                    <ul className="list-disc text-lg md:text-xl lg:text-xl  font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <li>Children's Play Area: A safe and exciting space for kids to play and learn, featuring a variety of toys, games, and activities that promote cognitive development and creativity.</li>
                        <li>Balloon Filling: Watch as our expert balloon artists create amazing balloon sculptures and designs, from simple hats to intricate animals and objects.</li>
                        <li>Cartoon Characters: Meet your favorite cartoon characters and take part in interactive games and activities, including photo opportunities, storytelling sessions, and more.</li>
                        <li>Face Painting: Let our talented face painters transform you into your favorite character or design, using a range of colors and techniques to create a unique and memorable experience.</li>
                        <li>Karaoke Contest: Show off your singing skills and compete against others in our karaoke contest, with prizes for the best performances.</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                    <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Kids' Zone: A World of Wonder and Discovery</h2>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Our Kids' Zone is designed to provide a fun and safe environment for children to play and learn, with a variety of activities and games that cater to different age groups and interests. From arts and crafts to science experiments, we have something for every curious mind.</p>
                    <ul className="list-disc text-lg md:text-xl lg:text-xl  font-medium mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                        <li>Arts and Crafts: Engage in a range of creative activities, including painting, drawing, and making crafts.</li>
                        <li>Science Experiments: Conduct fun and easy science experiments, such as making slime and creating volcanoes.</li>
                        <li>Storytelling Sessions: Listen to engaging stories and participate in interactive storytelling activities.</li>
                        <li>Outdoor Games: Play a range of outdoor games, including tag, hide and seek, and soccer.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Entertainment