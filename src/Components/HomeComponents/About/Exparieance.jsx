import design from "../../../Image/design1.png";
import Exparieanceimg from "../../../Image/exp.jpg";

export default function Exparieance() {
  return (
    <div className="w-full pb-10">
      <div className="container mx-auto grid grid-cols-1 relative md:grid-cols-2 gap-5 md:gap-0">
        <div className="w-full p-5">
          <div className="flex mb-5 flex-col w-[220px] gap-1">
            <h3 className="text-center uppercase text-xl text-[#c78960]">
              A Bold Vision
            </h3>
            <img src={design} alt="" />
          </div>
          <h1 className="text-2xl md:text-3xl my-3">
            Exceptional Value Remarkable Quality
          </h1>
          <p className="text-justify mb-4">
            From the lush Waterline Square Park to dazzling glass facades, a
            team of world-renowned design talent considered every detail for
            truly impeccable surroundings.
          </p>
          <p className="text-justify mt-4">
            Featuring a refined palette of natural materials, the open living
            spaces provide a warm counterpoint to the soaring ceilings and
            full-height windows. Custom herringbone floors and hand-selected
            stone bring a rich tactility to the rooms.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="relative">
            <img
              src={Exparieanceimg}
              className="w-[250px] z-10 h-[250px]"
              alt=""
            />
            <div className="w-full h-full border-2 absolute z-0 bottom-10 left-10 border-black "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
