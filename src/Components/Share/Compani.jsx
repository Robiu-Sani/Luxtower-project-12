import logo1 from "../../Image/c1.png";
import logo2 from "../../Image/c2.png";
import logo3 from "../../Image/c3.png";
import logo4 from "../../Image/c4.png";

export default function Compani() {
  return (
    <div className="container mx-auto  grid grid-cols-6">
      <div className="w-full opacity-50 hover:opacity-100">
        <img src={logo1} />
      </div>
      <div className="w-full opacity-50 hover:opacity-100">
        <img src={logo2} />
      </div>
      <div className="w-full opacity-50 hover:opacity-100">
        <img src={logo3} />
      </div>
      <div className="w-full opacity-50 hover:opacity-100">
        <img src={logo4} />
      </div>
      <div className="w-full col-span-2 flex justify-center items-center">
        <h3 className="uppercase text-sm font-bold text-center sm:text-xl">
          We work with the best
        </h3>
      </div>
    </div>
  );
}
