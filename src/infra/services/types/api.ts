import { AxiosError, AxiosRequestConfig } from "axios";

export interface APIResponseError<T = string> {
  statusCode: number;
  message: T;
}

export interface APIResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface APIMeta {
  page: string;
  per_page: number;
  total_pages: number;
  totalrecord: number;
}

export type APIRequestConfig = AxiosRequestConfig;

export interface AppAxiosError<T> extends AxiosError<APIResponseError, T> {}
