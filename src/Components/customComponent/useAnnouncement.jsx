import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";

export default function useAnnouncement() {
  const { axiosSource } = useAxiosSource();
  const { data: announcements = [], refetch } = useQuery({
    queryKey: ["announcement"],
    queryFn: async () => {
      const res = await axiosSource.get("/announcements");
      return res.data;
    },
  });
  return { announcements, refetch };
}
