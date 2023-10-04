import axios from "axios";
import { ENV } from "../env";

export const httpCient = axios.create({
  baseURL: ENV.API_URL,
  timeout: 5000,
});
