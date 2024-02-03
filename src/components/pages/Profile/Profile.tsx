import useProfile from "./hooks/useProfile";
import { Icon } from "@components/atoms";

const Profile = () => {
  const { myProfile, logout } = useProfile();
  return (
    <div className="flex h-screen w-full flex-col p-16">
      <p className="mb-6 text-4xl font-semibold tracking-wide text-neutral-700">
        Profile
      </p>
      <div className="border-custom-100 flex w-fit min-w-[500px] flex-row gap-8 rounded-xl border p-6">
        <img
          src={myProfile?.avatar}
          alt="profile"
          className="h-40 w-40 rounded-2xl border border-neutral-200 bg-primary-100"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="mb-1 text-2xl font-semibold text-neutral-700">
              {myProfile?.name}
            </p>
            <p className="text-xl text-neutral-500">{myProfile?.email}</p>
          </div>
          <button type="button" onClick={logout} className="group">
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
