import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../styles.css';
const Birthdaycakeidea = () => {
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
          <source src="/Creative_Cake_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="relative z-10 bg-black bg-opacity-50 text-white p-[118px] text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            🎂 Creative and Unique Birthday Cake Ideas 🎉
          </h1>
          <p className="text-lg md:text-2xl">
            Birthdays are special milestones filled with joy and sweet memories. The perfect cake can make any birthday celebration unforgettable. Whether it’s a themed cake or something minimal, here are some ideas to inspire you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 gradient_animation">
        {/* Theme-Based Cakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">🎈 Theme-Based Cakes</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-100 text-lg max-w-3xl mx-auto">
            <li>
              <strong>Superhero Cake:</strong> Perfect for kids or adults who are superhero fans. Add capes, masks, or logos of their favorite heroes.
            </li>
            <li>
              <strong>Princess or Unicorn Cake:</strong> Use soft pastel colors, edible sparkles, and fondant details for a magical vibe.
            </li>
            <li>
              <strong>Sports Cake:</strong> Shape the cake like a soccer ball, cricket bat, or any sport your loved one adores.
            </li>
          </ul>
        </section>

        {/* Minimalistic Cakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">🧁 Minimalistic Cakes</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-100 text-lg max-w-3xl mx-auto">
            <li>
              <strong>Floral Buttercream Cakes:</strong> Decorate with real or edible flowers on a smooth buttercream finish for an elegant look.
            </li>
            <li>
              <strong>Single-Tier with Topper:</strong> A sleek cake topped with custom cake toppers and subtle details.
            </li>
          </ul>
        </section>

        {/* Personalized Cakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6 text-white">🎁 Personalized Cakes</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-100 text-lg max-w-3xl mx-auto">
            <li>
              <strong>Photo Cake:</strong> Print a favorite memory or moment onto the cake for a personal touch.
            </li>
            <li>
              <strong>Hobby Cake:</strong> Represent their favorite hobby like painting, gardening, or gaming.
            </li>
          </ul>
        </section>
      </div>



      <Footer />
    </>
  );
};

export default Birthdaycakeidea;
