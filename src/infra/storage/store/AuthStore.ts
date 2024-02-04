import { create } from "zustand";
import { AuthState } from "./types";
import { authStorage } from "../local/auth";

export const useAuthStore = create<AuthState>((set) => {
  const setIsLogin = (isLogin: boolean) => set({ isLoggedin: isLogin });
  return {
    isLoggedin: authStorage.isAuthenticated() ?? false,
    userData: authStorage.getUserData(),
    setIsLogin,
    login: (credential) => {
      authStorage.setCredential(credential);
      set({
        userData: {
          email: credential.Email,
          name: credential.Name,
          id: credential.Id,
          password: credential.password,
        },
      });
      setIsLogin(true);
    },
    logout: () => {
      authStorage.removeCredential();
      setIsLogin(false);
    },
  };
});
