// filepath: /src/components/Home/BlogDetails.jsx
import { div } from "framer-motion/client";
import React from "react";
import { useLocation } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const { blog } = location.state;

  return (
    <div className=" bg-orange-600 py-24">
      <div className="px-4 md:px-24 py-4 mb-16 mt- ">
        <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
          {blog.heading}
        </h1>
        <img src={blog.img} alt={blog.heading} className="w-full h-auto my-4" />
        <p className="text-gray-700 text-base">{blog.paragraph}</p>
        <p className="text-[#717171] text-xs mt-4">{blog.createdAt}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
