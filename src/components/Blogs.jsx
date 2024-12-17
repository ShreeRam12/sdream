import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "10 Creative Birthday Themes for Kids",
      description:
        "Make your child's birthday unforgettable with these creative themes! From superheroes to magical unicorns, explore unique ideas.",
      image: "/Blog1.webp",
      link: "/articles/birthdaythemes",
    },
    {
      id: 2,
      title: "Top 5 Birthday Party Venues",
      description:
        "Looking for the perfect venue? Here's a list of top-rated birthday party venues to suit every budget and style.",
      image: "/Blog2.webp",
      link: "/articles/partyvenues",
    },
    {
      id: 3,
      title: "How to Plan a Budget-Friendly Birthday Party",
      description:
        "Celebrate in style without breaking the bank. Tips and tricks for hosting a memorable birthday on a budget.",
      image: "/Blog3.webp",
      link: "/articles/budgetbirthday",
    },
    {
      id: 4,
      title: "Delicious Birthday Cake Ideas",
      description:
        "From classic chocolate cakes to custom designs, discover amazing birthday cake ideas to sweeten the celebration.",
      image: "/Blog4.webp",
      link: "/articles/birthdaycakeideas",
    },
    {
      id: 5,
      title: "Delectable Birthday Cake Inspirations",
      description:
        "Explore a range of mouth-watering birthday cake ideas, from classic favorites to unique custom creations, to make your celebration extra sweet.",
      image: "/Blog5.webp",
      link: "/articles/birthdaycakeinspirations",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Birthday Celebration Blogs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{blog.description}</p>
                <a
                  href={blog.link}
                  className="inline-block mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300 ease-in-out"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
