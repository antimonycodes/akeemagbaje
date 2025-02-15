// filepath: /src/pages/Blog.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import BlogHeader from "../components/Blog/BlogHeader";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <div className=" max-w-7xl px-4 mx-auto py-4 mt-28">
      {blogs.length > 0 && <BlogHeader blogs={blogs} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 mx-auto">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="p-1 hover:bg-white ease-in-out w-full flex flex-col gap-4 rounded-2xl hover:shadow-md hover:-translate-y-2.5 duration-500 transition-all"
          >
            <div className=" h-48 w-full">
              <img
                src={blog.img}
                alt={blog.heading}
                className="rounded-t-2xl object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col flex-1 px-1 py- pb-6">
              <div className=" flex gap-3 mb-4">
                <div className=" bg-primary h-full w-1.5"></div>
                <h2 className="text-xl font-semibold text-[#1D1D1D]">
                  {blog.heading.slice(0, 45)}...
                </h2>
              </div>
              <p className="text-gray-400 text-[14px] font-normal pb-6">
                {blog.paragraph.slice(0, 78)}...
              </p>
              <p className="text-[#717171] text-xs mb-4">{blog.createdAt}</p>
              <div
                className="mt-auto transition-all duration-700 ease-in-out text-primary flex items-center gap-1 cursor-pointer"
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
