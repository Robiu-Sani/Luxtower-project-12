import bgimg from "../../../Image/slide2.jpg";
import design from "../../../Image/design1.png";
import { LiaHomeSolid } from "react-icons/lia";
import { BsHandThumbsUp } from "react-icons/bs";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdFlipCameraAndroid } from "react-icons/md";

export default function WeProvide() {
  return (
    <div
      className="w-full min-h-screen overflow-hidden flex justify-center flex-col items-center bg-no-repeat bg-cover bg-center bg-fixed p-2 md:p-5 xl:p-10 py-10 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${bgimg})`,
      }}
    >
      <div className="flex mb-10 flex-col mx-auto w-[220px] gap-1">
        <h3 className="text-center font-extrabold uppercase text-3xl text-[#ffc9a4]">
          we provide
        </h3>
        <img src={design} alt="" />
      </div>
      <div className="container z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="w-full flex justify-center items-center gap-5 flex-col p-5">
          <div className="w-[60px] h-[60px] border flex justify-center items-center border-[#ffc9a4] rotate-45">
            <LiaHomeSolid className="text-4xl -rotate-45 text-[#ffc9a4]" />
          </div>
          <h3 className="text-xl text-[#ffffff] mt-4 uppercase text-center ">
            BEST PROPERTY LISTS
          </h3>
          <p className="text-center text-[#ffffff]">
            We provide consumers with a content-rich listings in a handy format.
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-5 flex-col p-5">
          <div className="w-[60px] h-[60px] border flex justify-center items-center border-[#ffc9a4] rotate-45">
            <BsHandThumbsUp className="text-4xl -rotate-45 text-[#ffc9a4]" />
          </div>
          <h3 className="text-xl text-[#ffffff] mt-4 uppercase text-center ">
            BEST PRICE IN MARKET
          </h3>
          <p className="text-center text-[#ffffff]">
            Price estimates and sales histories for property, updating
            information.
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-5 flex-col p-5">
          <div className="w-[60px] h-[60px] border flex justify-center items-center border-[#ffc9a4] rotate-45">
            <SiAmazonsimpleemailservice className="text-4xl -rotate-45 text-[#ffc9a4]" />
          </div>
          <h3 className="text-xl text-[#ffffff] mt-4 uppercase text-center ">
            GUARANTEED SERVICES
          </h3>
          <p className="text-center text-[#ffffff]">
            Our managers will keep you informed and you can act with certainty.
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-5 flex-col p-5">
          <div className="w-[60px] h-[60px] border flex justify-center items-center border-[#ffc9a4] rotate-45">
            <MdFlipCameraAndroid className="text-4xl -rotate-45 text-[#ffc9a4]" />
          </div>
          <h3 className="text-xl text-[#ffffff] mt-4 uppercase text-center ">
            MARKETING RESEARCH
          </h3>
          <p className="text-center text-[#ffffff]">
            All our marketing researchers today have a tough job multitasking.
          </p>
        </div>
      </div>
      <h1 className="md:text-[13vw] text-[100px] transform rotate-90 sm:rotate-0 absolute font-bold uppercase text-[#9b684a25]">
        We <br /> <span className="ml-0 sm:ml-[100px]">provide</span>
      </h1>
    </div>
  );
}
