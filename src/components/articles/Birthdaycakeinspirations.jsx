import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Birthdaycakeinspirations = () => {
  return (
    <>
      <Navbar />

      {/* Video Background with Overlay for Title and Intro Text */}
      <div className="relative w-full h-[50vh] flex items-center justify-center">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Delectable_Cake_Inspire.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 bg-black bg-opacity-50 text-white p-[118px] text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            🍰 Delectable Birthday Cake Inspirations 🎉
          </h1>
          <p className="text-lg md:text-2xl">
            Looking for the perfect birthday cake? Here are some delectable and creative ideas that will make your celebration truly unforgettable. From extravagant themed cakes to simple yet elegant designs, there's something for everyone!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 gradient_animation pb-32">
        {/* Theme-Based Cakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">🎈 Fantasy-Themed Cakes</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-100 text-lg max-w-3xl mx-auto">
            <li>
              <strong>Space Exploration Cake:</strong> A cake shaped like a rocket or with planets and stars, perfect for space enthusiasts.
            </li>
            <li>
              <strong>Under the Sea Cake:</strong> Bring the ocean to life with aquatic creatures like dolphins, fish, and corals, using vibrant colors.
            </li>
            <li>
              <strong>Fairy Tale Castle Cake:</strong> Create a magical castle with fondant towers, fairy figurines, and a glittering moat.
            </li>
          </ul>
        </section>

        {/* Minimalistic Cakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">🧁 Elegant Minimalistic Cakes</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-100 text-lg max-w-3xl mx-auto">
            <li>
              <strong>Geometric Cake:</strong> A sleek, modern design featuring clean lines, sharp angles, and a monochrome color palette.
            </li>
            <li>
              <strong>Rustic Buttercream Cake:</strong> A rough, textured buttercream finish with fresh berries or herbs for a rustic and simple elegance.
            </li>
          </ul>
        </section>

        {/* Personalized Cakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">🎁 Custom Personalized Cakes</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-100 text-lg max-w-3xl mx-auto">
            <li>
              <strong>Memory Lane Cake:</strong> Print a collage of family photos or significant moments onto the cake for a nostalgic feel.
            </li>
            <li>
              <strong>Custom Hobby Cake:</strong> Personalize the cake based on the birthday person's passion, such as baking, photography, or music.
            </li>
          </ul>
        </section>
      </div>


      <Footer />
    </>
  );
};

export default Birthdaycakeinspirations;
