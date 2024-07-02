import { Outlet } from "react-router-dom";
import SiteNavBar from "./SiteNavBar";

export default function UserDeshboardRoot() {
  return (
    <div className="w-full flex relative justify-between bg-[#ffe6d5]">
      <SiteNavBar></SiteNavBar>
      <Outlet></Outlet>
    </div>
  );
}
