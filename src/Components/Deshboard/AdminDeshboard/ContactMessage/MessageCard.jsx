import React from "react";
import { FaTrash } from "react-icons/fa";
import useAxiosSource from "../../../customComponent/useAxiosSorce";
import Swal from "sweetalert2";
import useContactMessage from "../../../customComponent/useContactMessage";

export default function MessageCard({ item }) {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useContactMessage();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSource.delete(`/contact_message/${id}`).then(() => {
          refetch();
          Swal.fire("Deleted!", "Your message has been deleted.", "success");
        });
      } else {
        Swal.fire("Cancelled", "Your message is safe :)", "info");
      }
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {item.name ? item.name : "Not found"}
          </h2>
          <p className="text-gray-600">{item.email}</p>
        </div>
        <button className="text-red-500 hover:text-red-700">
          <FaTrash onClick={() => handleDelete(item._id)} size={20} />
        </button>
      </div>
      <p className="mt-4 text-gray-700">
        {item.message ? item.message : "Not found"}
      </p>
      <p className="mt-2 text-gray-500 text-sm">
        {item.date ? item.date : "Not found"}
      </p>
    </div>
  );
}
