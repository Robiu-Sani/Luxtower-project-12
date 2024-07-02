import { NavLink } from "react-router-dom";
import logo from "../../../Image/logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import UserLogOut from "../../HomeComponents/Authcation/LogOut";
import { FaDeleteLeft, FaList, FaUserAstronaut } from "react-icons/fa6";
import { TbMapPause } from "react-icons/tb";
import { MdContacts, MdHistoryEdu } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import useAuthContext from "../../customComponent/useAuthContext";
import useUsers from "../../customComponent/useUsers";

export default function SiteNavBar() {
  const [ShowNav, setShowNav] = useState(true);
  const { LogedUser } = useAuthContext();
  const { users } = useUsers();

  // Ensure LogedUser and users are defined
  const findUser =
    LogedUser && users
      ? users.find((item) => item.email === LogedUser.email)
      : null;
  const isMember = findUser && findUser.position === "member";

  return (
    <div
      className={`min-w-[250px] md:relative absolute ${
        ShowNav ? "-left-[250px]" : "left-0"
      }  md:left-0  bg-[#2c241e] min-h-screen`}
    >
      <div
        onClick={() => setShowNav(!ShowNav)}
        className={`block md:hidden w-[40px] h-[40px] rounded-full bg-[#2c241e] absolute top-0 ${
          ShowNav ? "-right-[40px]" : "right-0"
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
          to={"/userDeshboard"}
          className="flex uppercase items-center gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1"
        >
          <FaUserAstronaut /> My Profile
        </NavLink>
        {isMember && (
          <>
            <NavLink
              to={`/Makepayment`}
              className="flex items-center uppercase gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1"
            >
              <RiSecurePaymentLine /> Make payment
            </NavLink>
            <NavLink
              to={`/PaymentHistory`}
              className="flex items-center uppercase gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1"
            >
              <MdHistoryEdu /> Payment History
            </NavLink>
          </>
        )}
        <NavLink
          to={`/Announcements`}
          className="flex items-center uppercase gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1"
        >
          <GrAnnounce /> Announcements
        </NavLink>
      </div>

      <div className="w-full flex flex-col gap-1 pb-5 mb-5">
        <NavLink
          to={`/`}
          className="flex uppercase items-center gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1"
        >
          <IoHomeOutline /> Home
        </NavLink>
        <NavLink
          to={`/appartment`}
          className="flex uppercase items-center gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1"
        >
          <TbMapPause /> Appartment
        </NavLink>
        <NavLink
          to={`/contact`}
          className="flex uppercase items-center gap-3 pl-3 hover:pl-5 w-full shadow-md text-white font-bold p-1"
        >
          <MdContacts /> Contact
        </NavLink>
      </div>
      <div className="w-full p-3 absolute bottom-0">
        <UserLogOut />
      </div>
    </div>
  );
}
