import { Link, NavLink } from "react-router-dom";
import logo from "../../../Image/logo.svg";
import { useState } from "react";
import UserLogOut from "../../HomeComponents/Authcation/LogOut";
import useAuthContext from "../../customComponent/useAuthContext";
import useUsers from "../../customComponent/useUsers";
import { RiLoginCircleFill } from "react-icons/ri";

export default function NavBar() {
  const [callBox, setCallBox] = useState(false);
  const { LogedUser } = useAuthContext();
  const { users } = useUsers();
  const findUser = LogedUser
    ? users.find((item) => item.email === LogedUser.email)
    : null;
  const isUserAdmin = findUser && findUser.position === "admin";

  //Profile Link Box
  const ProfileLinkBox = (
    <div
      className={`absolute bg-[rgba(0,0,0,0.4)] top-[80px]
      ${callBox ? "right-4" : "-right-[120%]"}
      p-5 w-[250px] flex flex-col justify-center items-center gap-2 border-2 border-white`}
    >
      <h3 className="uppercase cursor-none text-white letterSpaceing">
        {LogedUser ? LogedUser.displayName : ""}
      </h3>
      {isUserAdmin ? (
        <NavLink
          to={"/adminDeshboard"}
          className={` text-center w-full shadow-md text-white font-bold p-1 border border-[rgba(141,141,141,0.4)]`}
        >
          DESHBOARD
        </NavLink>
      ) : (
        <NavLink
          to={"/userDeshboard"}
          className={` text-center w-full shadow-md text-white font-bold p-1 border border-[rgba(141,141,141,0.4)]`}
        >
          DESHBOARD
        </NavLink>
      )}
      <UserLogOut></UserLogOut>
    </div>
  );

  //nav item links is here
  const navItems = (
    <>
      <li>
        <NavLink className="font-bold text-white" to={"/"}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold text-white" to={"/about"}>
          ABOUT
        </NavLink>
      </li>

      <li>
        <NavLink className="font-bold text-white" to={"/appartment"}>
          APARTMENT
        </NavLink>
      </li>

      <li>
        <NavLink className="font-bold text-white" to={"/contact"}>
          CONTACT US
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[rgba(0,0,0,0.4)] fixed top-0 z-50">
      {LogedUser ? ProfileLinkBox : ""}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[rgba(0,0,0,0.6)] rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="w-[35%] md:w-[80%] justify-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">{navItems}</ul>
        {LogedUser ? (
          <div
            onClick={() => setCallBox(!callBox)}
            className="h-[50px] w-[50px] mr-3 flex justify-center cursor-pointer shadow-md items-center rounded-full overflow-hidden"
          >
            <img src={LogedUser.photoURL} alt="Im" className="h-full w-auto" />
          </div>
        ) : (
          <Link className="font-bold text-white" to={"/login"}>
            <RiLoginCircleFill className="text-4xl" />
          </Link>
        )}
      </div>
    </div>
  );
}
