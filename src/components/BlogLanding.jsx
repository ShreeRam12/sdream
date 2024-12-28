import React from "react";
import { useNavigate } from "react-router-dom";
const BlogLanding = () => {
  const navigate = useNavigate();
  const handleButtonClick = (link) => {
    navigate(link);
  };
  const blogs = [
    {
      id: 1,
      title: "10 Creative Birthday Themes for Kids",
      description:
        "Make your child's birthday unforgettable with these creative themes! From superheroes to magical unicorns, explore unique ideas.",
      image: "/Blog1.webp",
      link: "/blogs",
    },
    {
      id: 2,
      title: "Top 5 Birthday Party Venues",
      description:
        "Looking for the perfect venue? Here's a list of top-rated birthday party venues to suit every budget and style.",
      image: "/Blog2.webp",
      link: "/blogs",
    },
  ];
  return (
    <div className="mx-auto px-4 py-8 max-w-7xl container">
      <h2 className="mb-6 font-bold text-5xl text-center bday_font">
        Birthday Celebration Blogs
      </h2>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md hover:shadow-lg rounded-lg transition duration-300 overflow-hidden bday_font2 ease-in-out"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 text-lg">
                {blog.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{blog.description}</p>
              <a
                onClick={() => handleButtonClick(blog.link)}
                className="inline-block bg-blue-500 hover:bg-blue-600 mt-4 px-4 py-2 rounded-md text-white transition duration-300 cursor-pointer ease-in-out"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLanding;
