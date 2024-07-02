import img1 from "../../../Image/6.jpg";

export default function DesignQuote() {
  return (
    <div className="container my-10 mx-auto py-10 px-2 grid grid-cols-1 sm:grid-cols-2">
      <div className="w-full flex justify-center items-center">
        <div className="relative">
          <img src={img1} className="w-[250px] z-10 h-[250px]" alt="" />
          <div className="w-full h-full border-2 absolute z-0 bottom-10 left-10 border-black "></div>
        </div>
      </div>
      <div className="text-right p-5 flex flex-col justify-center items-start ml-10">
        <blockquote className="text-4xl font-bold leading-tight">
          "We Were Trying To Create Place, And A Sense Of A Community Was Always
          At The Forefront Of Our Design Mission."
        </blockquote>
        <p className="mt-5 text-xl font-medium">Clark Linsley</p>
        <p className="text-lg text-gray-600">President Development Group</p>
      </div>
    </div>
  );
}
