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
    <div className="flex h-screen w-full flex-col p-6 lg:p-16">
      <p className="mb-6 text-4xl font-semibold tracking-wide text-neutral-700">
        Profile
      </p>
      <div className="border-custom-100 flex w-fit min-w-full flex-row gap-4 rounded-xl border p-4 lg:min-w-[500px] lg:gap-8 lg:p-6">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-primary-100 lg:h-40 lg:w-40 lg:rounded-2xl">
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
            <p className="mb-1 text-lg font-semibold text-neutral-700 lg:text-2xl">
              {myProfile?.name}
            </p>
            <p className="text-sm text-neutral-500 lg:text-xl">
              {myProfile?.email}
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="group mt-4 lg:mt-0"
          >
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
