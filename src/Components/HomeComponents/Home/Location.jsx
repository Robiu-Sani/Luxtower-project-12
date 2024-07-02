import image from "../../../Image/slide1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { MdOutlineBedroomChild } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi2";

export default function Location() {
  return (
    <div className="w-full pb-10 bg-[#ffefe5]">
      <div className="container mx-auto grid grid-cols-1 relative md:grid-cols-2 gap-5 md:gap-0">
        <div className="w-full p-10 flex justify-center items-center">
          <div className="w-full">
            <div className="text-3xl flex gap-3">
              <FaLocationDot /> <h1>87 Mishaum Point Rd,</h1>
            </div>
            <h6 className="ml-10">Dartmouth, MA 02748</h6>
            <div className="w-full my-10">
              <p>
                On the best lot at Phuket is situated the Kailua Residence. It
                features Ipe hardwood flooring on the interior and granite stone
                flooring on the lanais, high vaulted cedar ceilings.
              </p>
            </div>
            <div className="w-full mb-10 grid grid-cols-2">
              <div className="flex items-center gap-4">
                <VscDebugBreakpointLog /> <span>Quiet Neighbourhood</span>
              </div>
              <div className="flex items-center gap-4">
                <VscDebugBreakpointLog /> <span>Fabulous Views</span>
              </div>
              <div className="flex items-center gap-4">
                <VscDebugBreakpointLog /> <span>Great Local Community</span>
              </div>
              <div className="flex items-center gap-4">
                <VscDebugBreakpointLog /> <span>Large Play Center In Yard</span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center p-3">
              <p className="text-[#bb7f56] flex justify-center items-center gap-3 ">
                <PiMapPinSimpleAreaLight /> <span>1,286 sqft</span>
              </p>
              <p className="text-[#bb7f56] flex justify-center items-center gap-3 ">
                <MdOutlineBedroomChild /> <span>2</span>
              </p>
              <p className="text-[#bb7f56] flex justify-center items-center gap-3 ">
                <GiHomeGarage /> <span>1</span>
              </p>
              <p className="text-[#bb7f56] flex justify-center items-center gap-3 ">
                <HiOutlineHome /> <span>2</span>
              </p>
            </div>
          </div>
        </div>
        <img src={image} className="w-full" alt="" />
      </div>
    </div>
  );
}
