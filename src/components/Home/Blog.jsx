// import blogImgOne from "../../assets/campaigns.png";
// import blogImgTwo from "../../assets/hero.png";
// import blogImgThree from "../../assets/mm.png";

// const Blog = () => {
//   const blogs = [
//     {
//       img: blogImgOne,
//       heading: "Bring together people who care about a cause",
//       createdAt: "29,Aug, 2024",
//       current: 40,
//       total: 100,
//     },
//     {
//       img: blogImgOne,
//       heading: "Bring together people who care about a cause",
//       createdAt: "29,Aug, 2024",
//       current: 50,
//       total: 100,
//     },
//     {
//       img: blogImgOne,
//       heading: "Bring together people who care about a cause",
//       createdAt: "29,Aug, 2024",
//       current: 10,
//       total: 100,
//     },
//   ];
//   const getProgressPercentage = (current, total) => {
//     return (current / total) * 100;
//   };

//   return (
//     <div className="px-4 md:px-24 py-4 mb-16">
//       <h1 className=" text-2xl md:text-5xl font-medium text-center text-black">
//         Blog
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 my-8 mx-auto ">
//         {blogs.map((blog, i) => (
//           <div
//             key={i}
//             className="p-4 bg-white w-fit flex flex-col gap-2 rounded-2xl shadow-lg"
//           >
//             <img src={blog.img} alt="" />
//             <h2 className="text-xl  text-[#1D1D1D] pt-8">{blog.heading}</h2>
//             {/*  */}
//             {/* Progress Bar */}
//             <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
//               <div
//                 className="bg-black h-1 rounded-full"
//                 style={{
//                   width: `${getProgressPercentage(blog.current, blog.total)}%`,
//                 }}
//               ></div>
//             </div>

//             <p className=" text-[#717171] text-xs pb-4">{blog.createdAt}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;

import React from "react";
import blogImgOne from "../../assets/Energyblog.jpeg";
import blogImgTwo from "../../assets/insecurity.jpg";
import blogImgThree from "../../assets/solar.webp";
import shape from "../../assets/shape.svg";

const Blog = () => {
  const blogs = [
    {
      img: blogImgTwo,
      heading: "How i plan to tackle insecurity in Oyo state",
      createdAt: "29, Aug, 2024",
      current: 40,
      total: 100,
    },
    {
      img: blogImgOne,
      heading: " independent power supply is the future",
      createdAt: "15, Sep, 2024",
      current: 50,
      total: 100,
    },
    {
      img: blogImgThree,
      heading: "The future of the Nigerian economy",
      createdAt: "10, Oct, 2024",
      current: 10,
      total: 100,
    },
  ];

  const getProgressPercentage = (current, total) => {
    return (current / total) * 100;
  };

  return (
    <div className="px-4 md:px-24 py-4 mb-16">
      <div className=" flex items-center flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
          Blog
        </h1>
        <img src={shape} alt="" width={140} className=" mb-8" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-8 mx-auto">
        {blogs.map((blog, i) => (
          <div
            key={i}
            className="p-4 bg-white w-full flex flex-col gap-4 rounded-2xl shadow-lg"
          >
            <img
              src={blog.img}
              alt={blog.heading}
              className="rounded-t-2xl object-cover h-48 w-full"
            />
            <div className="flex flex-col flex-1 p-4">
              <h2 className="text-xl font-semibold text-[#1D1D1D]">
                {blog.heading}
              </h2>
              <p className="text-[#717171] text-xs mb-4">{blog.createdAt}</p>
              <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                <div
                  className="bg-black h-1 rounded-full"
                  style={{
                    width: `${getProgressPercentage(
                      blog.current,
                      blog.total
                    )}%`,
                  }}
                ></div>
              </div>
              <button className="mt-auto bg-orange-400  transition-all duration-700 ease-in-out py-2 px-4 rounded-lg text-white font-medium">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
