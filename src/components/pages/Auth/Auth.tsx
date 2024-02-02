import BackgroundImage from "@assets/image/asset-bg.webp";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useMatch } from "react-router-dom";

const Auth = () => {
  const match = useMatch("/:page");
  const isLoginPage = match?.params.page === "login";
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative mx-0 flex h-full w-full items-center justify-center gap-12 rounded-none p-10 lg:mx-32 lg:h-2/3 lg:rounded-3xl 2xl:mx-64 2xl:my-64">
        <div className="hd:flex z-10 hidden w-1/2 flex-col lg:flex">
          <p className="font-poppins mb-3 font-bold leading-[150%] text-neutral-100 lg:text-4xl xl:text-5xl">
            Welcome to Tourista
          </p>
          <p className="font-poppins text-base font-light leading-[150%] text-neutral-100 lg:text-lg xl:text-xl">
            Let's manage your travel customer easly!
          </p>
        </div>
        {isLoginPage ? <LoginForm /> : <RegisterForm />}
        <img
          src={BackgroundImage}
          alt="bg-image"
          className="absolute left-0 top-0 z-0 h-full w-full rounded-none object-cover lg:rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Auth;
