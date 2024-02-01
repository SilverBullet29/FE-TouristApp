import { APIResponse } from "./api";

export namespace Auth {
  export interface UserCredential {
    $id: string;
    Id: string;
    Name: string;
    Email: string;
    Token: string;
    //CAN ADD ANOTHER CRED LIKE REFRESH TOKEN
  }
  export interface LoginRequest {
    email: string;
    password: string;
  }
  export interface LoginResponse extends APIResponse {
    data: UserCredential;
  }

  export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
  }

  export interface RegisterResponse extends APIResponse {
    data: {
      email: string;
      id: string;
      name: string;
    };
  }
}
