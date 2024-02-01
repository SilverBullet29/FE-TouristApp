import { AxiosError, AxiosRequestConfig } from "axios";

export interface APIResponseError<T = string> {
  statusCode: number;
  message: T;
}

export interface APIResponse {
  success: boolean;
  message?: string;
}

export type APIRequestConfig = AxiosRequestConfig;

export interface AppAxiosError<T> extends AxiosError<APIResponseError, T> {}
