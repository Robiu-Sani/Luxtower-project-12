import { Link } from "react-router-dom";
import image from "../../../Image/1.jpg";
import {
  FaFacebook,
  FaLocationDot,
  FaPhone,
  FaTwitter,
  FaVoicemail,
  FaWebflow,
  FaWhatsapp,
} from "react-icons/fa6";
import ContactForm from "./ContactForm";

export default function ContactInfo() {
  return (
    <div className="w-full">
      <div className="container mx-auto relative py-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="w-full grid grid-cols-2 gap-5">
          <div className="w-full p-5 border-[#2c241e] border-t-[35px] border-2 shadow-xl flex flex-col justify-center items-center">
            <FaPhone className="text-xl text-[#2c241e] text-center " />
            <h2 className="uppercase text-xl text-[#2c241e] font-bold">
              Phone
            </h2>
            <small>+8801617-688805</small>
            <small>+8801845-256458</small>
            <small>688805</small>
          </div>
          <div className="w-full p-5 border-[#2c241e] border-t-[35px] border-2 shadow-xl flex flex-col justify-center items-center">
            <FaVoicemail className="text-xl text-[#2c241e] text-center " />
            <h2 className="uppercase text-xl text-[#2c241e] font-bold">
              Email
            </h2>
            <small>service@gmail.com</small>
            <small>helpline@gamil.com</small>
            <small>hotline@gmail.com</small>
          </div>
          <div className="w-full p-5 border-[#2c241e] border-t-[35px] border-2 shadow-xl flex flex-col justify-center items-center">
            <FaWebflow className="text-xl text-[#2c241e] text-center " />
            <h2 className="uppercase text-xl text-[#2c241e] font-bold">
              online
            </h2>
            <Link to="https://web.whatsapp.com/">
              <small className="flex justify-center gap-2 items-center">
                <FaWhatsapp /> whatsapp
              </small>
            </Link>
            <Link to="https://www.facebook.com/">
              <small className="flex justify-center gap-2 items-center">
                <FaFacebook /> facebook
              </small>
            </Link>
            <Link to="https://twitter.com/home">
              <small className="flex justify-center gap-2 items-center">
                <FaTwitter /> twitter
              </small>
            </Link>
          </div>
          <div className="w-full p-5 border-[#2c241e] border-t-[35px] border-2 shadow-xl flex flex-col justify-center items-center">
            <FaLocationDot className="text-xl text-[#2c241e] text-center " />
            <h2 className="uppercase text-xl text-[#2c241e] font-bold">
              Manhattan
            </h2>
            <small>401 Broadway, 24th Floor</small>
            <small> Orchard View, London, UK</small>
            <small>Tel: +1-212-125-6789</small>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full sm:rounded-tr-[80px] overflow-hidden border-2 border-[#2c241e]">
          <img src={image} alt="" className="w-full h-full" />
        </div>
        <div className="w-full flex text-[#ffefe5] justify-center items-center">
          <div className="w-full bg-[#2c241e] p-5">
            <h3>More comforetable talkin with us?</h3>

            <small className="">
              Schedule a 15 minute intro call with us. He’ll answer your
              questions and discuss.
            </small>
            <br />
            <small>Call : +88 01617-688805</small>
          </div>
        </div>
      </div>
    </div>
  );
}
