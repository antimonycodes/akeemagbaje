// filepath: /src/components/Home/BlogHeader.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const BlogHeader = ({ blog }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${blog.img})` }}
    >
      <div className="absolute bottom-24 left-24 bg-white w-[40%] bg-opacity-75 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl md:text-3xl font-medium text-black mb-4">
          {blog.heading}
        </h1>
        <div
          className="mt-auto transition-all duration-700 ease-in-out text-orange-500 flex items-center gap-1 cursor-pointer"
          onClick={handleReadMore}
        >
          <p className="text-xs font-semibold">Read post</p>
          <ArrowUpRight size={14} />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
