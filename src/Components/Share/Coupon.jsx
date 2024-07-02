export default function Coupon({ item }) {
  return (
    <div className="w-full">
      {/* ----------------------------Big screen coupon ------------------------------ */}
      <div className="w-full hidden sm:grid grid-cols-3 rounded-xl cursor-pointer shadow-md overflow-hidden bg-[#ffd8c1]">
        <div className="w-full col-span-2 p-5 pr-[40px] h-[200px] border-r-2 flex justify-center items-center relative border-dashed border-r-[#ffefe5]">
          <div className="absolute w-[60px] h-[60px] rounded-full -top-[30px] -right-[30px] bg-[#ffefe5] "></div>
          <div className="absolute w-[60px] h-[60px] rounded-full -bottom-[30px] -right-[30px] bg-[#ffefe5] "></div>
          <div className="w-full h-full relative rounded-md overflow-hidden bg-[#ffe0ce]">
            <div className="w-full absolute h-[200px] flex items-center rounded-full bg-slate-300 -top-[12%] -left-[50%]">
              <div className="w-1/2 flex flex-col justify-center items-center  absolute right-0 p-4 ">
                <h1
                  className={`text-center ${
                    item.offerType === "%"
                      ? "text-5xl font-extrabold"
                      : "text-3xl font-bold"
                  }`}
                >
                  {item.offerType === "%"
                    ? `${item.offerDigit + item.offerType}`
                    : `${item.offerType + item.offerDigit}`}
                </h1>
                <small className="text-center uppercase">off on your way</small>
              </div>
            </div>
            <div className="w-1/2 p-5 flex justify-center items-center absolute right-0 h-full">
              <small className="text-justify">{item.description}</small>
            </div>
          </div>
        </div>
        <div className="w-full p-5 pl-10">
          <div className="w-full h-full bg-[#ffe0ce] rounded-md p-4 flex flex-col justify-center items-center">
            <h1 className="text-md text-center font-extrabold uppercase">
              copon code
            </h1>
            <div className="w-full border border-dashed rounded-md border-gray-500 p-1">
              <p className="uppercase text-center">{item.code}</p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------mobile copon---------------------------- */}
      <div className="w-full block sm:hidden h-[160px] relative rounded-md overflow-hidden bg-[#ffe0ce]">
        <div className="w-full absolute h-[200px] flex items-center rounded-full bg-slate-300 -top-[12%] -left-[50%]">
          <div className="w-1/2 flex flex-col justify-center items-center  absolute right-0 p-4 ">
            <h1
              className={`text-center ${
                item.offerType === "%"
                  ? "text-5xl font-extrabold"
                  : "text-3xl font-bold"
              }`}
            >
              {item.offerType === "%"
                ? `${item.offerDigit + item.offerType}`
                : `${item.offerType + item.offerDigit}`}
            </h1>
            <small className="text-center uppercase">off on your way</small>
          </div>
        </div>
        <div className="w-1/2 p-5 flex flex-col justify-center items-center absolute right-0 h-full">
          <h1 className="text-md text-center font-extrabold uppercase">
            copon code
          </h1>
          <div className="w-full border border-dashed rounded-md border-gray-500 p-1">
            <p className="uppercase text-center">{item.code}</p>
          </div>
        </div>
        <small className="w-full p-3 text-center absolute bottom-0">
          {item.description}
        </small>
      </div>
    </div>
  );
}
