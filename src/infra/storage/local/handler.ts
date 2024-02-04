import { STORE_KEY } from "@infra/config";
import { LOCAL_KEY } from "./key";
import AES from "crypto-js/aes";
import enc8 from "crypto-js/enc-utf8";

//#region storage
const INTERNAL_STORAGE =
  typeof window !== "undefined" ? window.localStorage : null;

export const storage = {
  get: (key: keyof typeof LOCAL_KEY): string | null => {
    if (!INTERNAL_STORAGE) {
      return null;
    }
    const data = INTERNAL_STORAGE.getItem(LOCAL_KEY[key]);
    if (!data) {
      return null;
    }
    return AES.decrypt(data, `${key}-${STORE_KEY}`)?.toString(enc8);
  },
  set: (key: keyof typeof LOCAL_KEY, value: string): void => {
    if (INTERNAL_STORAGE) {
      INTERNAL_STORAGE.setItem(
        LOCAL_KEY[key],
        AES.encrypt(value, `${key}-${STORE_KEY}`)?.toString(),
      );
    }
  },
  remove: (key: keyof typeof LOCAL_KEY): void => {
    if (INTERNAL_STORAGE) {
      INTERNAL_STORAGE.removeItem(LOCAL_KEY[key]);
    }
  },
  clear: (): void => {
    if (INTERNAL_STORAGE) {
      INTERNAL_STORAGE.clear();
    }
  },
};
//#endregion
