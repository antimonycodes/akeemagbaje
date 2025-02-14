// filepath: /src/components/Blog/BlogHeader.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const BlogHeader = ({ blogs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [blogs.length]);

  const handleReadMore = () => {
    navigate(`/blog/${blogs[currentIndex].id}`, {
      state: { blog: blogs[currentIndex] },
    });
  };

  return (
    <div
      className="relative rounded-3xl w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url(${blogs[currentIndex].img})` }}
    >
      <div className="absolute bottom-12 left-24 bg-white w-[40%] bg-opacity-75 p-6 rounded-2xl shadow-lg text-">
        <h1 className="text-2xl md:text-3xl font-medium text-black mb-4">
          {blogs[currentIndex].heading}
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
