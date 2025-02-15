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

import React, { useContext } from "react";
import blogImgOne from "../../assets/Energyblog.jpeg";
import blogImgTwo from "../../assets/insecurity.jpg";
import blogImgThree from "../../assets/solar.webp";
import shape from "../../assets/shape.svg";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";

const Blog = () => {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();
  // const blogs = [
  //   {
  //     id: 1,
  //     img: blogImgTwo,
  //     heading:
  //       "OYO2027: Makinde's PDP is Defeatable if….— APC Chieftain, Akeem Agbaje Reveals",
  //     paragraph:
  //       "A chieftain of the All Progressives’ Congress (APC) in Oyo State, Barr. Akeem Agbaje has revealed the strategy the leading opposition party in the state can employ to oust Gov. Seyi Makinde's PDP in 2027.Agbaje on a popular radio program in Ibadan, the Oyo State capital explained that the present government in the pacesetter state under the leadership of Gov. Makinde's PDP is defeatable at the polls if APC can be united in 2027.Agbaje elucidated further that the event of 2023 should be put behind, and the party could only get it better ahead of 2027 if all stakeholders resolved to stop the blame game over the last electoral loss. “Majority of the aspirants then had the agenda of hijacking the system in their respective favor but only the smartest one won at the end. I do not see why Sen. Folarin should be castigated for emerging as the guber candidate of our party in 2023.If we are going to be honest with ourselves, we need a united APC to take over from the present PDP in the state. There should be strict adherence to party discipline through respect to the leadership of the party in the state. Our state working committee and relevant stakeholders should continue meeting to resolve whatever issues causing division within the party. I trust the capacities of our state Chairman, Alhaji Olayide Abass and other officers of the party at state and other levels. APC is our party, and we are all going to work together.",
  //     current: 40,
  //     createdAt: "15, Sep, 2024",
  //     total: 100,
  //   },
  //   {
  //     id: 2,
  //     img: blogImgOne,
  //     heading:
  //       "Governance is more than Window Dressing - APC Chieftain Carpets Makinde",
  //     paragraph:
  //       "This is a random paragraph im trying to test lorem ipsum trying to test lorem ipsum trying to test lorem ipsum",
  //     createdAt: "15, Sep, 2024",
  //     current: 50,
  //     total: 100,
  //   },
  //   {
  //     id: 3,
  //     img: blogImgThree,
  //     heading:
  //       "Chief Bisi Akande, A Pillar Of Progressivism, Agbaje Congratulates Chief Bisi Akande On His 86th Birthday",
  //     paragraph:
  //       "This is a random paragraph im trying to test lorem ipsum trying to test lorem ipsum trying to test lorem ipsum",
  //     createdAt: "10, Oct, 2024",
  //     current: 10,
  //     total: 100,
  //   },
  //   {
  //     id: 4,
  //     img: blogImgThree,
  //     heading:
  //       "Agbaje Urges Better Education And Healthcare For Children, Lauds Tinubu’s Government For Student Loan Scheme",
  //     paragraph:
  //       "This is a random paragraph im trying to test lorem ipsum trying to test lorem ipsum trying to test lorem ipsum",
  //     createdAt: "10, Oct, 2024",
  //     current: 10,
  //     total: 100,
  //   },
  // ];

  const getProgressPercentage = (current, total) => {
    return (current / total) * 100;
  };

  const handleReadMore = (blog) => {
    navigate(`/blog/${blog.id}`, { state: { blog } });
  };

  return (
    <div className="px-4 md:px-32 py-24 mb-6">
      <div className=" flex items-center flex-col justify-center">
        <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
          Blog
        </h1>
        <img src={shape} alt="" width={140} className=" mb-8" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8 mx-auto">
        {blogs.slice(4).map((blog, i) => (
          <div
            key={i}
            className="p-6 rounded-lg bg-white w-full flex flex-col gap-4  hover:shadow-lg  hover:-translate-y-2.5 duration-500 transition-all"
          >
            <img
              src={blog.img}
              alt={blog.heading}
              className=" object-cover rounded-lg h-48 w-full"
            />
            <div className="flex flex-col flex-1 px-1 py- pb-6">
              <div className=" flex gap-3 mb-4">
                <div className=" bg-primary h-full w-1.5"></div>
                <h2 className="text-xl font-semibold text-[#1D1D1D]">
                  {blog.heading.slice(0, 35)}...
                </h2>
              </div>
              <p className=" text-gray-400 text-[14px] font- mb-4">
                {blog.paragraph.slice(0, 72)}...
              </p>
              <div className=" flex justify-between items-center">
                <p className="text-[#717171] text-xs ">{blog.createdAt}</p>
                {/* <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                <div
                  className="bg-black h-1 rounded-full"
                  style={{
                    width: `${getProgressPercentage(
                      blog.current,
                      blog.total
                    )}%`,
                  }}
                ></div>
              </div> */}
                <div
                  className="mt-auto cursor-pointer transition-all duration-700 ease-in-out text-primary flex items-center gap-1 "
                  onClick={() => handleReadMore(blog)}
                >
                  <p
                    className=" text-xs font-semibold"
                    // onClick={handleReadMore(blog)}
                  >
                    Read post
                  </p>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
