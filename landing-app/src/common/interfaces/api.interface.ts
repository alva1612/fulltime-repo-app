export interface Response<T> {
  statusCode: number;
  data: T;
}

export interface ApiError {
  message: string;
  statusCode: number;
}
