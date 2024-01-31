import { User } from "@infra/services/types/user";
import { LOCAL_KEY, storage } from "@infra/storage/local";

type Storage = typeof storage;

export interface AuthService {
  isAuthenticated(): boolean;
  setCredential(credetial: User.UserCredential): void;
  removeCredential(): void;
  getToken(): string | null;
  getExpiredAt(): string | null;
  getRefreshToken(): string | null;
}

export class AuthService implements AuthService {
  private _storage: Storage;
  private _credential: User.UserCredential | null;
  public static credentialKey: keyof typeof LOCAL_KEY = "CREDENTIAL";

  constructor(s: Storage) {
    this._storage = s;
    this._credential = this._getcCedential() || null;
    this.getToken();
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public getToken(): string {
    if (this._credential != null) {
      return this._credential.token;
    }
    return this._getcCedential()?.token ?? "";
  }

  public getExpiredAt(): string | null {
    if (this._credential != null) {
      return this._credential.expired_at;
    }
    return this._getcCedential()?.expired_at ?? "";
  }

  public getRefreshToken(): string {
    if (this._credential != null) {
      return this._credential?.refresh_token;
    }
    return this._getcCedential()?.refresh_token ?? "";
  }

  private _getcCedential() {
    return JSON.parse(
      String(this._storage.get(AuthService.credentialKey))
    ) as any;
  }

  public setCredential(newCredential: User.UserCredential): void {
    this._credential = newCredential;
    this._storage.set(
      AuthService.credentialKey,
      JSON.stringify(this._credential)
    );
  }

  public removeCredential(): void {
    this._credential = null;
    this._storage.remove(AuthService.credentialKey);
  }
}
