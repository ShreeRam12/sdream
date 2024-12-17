import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const BirthdayThemes = () => {
  const themes = [
    {
      title: "Superhero Adventure",
      description:
        "Turn your child's birthday into a superhero adventure with capes, masks, and action-packed games. Transform your home into a superhero headquarters with themed decorations and plan activities like 'Save the City' obstacle courses and 'Superhero Training' sessions. Encourage guests to come dressed as their favorite heroes for an action-packed day.",
      image: "/Super_Hero.webp",
    },
    {
      title: "Magical Unicorn Party",
      description:
        "Create a magical world with unicorn decorations, colorful treats, and fantasy-themed activities. Set up a 'Unicorn Craft Station' where kids can make their own unicorn horns and tails. Include a rainbow cake and pastel-colored snacks to match the whimsical theme. Activities like a unicorn piñata and a magical treasure hunt will keep the little ones entertained.",
      image: "/Magical_Unicorn.webp",
    },
    {
      title: "Pirate Treasure Hunt",
      description:
        "Set sail for a treasure hunt with pirate hats, eye patches, and exciting scavenger hunts. Decorate the venue with pirate flags and treasure chests. Organize a 'Treasure Hunt' with maps leading to hidden treasures. Include pirate-themed games like 'Walk the Plank' and 'Cannonball Toss' for an adventurous day on the high seas.",
      image: "/Pirate_Hunt.webp",
    },
    {
      title: "Fairy Tale Fantasy",
      description:
        "Bring fairy tales to life with princess dresses, castle decorations, and enchanting stories. Create a fairy tale castle with balloons and streamers. Plan activities like a 'Royal Ball' dance party and a 'Fairy Tale Storytime'. Treats like 'Magic Wand' cookies and 'Fairy Dust' cupcakes will delight the young guests.",
      image: "/Fairy_Tale.webp",
    },
    {
      title: "Dinosaur Dig",
      description:
        "Let your child become a paleontologist for a day with dinosaur digs, fossils, and themed games. Set up a 'Dino Dig' excavation site with buried fossils and bones. Include activities like 'Dinosaur Egg Hunt' and 'Dino Stomp' dance-off. Dinosaur-themed snacks and a volcano cake will complete the prehistoric adventure.",
      image: "/Dinosaur_Dig.webp",
    },
    {
      title: "Outer Space Adventure",
      description:
        "Explore the galaxy with astronaut costumes, space-themed decorations, and interactive science experiments. Decorate with stars, planets, and rocket ships. Plan activities like 'Build a Rocket' craft station and 'Spacewalk Relay Race'. Serve space-themed snacks like 'Astronaut Ice Cream' and 'Galaxy Cupcakes' for a cosmic celebration.",
      image: "/Outer_Space.webp",
    },
    {
      title: "Under the Sea",
      description:
        "Dive into an underwater adventure with mermaid costumes, sea creature crafts, and water games. Create an 'Underwater Grotto' with blue streamers and seaweed decor. Plan activities like 'Mermaid Tail Race' and 'Sea Creature Craft Station'. Serve ocean-themed treats like 'Fish Bowl Jello' and 'Sea Shell Cookies' for an aquatic celebration.",
      image: "/Under_The_Sea.webp",
    },
    {
      title: "Carnival Extravaganza",
      description:
        "Create a carnival atmosphere with games, prizes, popcorn, and colorful decorations. Set up classic carnival games like 'Ring Toss' and 'Duck Pond'. Include a 'Face Painting Booth' and 'Balloon Animals' for extra fun. Serve carnival snacks like popcorn, cotton candy, and hot dogs for a festive day at the carnival.",
      image: "/Carnival_Extragavanza.webp",
    },
    {
      title: "Safari Adventure",
      description:
        "Go on a safari adventure with animal masks, jungle decorations, and outdoor exploration activities. Decorate with jungle foliage and animal prints. Plan activities like 'Animal Mask Making' and 'Jungle Obstacle Course'. Serve safari-themed snacks like 'Animal Crackers' and 'Jungle Juice' for a wild adventure.",
      image: "/Safari_Theme.webp",
    },
    {
      title: "Sports Celebration",
      description:
        "Celebrate with sports-themed games, team jerseys, and fun competitions. Set up different sports stations like 'Soccer Shootout' and 'Basketball Free Throw'. Encourage kids to wear their favorite sports jerseys. Serve sporty snacks like 'Energy Bars' and 'Sports Drink' for a fun and active celebration.",
      image: "/Sports_Celebration.webp",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative">
        <div className="relative w-full h-screen flex items-center justify-center">
          <video
            className="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full object-cover z-0"
            src="/Birthday_Animation.mp4"
            autoPlay
            loop
            muted
          ></video>
          <h1 className="relative z-10 text-4xl font-bold mb-6 text-white inline-block px-4 py-4 rounded">
            10 Creative Birthday Themes for Kids
          </h1>
        </div>

        <div className="relative w-full mx-auto px-4 py-8">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-col items-center mb-12 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <h3 className="text-3xl text-left font-semibold text-gray-800 mb-4">
                {theme.title}
              </h3>
              <div className="w-full lg:w-1/2">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="w-full lg:w-full lg:px-8 mt-4 lg:mt-10">
                <p className="text-gray-600 text-lg">{theme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BirthdayThemes;
