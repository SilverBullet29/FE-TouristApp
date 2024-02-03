import { userQueries } from "@infra/queries";
import { useAuthStore } from "@infra/storage/store";

export default function useProfile() {
  const { userData, logout } = useAuthStore();
  const { data } = userQueries.useQueryProfile(
    {
      id: userData?.id ?? "",
      email: userData?.email ?? "",
      password: userData?.password ?? "",
    },
    { enabled: !!userData?.id },
  );

  return {
    myProfile: data,
    logout,
  };
}
