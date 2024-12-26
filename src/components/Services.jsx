import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './styles.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Venue",
      image: "/Venue.webp",
      link: "/venue"
    },
    {
      id: 2,
      title: "Invitation",
      image: "/Invitation.webp",
      link: "/invitation"
    },
    {
      id: 3,
      title: "Decoration",
      image: "/Decoration.webp",
      link: "/decoration"
    },
    {
      id: 4,
      title: "Signages",
      image: "/Signages.webp",
      link: "/signages"
    },
    {
      id: 5,
      title: "Welcome Service",
      image: "/Welcome_Service.webp",
      link: "/welcome-service"
    },
    {
      id: 6,
      title: "Catering",
      image: "/Catering.webp",
      link: "/catering"
    },
    {
      id: 7,
      title: "Photography",
      image: "/Photography.webp",
      link: "/photography"
    },
    {
      id: 8,
      title: "Videography",
      image: "/Videography.webp",
      link: "/videography"
    },
    {
      id: 9,
      title: "Cake Arrangement",
      image: "/Cake_Arrangement.webp",
      link: "/cake-arrangement"
    },
    {
      id: 10,
      title: "Entertainment",
      image: "/Entertainment.webp",
      link: "/entertainment"
    },
    {
      id: 11,
      title: "Gifting",
      image: "/Gifting.webp",
      link: "/gifting"
    },
    {
      id: 12,
      title: "Pre Video Making",
      image: "/Pre_Video_Making.webp",
      link: "/pre-video-making"
    },
  ];


  return (
    <>
      <Navbar />
      <div className="">
        <div className="relative w-full h-96 overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/Services_Video.mp4"
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
              Services
            </h1>
          </div>
        </div>
        <div className="mt-20 bday_font2 p-10 md:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
          {services.map((service) => (
            <Link to={service.link} key={service.id}>
              <div
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
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Services