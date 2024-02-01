import { create } from "zustand";
import { AuthState } from "./types";
import { authStorage } from "../local/auth";

export const useAuthStore = create<AuthState>((set) => {
  const setIsLogin = (isLogin: boolean) => set({ isLoggedin: isLogin });
  return {
    isLoggedin: authStorage.isAuthenticated() ?? false,
    setIsLogin,
    login: (credential) => {
      authStorage.setCredential(credential);
      setIsLogin(true);
    },
    logout: () => {
      authStorage.removeCredential();
      setIsLogin(false);
    },
  };
});
