import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";

export default function useAppartments() {
  const { axiosSource } = useAxiosSource();
  const { data: appartmants = [], refetch } = useQuery({
    queryKey: ["appartmants"],
    queryFn: async () => {
      const res = await axiosSource.get("/appartmants");
      return res.data;
    },
  });
  return { appartmants, refetch };
}
