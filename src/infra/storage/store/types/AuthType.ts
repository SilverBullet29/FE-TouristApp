import { Auth, User } from "@infra/services/types";

export type AuthState = {
  isLoggedin: boolean;
  userData: User.UserData;
  setIsLogin: (isLogin: boolean) => void;
  login: (credential: Auth.UserCredential) => void;
  logout: () => void;
};
