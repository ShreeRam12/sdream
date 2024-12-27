import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
const Decoration = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-96 overflow-hidden">
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Decoration.webp"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font relative z-20 w-full top-32 text-center text-white">
                    <h1 className="text-4xl md:text-7xl font-bold mb-4">
                        Decoration
                    </h1>
                </div>
            </div>
            <div className="relative w-full h-screen overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/Decoration_Video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
                <div className="bday_font2 relative z-10 mt-10 flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-white">
                    <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Stage Decorations:</h2>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Customized Stage Backdrops: Choose from a variety of themes and designs to match your party's style. Our expert team will work closely with you to create a unique and personalized backdrop that reflects your child's personality and interests.</p>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Stage Lighting: Our expert team will set up a mesmerizing light show to create an unforgettable ambiance. From colorful LED lights to elegant fairy lights, we'll work with you to create a lighting design that complements your party's theme and style.</p>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Themed Stage Props: From fairy tale castles to superhero logos, we'll create a stage that's tailored to your child's interests. Our team will work with you to design and build custom stage props that will make your child's party truly unforgettable.</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                    <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Balloon Decorations:</h2>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Balloon Arch: Create a stunning entrance with our balloon arches, available in various colors and themes. Our team will work with you to design a custom balloon arch that matches your party's style and theme.</p>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Balloon Columns: Add a pop of color to your party with our balloon columns, perfect for photo ops and decorations. Our team will work with you to create custom balloon columns that match your party's theme and style.</p>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Balloon Centerpieces: Our balloon centerpieces are a great way to add a personal touch to your party tables. Our team will work with you to design custom balloon centerpieces that match your party's theme and style.</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                    <h2 className="text-2xl md:text-4xl lg:text-3xl  font-bold mb-2 md:mb-4 lg:mb-6 xl:mb-8">Theme Decorations:</h2>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Customized Banners: Create a personalized banner with your child's name and favorite theme. Our team will work with you to design a custom banner that matches your party's style and theme.</p>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Themed Tableware: From plates to cups, we'll provide themed tableware to match your party's style. Our team will work with you to choose the perfect tableware that complements your party's theme and style.</p>
                    <p className="text-lg md:text-xl lg:text-xl  font-medium mb-2 md:mb-4 lg:mb-6 xl:mb-8">Themed Backdrops: Choose from a variety of themed backdrops to create a unique and memorable photo booth experience. Our team will work with you to design a custom backdrop that matches your party's theme and style.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Decoration