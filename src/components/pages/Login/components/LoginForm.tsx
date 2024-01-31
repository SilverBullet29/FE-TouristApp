import { Button, TextInput, TextInputPassword } from "@components/atoms";
import useLogin from "../hooks/useLogin";
import AccountQuestion from "./AccountQuestion";

const LoginForm = () => {
  const { onLogin, handleSubmit, register, errors } = useLogin();
  return (
    <div className="z-10 flex h-fit w-1/3 flex-col items-start rounded-2xl bg-neutral-100 p-8">
      <p className="text-basic-900 mb-4 text-start font-semibold md:text-xl 2xl:text-2xl">
        Sign in
      </p>
      <form className="w-full" onSubmit={handleSubmit(onLogin)}>
        <TextInput
          label="Email"
          className="mb-4"
          placeholder="Email"
          errors={errors.email?.message}
          {...register("email", { required: "Email is required" })}
        />
        <TextInputPassword
          label="Password"
          type="password"
          placeholder="Password"
          errors={errors.password?.message}
          {...register("password", { required: "Password is required" })}
        />
        <AccountQuestion
          href="/register"
          buttonLabel="Sign up"
          title="Don't have account?"
        />
        <Button type="submit" isFull className="mt-6">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
