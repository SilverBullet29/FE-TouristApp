import { Auth } from "@infra/services/types";

export type AuthState = {
  setIsLogin: (isLogin: boolean) => void;
  isLoggedin: boolean;
  login: (credential: Auth.UserCredential) => void;
  logout: () => void;
};
