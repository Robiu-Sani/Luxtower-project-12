import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { BiTargetLock } from "react-icons/bi";

export default function AboutText() {
  return (
    <div className="container mx-auto py-10 px-2">
      {/* <h1 data-aos="zoom-in-up" className="text-center text-3xl font-bold">
        About Us
      </h1> */}
      <h3 className="text-center text-xl my-5 font-bold">
        Experience Luxury Living: Our Story
      </h3>
      <div className="max-w-[1000px] mx-auto p-2">
        <p className="text-justify">
          At LuxTower, we redefine the standard of luxury living. Our journey
          began with a vision to create an unparalleled living experience within
          a single building. With a focus on premium amenities and exceptional
          services, LuxTower is dedicated to providing a lifestyle of comfort,
          convenience, and elegance.
        </p>
        <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="w-full p-3">
            <BiTargetLock className="text-4xl" />
            <h3 className="text-2xl my-4 font-bold">Our Vision</h3>
            <p className="text-justify">
              Our vision is to create a community where residents can enjoy a
              harmonious balance of luxury and convenience. We strive to set new
              standards in urban living, offering a sanctuary in the heart of
              the city where every detail is meticulously crafted to enhance
              your lifestyle.
            </p>
          </div>
          <div className="w-full p-3">
            <AiOutlineSafetyCertificate className="text-4xl" />
            <h3 className="text-2xl my-4 font-bold">Our Commitment</h3>
            <p className="text-justify">
              At LuxTower, our commitment is to excellence in every aspect. We
              pride ourselves on providing a secure, inclusive, and vibrant
              community for our residents. With top-notch security,
              state-of-the-art facilities, and a dedicated management team, we
              ensure a seamless and enriching living experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
