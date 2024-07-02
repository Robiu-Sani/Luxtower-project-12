import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";

export default function usePAyment() {
  const { axiosSource } = useAxiosSource();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSource.get("/payments");
      return res.data;
    },
  });
  return { payments, paymentsRefetch: refetch };
}
