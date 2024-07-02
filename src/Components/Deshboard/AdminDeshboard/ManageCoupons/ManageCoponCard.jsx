import { FaTrash, FaPenAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSource from "../../../customComponent/useAxiosSorce";
import useCoupon from "../../../customComponent/useCoupon";
import { useState } from "react";
import UpdateCooupons from "./UpdateCooupons";

export default function ManageCouponCard({ item }) {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useCoupon();
  const [callUpdate, setCallUpdate] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource
          .delete(`/coupons/${id}`)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coupon has been deleted.",
                icon: "success",
              });
              refetch();
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the coupon.",
                icon: "error",
              });
            }
          })
          .catch((err) => {
            console.error("Delete request error:", err.message);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the coupon.",
              icon: "error",
            });
          });
      }
    });
  };

  const handleToggleUpdate = () => {
    setCallUpdate(!callUpdate);
  };

  return (
    <div className="w-full block shadow-md h-[160px] relative rounded-md overflow-hidden bg-[#ffe0ce]">
      {callUpdate && (
        <UpdateCooupons item={item} handleToggleUpdate={handleToggleUpdate} />
      )}
      <FaPenAlt
        onClick={handleToggleUpdate}
        className="absolute top-10 right-2 text-xl z-10 cursor-pointer"
      />
      <FaTrash
        onClick={() => handleDelete(item._id)}
        className="absolute top-2 right-2 text-xl z-10 text-red-500 cursor-pointer"
      />
      <div className="w-full absolute h-[200px] flex items-center rounded-full bg-slate-300 -top-[12%] -left-[50%]">
        <div className="w-1/2 flex flex-col justify-center items-center absolute right-0 p-4">
          <h1
            className={`text-center ${
              item.offerType === "%"
                ? "text-5xl font-extrabold"
                : "text-3xl font-bold"
            }`}
          >
            {item.offerType === "%"
              ? `${item.offerDigit + item.offerType}`
              : `${item.offerType + item.offerDigit}`}
          </h1>
          <small className="text-center uppercase">off on your way</small>
        </div>
      </div>
      <div className="w-1/2 p-5 flex flex-col justify-center items-center absolute right-0 h-full">
        <h1 className="text-md text-center font-extrabold uppercase">
          coupon code
        </h1>
        <div className="w-full border border-dashed rounded-md border-gray-500 p-1">
          <p className="uppercase text-center">{item.code}</p>
        </div>
      </div>
    </div>
  );
}
