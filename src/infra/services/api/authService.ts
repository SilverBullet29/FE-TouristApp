import axiosClient from "../axiosClient";
import { Auth } from "../types";

export const postLogin = (
  params: Auth.LoginRequest,
): Promise<Auth.LoginResponse> =>
  axiosClient.post("/api/authaccount/login", { ...params });

export const postRegister = (
  params: Auth.RegisterRequest,
): Promise<Auth.RegisterResponse> =>
  axiosClient.post("/api/authaccount/registration", { ...params });
