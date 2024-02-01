import { Auth } from "@infra/services/types";
import { AppUseMutationOptions } from "../type";
import { useMutation } from "@tanstack/react-query";
import { postLogin, postRegister } from "@infra/services/api";

export const useQueryLogin = (
  options?: AppUseMutationOptions<Auth.LoginResponse, Auth.LoginRequest>,
) => useMutation({ mutationFn: postLogin, ...options });

export const useQueryRegister = (
  options?: AppUseMutationOptions<Auth.RegisterResponse, Auth.RegisterRequest>,
) => useMutation({ mutationFn: postRegister, ...options });
