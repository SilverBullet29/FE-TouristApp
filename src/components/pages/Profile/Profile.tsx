import { useAuthStore } from "@infra/storage/store";
import { Icon } from "@components/atoms";
import { userQueries } from "@infra/queries";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";

const Profile = () => {
  const { logout, userData } = useAuthStore();
  const navigate = useNavigate();
  const {
    mutate,
    data: myProfile,
    isPending,
  } = userQueries.useMutationProfile();
  const fetchProfile = useCallback(() => {
    mutate({
      email: userData?.email,
      password: userData?.password,
      id: userData?.id,
    });
  }, [userData?.id, userData?.email, userData?.password]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleLogout = useCallback(() => {
    logout();
    navigate("/login", { replace: true });
  }, [logout, navigate]);

  return (
    <div className="flex h-screen w-full flex-col p-16">
      <p className="mb-6 text-4xl font-semibold tracking-wide text-neutral-700">
        Profile
      </p>
      <div className="flex w-fit min-w-[500px] flex-row gap-8 rounded-xl border border-custom-100 p-6">
        <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-primary-100">
          {isPending ? (
            <Spinner color={"pink"} />
          ) : (
            <img
              src={myProfile?.avatar}
              alt="profile"
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-1 text-2xl font-semibold text-neutral-700">
              {myProfile?.name}
            </p>
            <p className="text-xl text-neutral-500">{myProfile?.email}</p>
          </div>
          <button type="button" onClick={handleLogout} className="group">
            <div className="flex flex-row items-center gap-2 group-hover:text-error-600">
              <Icon name="sign-out" fill="error-500" />
              <span className="text-error-500">Sign out</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
