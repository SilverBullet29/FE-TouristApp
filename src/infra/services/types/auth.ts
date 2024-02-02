import { APIResponse } from "./api";
import { User } from "./user";

export namespace Auth {
  export interface UserCredential {
    $id: string;
    Id: string;
    Name: string;
    Email: string;
    Token: string;
  }

  export interface LoginRequest {
    email: string;
    password: string;
  }
  export type LoginResponse = APIResponse<UserCredential>;

  export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
  }

  export type RegisterResponse = APIResponse<User.UserData>;
}
