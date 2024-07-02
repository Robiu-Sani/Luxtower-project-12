import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import your images
import slide1 from "../../../Image/slide1.jpg";
import slide2 from "../../../Image/slide2.jpg";
import slide3 from "../../../Image/slide3.jpg";
import slide4 from "../../../Image/slide4.jpg";
import slide5 from "../../../Image/slid1.jpg";
import { Link } from "react-router-dom";

const bannerData = [
  {
    image: slide1,
    text: "Efficient Facilities Maintenance",
    desc: "Implementing proactive maintenance strategies to minimize downtime and maximize the lifespan of building equipment and systems, ensuring smooth operations and reducing maintenance costs.",
  },
  {
    image: slide2,
    text: "Enhancing Building Security",
    desc: "Utilizing state-of-the-art security systems and protocols to safeguard occupants, assets, and sensitive information, providing peace of mind and a secure environment",
  },
  {
    image: slide3,
    text: "Sustainable Energy Solutions",
    desc: " Integrating renewable energy sources, energy-efficient technologies, and sustainable practices to reduce carbon footprint, lower energy bills, and contribute to a healthier planet.",
  },
  {
    image: slide4,
    text: "Optimizing Tenant Experience",
    desc: "Focusing on delivering exceptional services, amenities, and personalized experiences to tenants, fostering satisfaction, loyalty, and a sense of community within the building.",
  },
  {
    image: slide5,
    text: "Streamlined Operations and Management",
    desc: "Implementing efficient processes, automation, and technology solutions to streamline day-to-day operations, improve productivity, and enhance decision-making for building management.",
  },
];

const Banner = () => {
  return (
    <div className="h-screen w-full bg-cover flex items-center justify-center relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={800} // Adjust speed for smoother transitions
        loop={true} // Enable loop for continuous scrolling
        grabCursor={true} // Show grab cursor when slides are draggable
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper absolute top-0 left-0 w-full h-full transition-opacity"
        style={{ transitionDuration: "0.8s" }} // Add custom CSS transition for opacity
      >
        {bannerData.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img
                src={item.image}
                alt={`slide${idx}`}
                className="w-full h-full"
              />
              <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0 flex items-center flex-col gap-7 justify-center">
                <h1 className="text-3xl sm:text-5xl text-center text-shadow-md text-white font-bold">
                  {item.text}
                </h1>
                <p className=" max-w-[700px] px-4 text-xl text-center text-shadow-md text-white">
                  {item.desc}
                </p>
                <Link className="w-[250px] mt-5 hover:bg-[#c78960] text-center font-bold  text-white p-2  border-2">
                  EXPLORE
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
