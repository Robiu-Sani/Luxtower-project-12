import { useState } from "react";
import logo from "../../../../Image/logo.svg";
import useAuthContext from "../../../customComponent/useAuthContext";
import PaymentTable from "./PaymentTable";

export default function PaymentHistory() {
  const { LogedUser } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full min-h-screen pt-10 px-3">
      <div className="w-full flex flex-col gap-5 sm:flex-row justify-center sm:justify-between p-3 bg-[#2c241e]">
        <img src={logo} alt="Logo" />
        <input
          type="search"
          placeholder="Search by month"
          className="input sm:w-[450px]"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="h-[50px] w-[50px] mr-3 hidden sm:flex justify-center cursor-pointer shadow-md items-center rounded-full overflow-hidden">
          <img src={LogedUser.photoURL} alt="User" className="h-full" />
        </div>
      </div>
      <div className="w-full max-h-[calc(100vh-150px)] mt-5 overflow-scroll">
        <PaymentTable searchTerm={searchTerm} />
      </div>
    </div>
  );
}
