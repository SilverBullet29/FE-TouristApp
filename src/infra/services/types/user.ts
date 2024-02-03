import { APIResponse } from "./api";

export namespace User {
  export interface UserData {
    id: string;
    name: string;
    email: string;
    password: string;
  }

  export interface Request {
    id: string;
    email: string;
    password: string;
  }

  export interface UserProfile extends UserData {
    avatar: string;
  }

  export type Response = UserProfile;
}
