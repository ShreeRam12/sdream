import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PartyVenues = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          src="/Party_Venue.mp4" 
          autoPlay
          muted
          loop
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative top-52 z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Discover the Perfect Venue for Your Birthday Celebration
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Make your birthday unforgettable with the perfect venue. From cozy halls to vibrant outdoor spaces, we’ve got you covered.
          </p>

          {/* Article Section */}
          <div className=" bg-opacity-90 text-white rounded-lg p-6 w-full mx-auto shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              Top Venue Ideas for Your Birthday Party
            </h2>

            <div className="space-y-8">
              {/* Venue Idea 1 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/Kids_Party_Hall.webp"
                  alt="Kids Party Hall"
                  className="w-full md:w-1/3 lg:w-96 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    1. Kids’ Party Halls
                  </h3>
                  <p>
                    Colorful, fun-filled venues designed for kids’ themed birthday parties. These halls come with decorations, games, and catering to create magical moments for little ones.
                  </p>
                </div>
              </div>

              {/* Venue Idea 2 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/Outdoor_Games.webp"
                  alt="Outdoor Garden"
                  className="w-full md:w-1/3 lg:w-96 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    2. Outdoor Garden Venues
                  </h3>
                  <p>
                    Perfect for daytime parties, garden venues offer serenity and natural beauty with plenty of space for games, food, and laughter.
                  </p>
                </div>
              </div>

              {/* Venue Idea 3 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/Luxury_Restaurant.webp"
                  alt="Luxury Restaurant"
                  className="w-full md:w-1/3 lg:w-96 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    3. Luxury Restaurants
                  </h3>
                  <p>
                    For an intimate and elegant celebration, book a luxury restaurant. Enjoy exquisite cuisine and refined decor for a memorable experience.
                  </p>
                </div>
              </div>

              {/* Venue Idea 4 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/clubhouse.jpg"
                  alt="Clubhouse"
                  className="w-full md:w-1/3 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    4. Clubhouses or Community Centers
                  </h3>
                  <p>
                    Clubhouses provide versatile spaces you can customize with decorations, catering, and entertainment to suit your party style.
                  </p>
                </div>
              </div>

              {/* Venue Idea 5 */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="/rooftop-party.jpg"
                  alt="Rooftop Party"
                  className="w-full md:w-1/3 rounded-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    5. Rooftop Party Venues
                  </h3>
                  <p>
                    Celebrate under the stars with breathtaking city views from a rooftop venue. Ideal for evening parties, enjoy the cool breeze and twinkling lights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PartyVenues;
