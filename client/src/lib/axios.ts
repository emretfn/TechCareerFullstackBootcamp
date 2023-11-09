import Axios from "axios";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
