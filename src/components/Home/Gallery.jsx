// import campaignsImg from "../../assets/campaigns.png"
import img1 from "../../assets/image7.jpeg";
import img2 from "../../assets/image11.jpeg";
import img3 from "../../assets/image13.jpeg";
import img4 from "../../assets/agbaje-hand-on-chin.jpg";
import img5 from "../../assets/image5.jpeg";
import img6 from "../../assets/agbaje-hand-upjpg.jpg";
import img7 from "../../assets/image7.jpeg";

const Gallery = () => {
  return (
    <div className=" mt-8 text-center px- md:px-32 ">
      <div>
        <h2 className=" text-2xl md:text-5xl font-medium leading-tight text-gray-900 mb-8">
          Gallery
        </h2>
        {/* <p className="mb-12 text-lg text-gray-600">Here are a few of the awesome Services we provide.</p> */}
      </div>
      <div className="container gap-4 mx-auto mb-8">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
