// import shape from "../../assets/shape.svg";
// import img from "../../assets/agbaje-green.jpg";
// const BentoGrid = () => {
//   return (
//     <div className=" max-w-full px-32">
//       <div className=" flex items-center justify-center">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
//             Gallery
//           </h1>
//           <img src={shape} alt="" width={150} />
//         </div>
//       </div>
//       <div className=" mx-auto px-4 py-8">
//         {/* <h1 className="text-4xl font-bold text-center mb-8">
//           Bento Grid Layout with Images
//         </h1> */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* <!-- Large item --> */}
//           <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Nature"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-blac bg-opacity-60  transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 {/* <h3 className="text-2xl font-bold text-white">
//                   Explore Nature
//                 </h3> */}
//                 <p className="text-white">Dinner with co-workers</p>
//               </div>
//             </div>
//           </div>

//           {/* <!-- Two small items --> */}
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Food"
//               className="w-full h-48 object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">
//                   Culinary Delights
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Technology"
//               className="w-full h-48 object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">
//                   Tech Innovations
//                 </h4>
//               </div>
//             </div>
//           </div>

//           {/* <!-- Three medium items --> */}
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Travel"
//               className="w-full h-48 object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">
//                   Travel Adventures
//                 </h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Art"
//               className="w-full h-48 object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">
//                   Artistic Expressions
//                 </h4>
//               </div>
//             </div>
//           </div>

//           {/* <!-- bottom cards --> */}
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1530549387789-4c1017266635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxzd2ltbWluZ3xlbnwwfDB8fHwxNzIxMDQzMjkxfDA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Sport"
//               className="w-full h-48 object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">Swimming</h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8Y2hlc3N8ZW58MHwwfHx8MTcyMTA0MzI0Nnww&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Sport"
//               className="w-full h-48 object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">Chess</h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxmb290YmFsbHxlbnwwfDB8fHwxNzIxMDQzMjExfDA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Sport"
//               className="w-full h-48 object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">Football</h4>
//               </div>
//             </div>
//           </div>
//           <div className="relative overflow-hidden rounded-2xl shadow-lg group">
//             <img
//               src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxjcmlja2V0fGVufDB8MHx8fDE3MjEwNDMxNTh8MA&ixlib=rb-4.0.3&q=80&w=1080"
//               alt="Sport"
//               className="w-full h-48 object-cover"
//             />
//             <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="absolute bottom-0 left-0 right-0 p-4">
//                 <h4 className="text-xl font-bold text-white">Cricket</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BentoGrid;
import shape from "../../assets/shape.svg";
import img from "../../assets/agbaje-green.jpg";
import imgOne from "../../assets/image6.jpeg";
import imgTwo from "../../assets/image3.jpeg";
import imgThree from "../../assets/image0.jpeg";
import imgFour from "../../assets/image7.jpeg";
import imgFive from "../../assets/agbaje-hand-on-chin.jpg";
import imgSix from "../../assets/withArtwork.webp";
import imgSeven from "../../assets/image11.jpeg";
import imgEight from "../../assets/image15.jpeg";

const BentoGrid = () => {
  return (
    <div className="max-w-full px-4 md:px-32 py-6 md:py-24">
      <div className="flex items-center justify-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-medium text-center text-black">
            Gallery
          </h1>
          <img src={shape} alt="" width={150} />
        </div>
      </div>
      <div className="mx-auto px- py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large Image */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={imgOne}
              alt="Main Image"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-end p-4">
              <p className="text-white">Dinner with co-workers</p>
            </div>
          </div>

          {/* Small Images */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img src={imgTwo} alt="Food" className="w-full h-48 object-cover" />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={imgFour}
              alt="Tech"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Medium Images */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={imgThree}
              alt="Travel"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img src={imgFive} alt="Art" className="w-full h-48 object-cover" />
          </div>

          {/* Bottom Row */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={imgSix}
              alt="Sport"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={imgSeven}
              alt="Chess"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={imgEight}
              alt="Football"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img src={img} alt="Cricket" className="w-full h-48 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
