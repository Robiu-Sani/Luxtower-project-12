import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";

export default function useAgreements() {
  const { axiosSource } = useAxiosSource();
  const { data: agreements = [], refetch } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSource.get("/agreements");
      return res.data;
    },
  });
  return { agreements, AgreeRefetch: refetch };
}
