import BackgroundImage from "@assets/image/asset-bg.webp";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useMatch } from "react-router-dom";

const Login = () => {
  const match = useMatch("/:page");
  const isLoginPage = match?.params.page === "login";
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="relative flex w-full items-center justify-center gap-8 rounded-3xl p-10 md:mx-32 md:h-2/3 2xl:mx-64 2xl:my-64 2xl:h-3/5">
        <div className="z-10 w-1/2">
          <p className="font-poppins mb-3 font-bold leading-[150%] text-neutral-100 md:text-4xl 2xl:text-5xl">
            Welcome to Tourista
          </p>
          <p className="font-poppins font-light leading-[150%] text-neutral-100 md:text-base 2xl:text-lg">
            Let's manage your travel customer easly!
          </p>
        </div>
        {isLoginPage ? <LoginForm /> : <RegisterForm />}
        <img
          src={BackgroundImage}
          alt="bg-image"
          className="absolute left-0 top-0 z-0 h-full w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
