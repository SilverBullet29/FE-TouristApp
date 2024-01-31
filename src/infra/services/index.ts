import { storage } from "@infra/storage/local";
import { AuthService } from "@infra/storage/local/auth";

const authServices = new AuthService(storage);

export { authServices };
