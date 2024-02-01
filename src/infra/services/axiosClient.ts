import axios from "axios";
import { setupInterceptors } from "./interceptor";
import { APIRequestConfig } from "./types";
import { API_URL } from "@infra/config";

const baseAxiosClient = axios.create({ baseURL: API_URL });
setupInterceptors(baseAxiosClient);

const axiosClient = {
  get<T>(url: string, config?: APIRequestConfig): Promise<T> {
    return baseAxiosClient.get(url, config);
  },
  post<T>(url: string, data?: unknown, config?: APIRequestConfig): Promise<T> {
    return baseAxiosClient.post(url, data, config);
  },
  patch<T>(url: string, data?: unknown, config?: APIRequestConfig): Promise<T> {
    return baseAxiosClient.patch(url, data, config);
  },
  put<T>(url: string, data?: unknown, config?: APIRequestConfig): Promise<T> {
    return baseAxiosClient.put(url, data, config);
  },
  delete<T>(url: string, config?: APIRequestConfig): Promise<T> {
    return baseAxiosClient.delete(url, config);
  },
};

export default axiosClient;
