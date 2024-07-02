import logo from "../../../Image/logo.svg";
import bgImg from "../../../Image/fbg.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full flex-col relative p-5 sm:p-10 bg-[#2c241e] flex overflow-hidden justify-center items-center">
      <img
        src={bgImg}
        alt=""
        className="absolute w-full sm:w-1/2 right-0 z-10  bottom-0"
      />
      <div className="container border-b pb-10 border-b-1 border-white mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="w-full">
          <img src={logo} alt="" />
        </div>
        <div className="w-full flex flex-col text-white">
          <h1 className="mb-10 text-2xl">Address</h1>
          <span>Germany — 785 15h Street,</span>
          <span>Office 478</span>
          <span>Berlin, De 81566</span>
        </div>
        <div className="w-full flex flex-col text-white">
          <h1 className="mb-10 text-2xl">Say Hello</h1>
          <span>info@email.com</span>
          <span>+1 840 841 25 69</span>
        </div>
        <div className="w-full flex flex-col text-white">
          <h1 className="mb-10 text-2xl">Useful Links</h1>
          <Link to={`/Announcements`}>News</Link>
          <Link to={`/appartment`}>Projects</Link>
          <Link to={`/appartment`}>License</Link>
          <Link to={`/appartment`}>Terms Of Service</Link>
        </div>
      </div>
      <div className="w-full flex sm:flex-row-reverse flex-col  gap-5 justify-center sm:justify-between items-center pt-10 px-2">
        <div className="text-white flex gap-3 z-50 cursor-pointer text-2xl">
          <Link to="https://www.facebook.com/">
            <FaFacebook />
          </Link>
          <Link to="https://twitter.com/home">
            <FaTwitter />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagram />
          </Link>
          <Link to="https://web.whatsapp.com/me/+880161768885">
            <FaWhatsapp />
          </Link>
        </div>
        <p className="text-white font-thin">
          © 2024 LuxTower. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
