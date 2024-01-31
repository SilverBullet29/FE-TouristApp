import { create } from "zustand";
import { AuthState } from "./types";
import { authServices } from "@infra/services";

export const useAuthStore = create<AuthState>((set) => {
  const setIsLogin = (isLogin: boolean) => set({ isLoggedin: isLogin });
  return {
    isLoggedin: false,
    setIsLogin,
    login: (credential) => {
      authServices.setCredential(credential);
      setIsLogin(true);
    },
    logout: () => {
      authServices.removeCredential();
      setIsLogin(false);
    },
  };
});
