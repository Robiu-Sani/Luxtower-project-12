import { useEffect, useState } from "react";
import useAuthContext from "../../customComponent/useAuthContext";
import useAxiosSource from "../../customComponent/useAxiosSorce";
import useAgreements from "../../customComponent/useAgreements";
import useUsers from "../../customComponent/useUsers";

export default function AdminPRofile() {
  const { LogedUser } = useAuthContext();
  const { axiosSource } = useAxiosSource();
  const [apparmentLength, setAppartmanetLength] = useState();
  const { agreements } = useAgreements();
  const { users } = useUsers();
  const member = users.filter((item) => item.position === "member");
  const pending = agreements.filter((item) => item.Status === "pending");

  useEffect(() => {
    axiosSource
      .get("/appartmentlength")
      .then((response) => setAppartmanetLength(response.data.count))
      .catch((err) => console.error(err));
  }, [axiosSource]);

  return (
    <div className="w-full min-h-screen p-3">
      <div className="w-full mt-11 shadow-md p-3">
        <div className="w-full flex justify-between items-center">
          <span></span>
          <span className="bg-[#2c241e] px-3 p-1 text-[#c78960] cursor-pointer border-2 border-white">
            Admin Profile
          </span>
        </div>
        <div className="w-full flex mb-3 justify-between items-center">
          <img
            src={LogedUser.photoURL}
            className=" h-[100px] md:h-[150px] lg:h-[200px] border-2 border-[#2c241e]"
            alt=""
          />
          <div className="w-full md:p-4 p-2 bg-[#2c241e] flex justify-center items-center">
            <h1 className="text-[#c78960] md:text-3xl text-xl uppercase">
              {LogedUser.displayName}
            </h1>
          </div>
        </div>
        <hr />
        <div className="w-full p-2 flex gap-3 justify-center items-center flex-col sm:flex-row sm:justify-between">
          <small>Email : {LogedUser.email}</small>
          <small>Last logIn : {LogedUser.metadata.lastSignInTime}</small>
          <small>Create time : {LogedUser.metadata.creationTime}</small>
        </div>
      </div>
      <div className="w-full mt-4 shadow-md p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Total Appartment : {apparmentLength}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Available Appartment : {apparmentLength - agreements.length}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Percentage of agreement : {agreements.length}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Total users : {users.length}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Total mambers : {member.length}
        </div>
        <div className="w-full bg-[#2c241e] p-2 text-[#c78960]">
          Agreements on pending : {pending.length}
        </div>
      </div>
    </div>
  );
}
