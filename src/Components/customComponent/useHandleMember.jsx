import Swal from "sweetalert2";
import useUsers from "./useUsers";
import useAxiosSource from "./useAxiosSorce";

export default function useHandleMember() {
  const { refetch } = useUsers();
  const { axiosSource } = useAxiosSource();

  const handlemember = (data, id) => {
    console.log("Data:", data);
    console.log("ID:", id);
    axiosSource
      .patch(`/users/${id}`, data)
      .then(() => {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Member position added successfully",
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
  return [handlemember];
}
