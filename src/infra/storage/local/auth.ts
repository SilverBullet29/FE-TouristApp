import { Auth, User } from "@infra/services/types";
import { LOCAL_KEY, storage } from "@infra/storage/local";

type Storage = typeof storage;

export interface AuthStorage {
  isAuthenticated(): boolean;
  setCredential(credetial: Auth.UserCredential): void;
  removeCredential(): void;
  getToken(): string | null;
}

export class AuthStorage implements AuthStorage {
  private _storage: Storage;
  private _credential: Auth.UserCredential | null;
  public static credentialKey: keyof typeof LOCAL_KEY = "CREDENTIAL";

  constructor(s: Storage) {
    this._storage = s;
    this._credential = this._getCredential() || null;
    this.getToken();
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public getToken(): string {
    if (this._credential != null) {
      return this._credential.Token;
    }
    return this._getCredential()?.Token ?? "";
  }

  public getUserData(): User.UserData {
    if (this._credential != null) {
      return {
        id: this._credential.Id,
        name: this._credential.Name,
        email: this._credential.Email,
        password: this._credential.password,
      };
    }
    return {
      id: this._getCredential()?.Name ?? "",
      name: this._getCredential()?.Email ?? "",
      email: this._getCredential()?.Id ?? "",
      password: this._getCredential()?.password ?? "",
    };
  }

  private _getCredential() {
    return JSON.parse(
      String(this._storage.get(AuthStorage.credentialKey)),
    ) as any;
  }

  public setCredential(newCredential: Auth.UserCredential): void {
    this._credential = newCredential;
    this._storage.set(
      AuthStorage.credentialKey,
      JSON.stringify(this._credential),
    );
  }

  public removeCredential(): void {
    this._credential = null;
    this._storage.remove(AuthStorage.credentialKey);
  }
}

export const authStorage = new AuthStorage(storage);
