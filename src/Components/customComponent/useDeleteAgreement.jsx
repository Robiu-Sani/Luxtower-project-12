import { useCallback } from "react";
import Swal from "sweetalert2";
import useAxiosSource from "./useAxiosSorce"; // Adjust the path accordingly
import useUsers from "./useUsers"; // Assuming this hook provides the refetch function
import useAgreements from "./useAgreements";

const useDeleteAgreement = () => {
  const { axiosSource } = useAxiosSource();
  const { refetch } = useUsers();
  const { AgreeRefetch } = useAgreements();

  const handleDelete = useCallback(
    (id) => {
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
            .delete(`/agreements/${id}`)
            .then((response) => {
              if (response.status === 200) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Agreement has been deleted.",
                  icon: "success",
                });
                refetch();
                AgreeRefetch();
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "Failed to delete the agreement.",
                  icon: "error",
                });
              }
            })
            .catch((err) => {
              console.error("Delete request error:", err.message);
              Swal.fire({
                title: "Error!",
                text: "An error occurred while deleting the agreement.",
                icon: "error",
              });
            });
        }
      });
    },
    [axiosSource, refetch, AgreeRefetch]
  );

  return [handleDelete];
};

export default useDeleteAgreement;
