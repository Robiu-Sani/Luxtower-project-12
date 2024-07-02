import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lustower-project-35.vercel.app",
});

export default function useAxiosSource() {
  return { axiosSource: axiosInstance };
}
