import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { AuthState } from "infra/storage/store/types";
import { authServices } from "@infra/services";
import { useAuthStore } from "../store/AuthStore";

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const authStore = useAuthStore();
  const IsAuthenticated = authServices.isAuthenticated();

  useEffect(() => {
    if (IsAuthenticated) {
      authStore.setIsLogin(true);
    } else {
      authStore.logout();
    }
  }, []);

  return (
    <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error in AuthProvider");
  }
  return context;
};
