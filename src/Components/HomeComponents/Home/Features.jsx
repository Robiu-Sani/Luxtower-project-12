import image from "../../../Image/feature.jpg";
import image1 from "../../../Image/feature2.jpg";
import design from "../../../Image/design1.png";
import image2 from "../../../Image/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function Features() {
  const featureData = [
    {
      image: image,
      title: "Living Room",
      desc: "A living room is a cozy space for relaxing and socializing, typically featuring seating, a coffee table, and entertainment.",
    },
    {
      image: image1,
      title: "Bad Room",
      desc: "A bedroom is a private space for sleeping and relaxation, typically featuring a bed, nightstands, and storage.",
    },
    {
      image: image2,
      title: "Kitchen",
      desc: "A kitchen is a functional space for cooking and meal preparation, typically equipped with appliances, cabinets, and a sink.      ",
    },
  ];

  return (
    <div className="w-full pt-10 bg-[#ffefe5]">
      <div className="container mx-auto grid grid-cols-1 relative md:grid-cols-2 gap-5 md:gap-0">
        <div className="w-full">
          <img src={image} className="w-full" alt="" />
        </div>
        <div className="py-10 px-3 mb-5 w-full gap-1">
          <h3 className=" uppercase text-2xl font-bold text-[#2c241e]">
            Residences
          </h3>
          <img src={design} alt="" className="w-[220px]" />
          <small className="w-full">
            Spacious light-filled condominium residences, with panoramic views.
            An architectural wonder designed by Jean Nouvel.
          </small>
        </div>

        <div className="md:w-[500px] w-full p-3 h-[200px] static md:absolute md:top-[50%] md:left-[50%] md:translate-y-[-30%] md:translate-x-[-50%]">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800} // Adjust speed for smoother transitions
            loop={true} // Enable loop for continuous scrolling
            grabCursor={true} // Show grab cursor when slides are draggable
            modules={[Autoplay]}
            className="mySwiper bg-[#ffefe5] w-full h-full transition-opacity"
            style={{ transitionDuration: "0.8s" }} // Add custom CSS transition for opacity
          >
            {featureData.map((item, idx) => {
              return (
                <SwiperSlide key={idx} className=" flex relative grid-cols-2">
                  <div className="w-1/2 absolute left-0 flex flex-col justify-center items-center bg-[#ffefe5]">
                    <h2 className="uppercase text-md my-3">{item.title}</h2>
                    <small className="px-2 text-left">{item.desc}</small>
                  </div>
                  <img
                    src={item.image}
                    alt={`slide${idx}`}
                    className="absolute right-0 w-1/2 h-full"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
