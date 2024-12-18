import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Venue",
      image: "/Venue.webp",
    },
    {
      id: 2,
      title: "Invitation",
      image: "/Invitation.webp",
    },
    {
      id: 3,
      title: "Decoration",
      image: "/Decoration.webp",
    },
    {
      id: 4,
      title: "Signages",
      image: "/Signages.webp",
    },
    {
      id: 5,
      title: "Welcome Service",
      image: "/Welcome_Service.webp",
    },
    {
      id: 6,
      title: "Catering",
      image: "/Catering.webp",
    },
    {
      id: 7,
      title: "Photography",
      image: "/Photography.webp",
    },
    {
      id: 8,
      title: "Videography",
      image: "/Videography.webp",
    },
    {
      id: 9,
      title: "Cake Arrangement",
      image: "/Cake_Arrangement.webp",
    },
    {
      id: 10,
      title: "Entertainment",
      image: "/Entertainment.webp",
    },
    {
      id: 11,
      title: "Gifting",
      image: "/Gifting.webp",
    },
    {
      id: 12,
      title: "Pre Video Making",
      image: "/Pre_Video_Making.webp",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="max-w-8xl mx-auto px-4 py-8 p-10">
        <h2 className="text-2xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Services
