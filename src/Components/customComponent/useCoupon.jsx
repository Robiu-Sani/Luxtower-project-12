import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";

export default function useCoupon() {
  const { axiosSource } = useAxiosSource();
  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await axiosSource.get("/coupons");
      return res.data;
    },
  });
  return { coupons, refetch };
}
