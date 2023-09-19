import { AxiosError } from "axios";

export interface Response<T> {
  statusCode: number;
  data: T;
}

export interface ApiError {
  message: string;
  statusCode: number;
}

export type QueryReturn<T> =
  | ({ type: "success" } & T)
  | { type: "error"; data: AxiosError };
