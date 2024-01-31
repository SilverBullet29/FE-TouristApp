import { User } from "@infra/services/types/user";

export type AuthState = {
  setIsLogin: (isLogin: boolean) => void;
  isLoggedin: boolean;
  login: (credential: User.UserCredential) => void;
  logout: () => void;
};
