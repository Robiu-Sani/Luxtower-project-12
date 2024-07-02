import useUsers from "./useUsers";
import useAxiosSource from "./useAxiosSorce";
import Swal from "sweetalert2";

export default function useHAndleMEmberbyEmail() {
  const { axiosSource } = useAxiosSource();
  const { refetch, users } = useUsers();

  const handlemember = (data, email) => {
    const user = users.find((user) => user.email === email);
    if (user && user.position !== "admin") {
      axiosSource
        .patch(`/usermanage/${email}`, data)
        .then(() => {
          refetch();
          console.log("Member position updated successfully");
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Something is wrong here!",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      console.log("User is an admin. Position not updated.");
    }
  };

  return [handlemember];
}
