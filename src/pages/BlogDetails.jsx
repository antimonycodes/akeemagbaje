// filepath: /src/components/Home/BlogDetails.jsx
import { div } from "framer-motion/client";
import React from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/shared/Breadcrumbs";

const BlogDetails = () => {
  const location = useLocation();
  const { blog } = location.state;

  return (
    <div className=" bg-gray-100 py-24">
      <div className="px-2 xs:px-6 2xs:px-8 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-4 mb-16 mt-12 ">
        <div className=" px- md:px-10 mb-8">
          <Breadcrumbs />
        </div>
        <div className="  flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold md:text-center lg:max-w-[75%]  text-black">
            {blog.heading}
          </h1>
        </div>
        <div className=" w-full max-w-5xl mx-auto h-[30rem] lg:h-[40rem]">
          <img
            src={blog.img}
            alt={blog.heading}
            className="w-full h-full object-cover my-4"
          />
        </div>
      </div>
      <div className=" flex items-center justify-center px-6 lg:px-60 leading-4.5">
        <p className="text-gray-700 text-lg">{blog.paragraph}</p>
        {/* <p className="text-[#717171] text-xs mt-4">{blog.createdAt}</p> */}
      </div>
    </div>
  );
};

export default BlogDetails;
