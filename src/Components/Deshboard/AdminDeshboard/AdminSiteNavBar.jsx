import { NavLink } from "react-router-dom";
import logo from "../../../Image/logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import UserLogOut from "../../HomeComponents/Authcation/LogOut";
import { FaDeleteLeft, FaList } from "react-icons/fa6";
import { RiCoupon2Fill } from "react-icons/ri";
import {
  MdAdminPanelSettings,
  MdContacts,
  MdHistoryEdu,
  MdRememberMe,
} from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { TbMapPause } from "react-icons/tb";

export default function AdminSiteNavBar() {
  const [ShowNav, setShowNav] = useState(true);

  return (
    <div
      className={`min-w-[250px] md:relative z-50 absolute ${
        ShowNav ? "-left-[250px]" : "left-0"
      }  md:left-0  bg-[#2c241e] min-h-screen`}
    >
      <div
        onClick={() => setShowNav(!ShowNav)}
        className={`block md:hidden w-[40px] h-[40px] rounded-full bg-[#2c241e] absolute top-0 ${
          ShowNav ? "-right-[40px]" : "right-[0px]"
        } `}
      >
        <div className="w-full h-full flex justify-center items-center">
          {ShowNav ? (
            <FaList className="text-2xl text-white" />
          ) : (
            <FaDeleteLeft className="text-2xl text-white" />
          )}
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-10">
        <img src={logo} alt="" />
      </div>
      <div className="w-full flex flex-col gap-1 pb-5 mb-5 border-b">
        <NavLink
          to={"/adminDeshboard"}
          className={`flex justify-Center uppercase items-center gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1 `}
        >
          <MdAdminPanelSettings /> Admin Profile
        </NavLink>
        <NavLink
          to={`/ManageMembers`}
          className={` flex justify-Center items-center uppercase gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1 `}
        >
          <MdRememberMe /> Manage Members
        </NavLink>
        <NavLink
          to={`/MakeAnnouncement`}
          className={` flex justify-Center items-center uppercase gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1 `}
        >
          <GrAnnounce /> Make Announcement
        </NavLink>
        <NavLink
          to={`/AgreementRequests`}
          className={` flex justify-Center items-center uppercase gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1 `}
        >
          <SiGotomeeting /> Agreement Requests
        </NavLink>
        <NavLink
          to={`/ManageCoupons`}
          className={` flex justify-Center items-center uppercase gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1 `}
        >
          <RiCoupon2Fill /> Manage Coupons
        </NavLink>
        <NavLink
          to={`/contactmessage`}
          className={` flex justify-Center items-center uppercase gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1 `}
        >
          <MdContacts /> Contact Messages
        </NavLink>
        <NavLink
          to={`/adminpaymenthistory`}
          className="flex items-center uppercase gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1"
        >
          <MdHistoryEdu /> Payment History
        </NavLink>
      </div>

      <div className="w-full flex flex-col gap-1 pb-5 mb-5">
        <NavLink
          to={`/`}
          className={`flex justify-Center uppercase items-center gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1 `}
        >
          <IoHomeOutline /> Home
        </NavLink>
        <NavLink
          to={`/appartment`}
          className={`flex justify-Center uppercase items-center gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1 `}
        >
          <TbMapPause /> Appartment
        </NavLink>
      </div>
      <div className="w-full p-3 absolute bottom-0">
        <UserLogOut></UserLogOut>
      </div>
    </div>
  );
}
