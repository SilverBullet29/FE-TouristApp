export namespace User {
  export interface UserCredential {
    token: string;
    expired_at: string;
    refresh_token: string;
  }
}
