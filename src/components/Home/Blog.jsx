import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
import shape from "../../assets/shape.svg";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  const handleReadMoreBlogs = () => {
    navigate("/blog");
  };

  return (
    <div className="px-2 xs:px-6 2xs:px-8 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-6 lg:py-24 mb-6">
      <div className="flex items-center flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
          Blog
        </h1>
        <img src={shape} alt="" width={140} className="mb-8" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8 mx-auto">
        {blogs.slice(0, 4).map((blog, i) => (
          <div
            key={i}
            className="p-2 rounded-lg bg-white w-full flex flex-col gap-4 shadow-lg hover:-translate-y-2.5 duration-500 transition-all"
          >
            <img
              src={blog.img}
              alt={blog.heading}
              className="object-cover rounded-lg h-48 w-full"
            />
            <div className="flex flex-col flex-1 px-1 py- pb-6">
              <div className="flex gap-3 mb-4">
                <div className="bg-primary h-full w-1.5"></div>
                <h2 className="text-xl font-semibold text-[#1D1D1D]">
                  {blog.heading.slice(0, 35)}...
                </h2>
              </div>
              <p className="text-gray-400 text-[14px] font- mb-4">
                {blog.paragraph.slice(0, 72)}...
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[#717171] text-xs">{blog.createdAt}</p>
                <div
                  className="mt-auto cursor-pointer transition-all duration-700 ease-in-out text-primary flex items-center gap-1"
                  onClick={() => handleReadMore(blog)}
                >
                  <p className="text-xs font-semibold">Read post</p>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="py-2 px-6 rounded-lg bg-[#811812] text-white font-semibold cursor-pointer transition-all duration-300 
 ease-linear delay-0  hover:translate-y-[-7px] active:translate-y-[-1px]"
          onClick={handleReadMoreBlogs}
        >
          Read More Blogs
        </button>
      </div>
    </div>
  );
};

export default Blog;
