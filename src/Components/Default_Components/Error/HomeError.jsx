import { Link } from "react-router-dom";
import error from "../../../Image/404.gif";

export default function HomeError() {
  return (
    <div className="w-full min-h-screen flex justify-center overflow-hidden items-center relative">
      <Link
        to={"/"}
        className="flex justify-center animation1 items-center w-[150px] h-[150px] border rounded-full bg-slate-400 absolute"
      >
        <h1 className="font-bold text-white">GO HOME</h1>
      </Link>
      <img src={error} alt="error" className="max-w-[1000px]" />
    </div>
  );
}
