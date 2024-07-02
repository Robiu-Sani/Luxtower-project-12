import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSource from "../../../customComponent/useAxiosSorce";
import useAnnouncement from "../../../customComponent/useAnnouncement";

export default function AnnouncementCard({ item }) {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useAnnouncement();

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
          .delete(`/announcements/${id}`)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: "Your announcement has been deleted.",
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

  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden my-6 transform transition duration-500 hover:scale-105">
      <div className="md:flex">
        <div className="p-8">
          <div className="flex justify-between w-full items-center">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {item.date}
            </div>
            <button
              onClick={() => handleDelete(item._id)}
              className="text-red-500 hover:text-red-700"
            >
              <FaTrashAlt className="text-xl" />
            </button>
          </div>
          <h1 className="block mt-2 text-xl leading-tight font-bold text-black">
            {item.title}
          </h1>
          <p className="mt-3 text-gray-500">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
