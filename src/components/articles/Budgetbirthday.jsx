import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Budgetbirthday = () => {
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center bg-gray-50">
        {/* Background Video Section */}
        <div className="relative w-full h-96 overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/Budget_Birthday.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

          {/* Header Content */}
          <div className="relative z-20 w-full top-32 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Celebrate Your Birthday on a Budget
            </h1>
            <p className="text-lg text-gray-200">
              Discover creative and affordable ideas for throwing an amazing birthday
              party without breaking the bank. A little planning and a touch of
              creativity can go a long way!
            </p>
          </div>
        </div>


        {/* Blog Section */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {/* Tip 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/DIY_Decoration.webp"
              alt="DIY Decorations"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">1. DIY Decorations</h2>
              <p className="text-gray-600">
                Get crafty with DIY decorations! Balloons, streamers, and
                handmade banners are cost-effective and add a personal touch to
                your celebration.
              </p>
            </div>
          </div>

          {/* Tip 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/Bake_Your_Cake.webp"
              alt="Homemade Cake"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">2. Bake Your Own Cake</h2>
              <p className="text-gray-600">
                Save on bakery costs by baking your own cake. It's not only
                budget-friendly but also lets you customize it to your liking!
              </p>
            </div>
          </div>

          {/* Tip 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/Host_It.webp"
              alt="Backyard Party"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">3. Host It at Home</h2>
              <p className="text-gray-600">
                Avoid venue costs by hosting the party at home or in your
                backyard. Decorate the space to create a cozy and festive
                atmosphere.
              </p>
            </div>
          </div>

          {/* Tip 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/Pot_Luck.webp"
              alt="Potluck Party"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">4. Potluck Party</h2>
              <p className="text-gray-600">
                Ask friends and family to contribute to the menu. A potluck not
                only saves money but also adds variety to the food table.
              </p>
            </div>
          </div>

          {/* Tip 5 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/Game_In.webp"
              alt="Game Night"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">5. Game Night Fun</h2>
              <p className="text-gray-600">
                Entertainment doesn't have to be expensive. Organize a game
                night with board games, card games, or trivia for endless fun.
              </p>
            </div>
          </div>

          {/* Tip 6 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/Digitalinvite.webp"
              alt="Digital Invitations"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                6. Digital Invitations
              </h2>
              <p className="text-gray-600">
                Skip the traditional paper invites and go digital. Create
                stylish e-invites and send them via email or messaging apps.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Budgetbirthday;
