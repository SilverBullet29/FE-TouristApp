import { FC, useMemo } from "react";
import Avatar from "@assets/image/avatar.webp";
import { useAuthStore } from "@infra/storage/store";
type Props = {
  title?: string;
  description?: string;
  showAvatar?: boolean;
};

const Header: FC<Props> = ({ title, description, showAvatar }) => {
  const { logout, userData } = useAuthStore();
  const tempTitle = title ?? "Hallo! Pandu";
  const tempDesc = description ?? "Welcome back, Let's manage this!";
  const avatarName = useMemo(() => {
    return userData?.name.split(" ")[0];
  }, [userData?.name]);
  return (
    <div id="header-home" className="flex w-full flex-row justify-between">
      <div id="greeting" className="">
        <p className="mb-2 text-4xl font-semibold tracking-wide">{tempTitle}</p>
        <p className="text-base font-light text-neutral-500">{tempDesc}</p>
      </div>
      {showAvatar && (
        <div className="flex flex-row gap-3">
          <img
            src={Avatar}
            alt="avatar"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium">{avatarName}</p>
            <button
              type="button"
              className="text-xs text-error-600 hover:text-error-700"
              onClick={logout}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
