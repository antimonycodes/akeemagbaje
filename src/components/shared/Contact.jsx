import contactImg from "../../assets/hero.png";
import shape from "../../assets/shape.svg";

const Contact = () => {
  return (
    <div className="flex  flex-col-reverse md:flex-row justify-center p-4 md:p-2">
      <div className="flex flex-col md:flex-row gap-8 p- md:p-12 bg-secondar rounded-3xl w-full max-w-4xl">
        {/* Form Section */}
        <div className="flex-1 text-white">
          <div className=" flex flex-col items-center justify-center mb-8">
            <h1 className="font-semibold text-2xl md:text-3xl text-[#333333] ">
              Contact Me
            </h1>
            <img src={shape} alt="" width={150} />
          </div>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-8 text-colored">
              <input
                type="text"
                id="fullName"
                name="name"
                placeholder="Full Name*"
                className="bg-transparent p-4 rounded-md text-black border bg-white border-[#A8A8A8] placeholder:text-[#A8A8A8] caret-colored"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address*"
                className="bg-transparent p-4 rounded-md text-black border bg-white border-[#A8A8A8] placeholder:text-[#A8A8A8] caret-colored"
              />
              <input
                type="text"
                id="phoneNumber"
                name="phone"
                placeholder="Phone Number*"
                className="bg-transparent p-4 rounded-md text-black border bg-white border-[#A8A8A8] placeholder:text-[#A8A8A8] caret-colored"
              />

              <textarea
                id="message"
                name="message"
                placeholder="Message*"
                className="bg-transparent p-4 rounded-md text-black border bg-white border-[#A8A8A8] placeholder:text-[#A8A8A8] caret-colored h-[156px]"
              />
            </div>
            <button className="bg-secondary transition-all duration-700 ease-in-out  py-[12px] px-[41px] rounded-lg text-white w-fit font-medium">
              Submit Now
            </button>
          </form>
        </div>
        {/* Image Section */}
        {/* <div className="flex-1 flex w-full h-full min-h--[400px] rounded-[30px]">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-full  object-cover rounded-[30px] shadow-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
