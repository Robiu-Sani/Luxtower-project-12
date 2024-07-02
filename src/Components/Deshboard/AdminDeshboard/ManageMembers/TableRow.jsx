import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineGroupRemove } from "react-icons/md";
import useHandleMember from "../../../customComponent/useHandleMember";
import { FaTrash } from "react-icons/fa";
import useDeleteMembers from "../../../customComponent/useDeleteMembers";
import useAgreements from "../../../customComponent/useAgreements";

export default function TableRow({ item }) {
  const { image, name, email, position, _id } = item;
  const [handlemember] = useHandleMember();
  const [handleUserDelete] = useDeleteMembers();
  const { agreements } = useAgreements();
  const agreementsFind = agreements.find(
    (agreement) => agreement.User_email === email
  );

  return (
    <tr className="grid grid-cols-10">
      <td className="text-center p-2 text-[#2c241e] col-span-1 flex justify-center items-center w-full">
        <img
          src={image}
          className="w-[50px] h-[50px] rounded-md"
          alt={`${name}'s profile`}
        />
      </td>
      <td className="text-center uppercase p-2 text-[#2c241e] col-span-2 flex justify-center items-center w-full">
        {name}
      </td>
      <td className="text-center p-2 text-[#2c241e] col-span-3 flex justify-center items-center w-full">
        {email}
      </td>
      <td className="text-center p-2 text-[#2c241e] col-span-2 flex justify-center items-center w-full">
        {position}
      </td>
      <td className="text-center p-2 text-[#2c241e] col-span-1 flex gap-5 justify-center items-center w-full">
        <span
          onClick={() => handlemember({ position: "user" }, _id)}
          className="flex justify-center items-center gap-2 cursor-pointer"
        >
          <MdOutlineGroupRemove className="text-xl" />
        </span>
        <span
          onClick={() => handlemember({ position: "user" }, _id)}
          className="flex justify-center items-center gap-2 cursor-pointer"
        ></span>
        <FaTrash
          onClick={() =>
            handleUserDelete(_id, agreementsFind ? agreementsFind._id : null)
          }
          className="text-xl cursor-pointer"
        />
      </td>
      <td className="text-center p-2 text-[#2c241e] col-span-1 flex gap-5 justify-center items-center w-full">
        <small
          onClick={() => handlemember({ position: "admin" }, _id)}
          className="flex justify-center gap-2 items-center cursor-pointer"
        >
          <GrUserAdmin /> Make Admin
        </small>
      </td>
    </tr>
  );
}
