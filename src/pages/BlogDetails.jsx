// // filepath: /src/components/Home/BlogDetails.jsx
// import { div } from "framer-motion/client";
// import React from "react";
// import { useLocation } from "react-router-dom";
// import Breadcrumbs from "../components/shared/Breadcrumbs";

// const BlogDetails = () => {
//   const location = useLocation();
//   const { blog } = location.state;

//   return (
//     <div className=" bg-gray-100 py-24">
//       <div className="px-2 xs:px-6 2xs:px-8 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-4 mb-16 mt-12 ">
//         <div className=" px- md:px-10 mb-8">
//           <Breadcrumbs />
//         </div>
//         <div className="  flex items-center justify-center">
//           <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold md:text-center lg:max-w-[75%]  text-black">
//             {blog.heading}
//           </h1>
//         </div>
//         <div className=" w-full max-w-5xl mx-auto h-[30rem] lg:h-[40rem]">
//           <img
//             src={blog.img}
//             alt={blog.heading}
//             className="w-full h-full object-cover my-4"
//           />
//         </div>
//       </div>
//       <div className=" flex items-center justify-center px-6 lg:px-60 leading-4.5">
//         <p className="text-gray-700 text-lg">{blog.paragraph}</p>
//         {/* <p className="text-[#717171] text-xs mt-4">{blog.createdAt}</p> */}
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;

// import React from "react";
// import { useLocation } from "react-router-dom";
// import Breadcrumbs from "../components/shared/Breadcrumbs";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaTiktok,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const BlogDetails = () => {
//   const location = useLocation();
//   const { blog } = location.state;

//   // Function to handle social sharing
//   const handleShare = (platform) => {
//     const url = window.location.href;
//     const title = blog.heading;

//     let shareUrl;

//     switch (platform) {
//       case "twitter":
//         shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
//           url
//         )}&text=${encodeURIComponent(title)}`;
//         break;
//       case "facebook":
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//           url
//         )}`;
//         break;
//       case "linkedin":
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//           url
//         )}`;
//         break;
//       case "instagram":
//         // Instagram doesn't have a direct share URL, but we can open Instagram
//         shareUrl = `https://instagram.com/`;
//         break;
//       case "tiktok":
//         // TikTok doesn't have a direct share URL either
//         shareUrl = `https://www.tiktok.com/`;
//         break;
//       default:
//         return;
//     }

//     window.open(shareUrl, "_blank", "width=600,height=400");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
//       <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 max-w-7xl mx-auto">
//         {/* Breadcrumbs */}
//         <div className="mb-8 md:mb-12">
//           <Breadcrumbs />
//         </div>

//         {/* Blog Header */}
//         <div className="text-center mb-8 md:mb-12">
//           <h1 className="text-xl md:text-4xl xl:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
//             {blog.heading}
//           </h1>

//           <div className=" flex items-center justify-center text-sm text-gray-600">
//             {/* <span className="mr-4">{blog.author || "Anonymous"}</span> */}
//             <span>
//               {/* {new Date(blog.createdAt || Date.now()).toLocaleDateString()} */}
//             </span>
//           </div>
//         </div>

//         {/* Featured Image */}
//         <div className="relative w-full max-w-5xl mx-auto h-64 sm:h-96 md:h-[30rem] lg:h-[40rem] mb-12 rounded-xl overflow-hidden shadow-xl">
//           <img
//             src={blog.img}
//             alt={blog.heading}
//             className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
//           />
//         </div>

//         {/* Social Sharing */}
//         <div className="flex justify-center mb-12 relative">
//           <p className=" absolute -top-4 text-support text-xs font-semibold">
//             Share blog
//           </p>
//           <div className="bg-white rounded-full shadow-md px-6 py-3 flex space-x-6">
//             <button
//               onClick={() => handleShare("twitter")}
//               className="text-gray-700 hover:text-blue-400 transition-colors"
//               title="Share on Twitter"
//             >
//               <FaTwitter size={20} />
//             </button>
//             <button
//               onClick={() => handleShare("facebook")}
//               className="text-gray-700 hover:text-blue-600 transition-colors"
//               title="Share on Facebook"
//             >
//               <FaFacebookF size={20} />
//             </button>
//             <button
//               onClick={() => handleShare("instagram")}
//               className="text-gray-700 hover:text-pink-600 transition-colors"
//               title="Open Instagram"
//             >
//               <FaInstagram size={20} />
//             </button>
//             <button
//               onClick={() => handleShare("tiktok")}
//               className="text-gray-700 hover:text-black transition-colors"
//               title="Open TikTok"
//             >
//               <FaTiktok size={20} />
//             </button>
//             <button
//               onClick={() => handleShare("linkedin")}
//               className="text-gray-700 hover:text-blue-800 transition-colors"
//               title="Share on LinkedIn"
//             >
//               <FaLinkedinIn size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Blog Content */}
//         <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10">
//           <div className="prose prose-lg max-w-none">
//             <p className="text-gray-700 leading-relaxed">{blog.paragraph}</p>

//             {/* Additional content sections could be added here */}
//             {blog.additionalContent && (
//               <div className="mt-8">{blog.additionalContent}</div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetails;
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/shared/Breadcrumbs";
import { BlogContext } from "../context/BlogContext";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blogs } = useContext(BlogContext);
  const { blog } = location.state;

  // Function to handle social sharing
  const handleShare = (platform) => {
    const url = window.location.href;
    const title = blog.heading;

    let shareUrl;

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      case "instagram":
        shareUrl = `https://instagram.com/`;
        break;
      case "tiktok":
        shareUrl = `https://www.tiktok.com/`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  // Find the index of the current blog
  const currentBlogIndex = blogs.findIndex((b) => b.id === blog.id);

  // Get the next blog (wrap around to the first blog if at the end)
  const nextBlog = blogs[(currentBlogIndex + 1) % blogs.length];

  // Handle navigation to the next blog
  const handleNextBlog = () => {
    navigate(`/blog/${nextBlog.id}`, { state: { blog: nextBlog } });
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <div className="mb-8 md:mb-12">
          <Breadcrumbs />
        </div>

        {/* Blog Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-xl md:text-4xl xl:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            {blog.heading}
          </h1>

          <div className="flex items-center justify-center text-sm text-gray-600">
            <span>{blog.createdAt}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full max-w-7xl mx-auto h-64 sm:h-96 md:h-[30rem] lg:h-[40rem] mb-12 rounded-xl overflow-hidden shadow-xl">
          <img
            src={blog.img}
            alt={blog.heading}
            className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-700"
          />
        </div>

        {/* Social Sharing */}
        <div className="flex justify-center mb-12 relative">
          <p className="absolute -top-4 text-support text-xs font-semibold">
            Share blog
          </p>
          <div className="bg-white rounded-full shadow-md px-6 py-3 flex space-x-6">
            <button
              onClick={() => handleShare("twitter")}
              className="text-gray-700 hover:text-blue-400 transition-colors"
              title="Share on Twitter"
            >
              <FaTwitter size={20} />
            </button>
            <button
              onClick={() => handleShare("facebook")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              title="Share on Facebook"
            >
              <FaFacebookF size={20} />
            </button>
            <button
              onClick={() => handleShare("instagram")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
              title="Open Instagram"
            >
              <FaInstagram size={20} />
            </button>
            <button
              onClick={() => handleShare("tiktok")}
              className="text-gray-700 hover:text-black transition-colors"
              title="Open TikTok"
            >
              <FaTiktok size={20} />
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="text-gray-700 hover:text-blue-800 transition-colors"
              title="Share on LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </button>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{blog.paragraph}</p>

            {blog.additionalContent && (
              <div className="mt-8">{blog.additionalContent}</div>
            )}
          </div>
        </div>

        {/* Next Blog Button */}
        <div className="max-w-7xl mx-auto flex justify-center">
          <button
            onClick={handleNextBlog}
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Next Blog Post
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
