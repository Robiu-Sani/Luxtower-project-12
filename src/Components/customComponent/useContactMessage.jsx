import { useQuery } from "@tanstack/react-query";
import useAxiosSource from "./useAxiosSorce";

export default function useContactMessage() {
  const { axiosSource } = useAxiosSource();
  const { data: contactMessages = [], refetch } = useQuery({
    queryKey: ["contactMessages"],
    queryFn: async () => {
      const res = await axiosSource.get("/contact_message");
      return res.data;
    },
  });
  return { contactMessages, refetch };
}
