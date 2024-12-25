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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="bday_font text-5xl font-bold text-center mb-6">
        Birthday Celebration Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bday_font2 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out"
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
                onClick={() => handleButtonClick(blog.link)}
                className="cursor-pointer inline-block mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition duration-300 ease-in-out"
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
