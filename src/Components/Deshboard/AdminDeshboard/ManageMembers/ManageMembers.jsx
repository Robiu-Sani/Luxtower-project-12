import { useState } from "react";
import logo from "../../../../Image/logo.svg";
import MAnageMemberTable from "./MAnageMemberTable";
import useAuthContext from "../../../customComponent/useAuthContext";

export default function ManageMembers() {
  const { LogedUser } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full min-h-screen pt-10 px-3">
      <div className="w-full flex flex-col gap-5 sm:flex-row justify-center sm:justify-between p-3 bg-[#2c241e]">
        <img src={logo} alt="Logo" />
        <input
          type="search"
          placeholder="Search Members by name, email, or status"
          className="input sm:w-[450px]"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="h-[50px] w-[50px] mr-3 hidden sm:flex justify-center cursor-pointer shadow-md items-center rounded-full overflow-hidden">
          <img src={LogedUser.photoURL} alt="Profile" className="h-full " />
        </div>
      </div>
      <div className="w-full max-h-[calc(100vh-150px)] mt-5 overflow-scroll">
        <MAnageMemberTable searchTerm={searchTerm} />
      </div>
    </div>
  );
}
