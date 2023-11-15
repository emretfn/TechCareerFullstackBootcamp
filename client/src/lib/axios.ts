import Axios from "axios";
import { toast } from "sonner";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message;
    toast.error(message);

    return Promise.reject(error);
  }
);
