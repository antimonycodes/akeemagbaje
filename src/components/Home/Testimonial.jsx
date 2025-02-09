import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img from "../../assets/mm.png";
import shape from "../../assets/shape.svg";

const testimonials = [
  {
    name: "Sarah",
    role: "Manager Director",
    text: "The team provided exceptional legal guidance for our business restructuring. Their professionalism and attention to detail gave us the confidence to move forward seamlessly. Truly a partner we can rely on!",
    image: img,
  },
  {
    name: "Sarah",
    role: "Manager Director",
    text: "The team provided exceptional legal guidance for our business restructuring. Their professionalism and attention to detail gave us the confidence to move forward seamlessly. Truly a partner we can rely on!",
    image: img,
  },
  {
    name: "Sarah",
    role: "Manager Director",
    text: "The team provided exceptional legal guidance for our business restructuring. Their professionalism and attention to detail gave us the confidence to move forward seamlessly. Truly a partner we can rely on!",
    image: img,
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <div className="flex flex-col md:flex-row items-cente justify-between py-12 px-24">
      <div className="md:w-1/4 text-left">
        <h3 className="text-3xl text-black font-bold">Testimonials</h3>
        <img src={shape} alt="" width={180} />
        <h2 className="text-xl font-medium text-gray-900 mt-2">
          Hear what people say about me.
        </h2>
        <div className="mt-4 h-1 w-24 bg-gray-200"></div>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <Swiper
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          modules={[Navigation]}
          className="w-full max-w-lg"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-co gap-8 items-center text-cente p-4">
                {/*  */}
                <div className="w-[1200px] h-[300px]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover "
                  />
                </div>
                {/*  */}
                <div>
                  <FaQuoteLeft className="text-orange-500 text-3xl mb-2" />
                  <p className="text-gray-700 text-sm italic">
                    "{testimonial.text}"
                  </p>
                  <h4 className="font-bold text-gray-900 mt-4">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  {/*  */}
                  <div className="flex gap-4 mt-4">
                    <button className="prev-button bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600">
                      <FaArrowLeft />
                    </button>
                    <button className="next-button bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600">
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
