import { MdCancel, MdCheckCircle } from "react-icons/md";
import useAxiosSource from "../../../customComponent/useAxiosSorce";
import Swal from "sweetalert2";
import useHAndleMEmberbyEmail from "../../../customComponent/useHAndleMEmberbyEmail";
import useDeleteAgreement from "../../../customComponent/useDeleteAgreement";

export default function AgreementTableRow({ agreement, refetch }) {
  const { axiosSource } = useAxiosSource();
  const [handlemember] = useHAndleMEmberbyEmail();
  const [handleDelete] = useDeleteAgreement();

  const handlAcceptStatus = (data, id) => {
    console.log("Data:", data);
    console.log("ID:", id);
    axiosSource
      .patch(`/agreements/${id}`, data)
      .then(() => {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Member Status added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something is worng here!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleAccept = (data, email) => {
    handlAcceptStatus({ Status: "Accept" }, data._id);
    handlemember({ position: "member" }, email);
  };

  return (
    <tr className="grid grid-cols-10">
      <td className="w-full text-center uppercase text-[#2c241e] p-2 col-span-1">
        {agreement.User_name}
      </td>
      <td className="w-full text-center  text-[#2c241e] p-2 col-span-2">
        {agreement.User_email}
      </td>
      <td className="w-full text-center  text-[#2c241e] p-2 col-span-1">
        {agreement.floorNo}
      </td>
      <td className="w-full text-center uppercase  text-[#2c241e] p-2 col-span-1">
        {agreement.Block_name}
      </td>
      <td className="w-full text-center  text-[#2c241e] p-2 col-span-1">
        {agreement.Apartment_no}
      </td>
      <td className="w-full text-center  text-[#2c241e] p-2 col-span-1">
        ${agreement.Rent}
      </td>
      <td className="w-full text-center  text-[#2c241e] p-2 col-span-1">
        {agreement.date}
      </td>
      <td className="w-full text-center  text-[#2c241e] p-2 col-span-1">
        {agreement.Status}
      </td>
      <td className="w-full text-center gap-5  text-[#2c241e] p-2 flex justify-center items-center col-span-1">
        <MdCancel
          className="cursor-pointer text-xl"
          onClick={() => handleDelete(agreement._id)}
        ></MdCancel>
        <MdCheckCircle
          className="cursor-pointer text-xl"
          onClick={() => handleAccept(agreement, agreement.User_email)}
        ></MdCheckCircle>
      </td>
    </tr>
  );
}
