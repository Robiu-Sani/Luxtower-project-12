import { Outlet } from "react-router-dom";
import AdminSiteNavBar from "./AdminSiteNavBar";

export default function DeshboardRoot() {
  return (
    <div className="w-full flex relative justify-between bg-[#ffe6d5]">
      <AdminSiteNavBar></AdminSiteNavBar>
      <Outlet></Outlet>
    </div>
  );
}
