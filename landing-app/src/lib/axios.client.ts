import axios from "axios";

export const httpCient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
});
