// filepath: /src/components/Home/Blog.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import shape from "../assets/shape.svg";
import { ArrowUpRight } from "lucide-react";
import BlogHeader from "../components/Blog/BlogHeader";

const Blog = () => {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <div className="px-4 md:px-24 py-4 mb-16 mt-24">
      {/* <div className="flex items-center flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
          Blog
        </h1>
        <img src={shape} alt="" width={140} className="mb-8" />
      </div> */}
      {blogs.length > 0 && <BlogHeader blog={blogs[0]} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 mx-auto">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="p-1 bg-white w-full flex flex-col gap-4 rounded-2xl hover:shadow-md hover:-translate-y-2.5 duration-500 transition-all"
          >
            <img
              src={blog.img}
              alt={blog.heading}
              className="rounded-t-2xl object-cover h-48 w-full"
            />
            <div className="flex flex-col flex-1 px-1 py- pb-6">
              <h2 className="text-xl font-semibold text-[#1D1D1D]">
                {blog.heading}
              </h2>
              <p className="text-gray-400 text-[14px] font-light">
                {blog.paragraph.slice(0, 78)}...
              </p>
              <p className="text-[#717171] text-xs mb-4">{blog.createdAt}</p>
              <div
                className="mt-auto transition-all duration-700 ease-in-out text-orange-500 flex items-center gap-1 cursor-pointer"
                onClick={() => handleReadMore(blog)}
              >
                <p className="text-xs font-semibold">Read post</p>
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
