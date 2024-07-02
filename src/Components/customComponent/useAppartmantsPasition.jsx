import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";

export default function useAppartmantsPasition({ getCurrentPage }) {
  const { axiosSource } = useAxiosSource();
  const itemOfPAges = 6;

  const { data: appartmantsPasition = [], refetch } = useQuery({
    queryKey: ["appartmantsPasition", getCurrentPage],
    queryFn: async () => {
      const res = await axiosSource.get(
        `/appartmantsPasition?page=${getCurrentPage}&size=${itemOfPAges}`
      );
      return res.data;
    },
    keepPreviousData: true, // Optional: To keep the previous data while fetching new data
  });

  return { appartmantsPasition, refetch };
}
