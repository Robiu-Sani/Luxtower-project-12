import { useCallback } from "react";
import Swal from "sweetalert2";
import useAxiosSource from "./useAxiosSorce";
import useUsers from "./useUsers";
import useAgreements from "./useAgreements";
import useDeleteAgreement from "./useDeleteAgreement";

export default function useDeleteMembers() {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useUsers();
  const { AgreeRefetch } = useAgreements();
  const [handleDelete] = useDeleteAgreement();

  const handleUserDelete = useCallback(
    (id, agreementid) => {
      axiosSource
        .delete(`/users/${id}`)
        .then((response) => {
          if (response.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
            AgreeRefetch();
            if (agreementid) {
              handleDelete(agreementid);
            }
          } else {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the user.",
              icon: "error",
            });
          }
        })
        .catch((error) => {
          console.error("Delete request error:", error.message);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the user.",
            icon: "error",
          });
        });
    },
    [axiosSource, refetch, AgreeRefetch]
  );

  return [handleUserDelete];
}
