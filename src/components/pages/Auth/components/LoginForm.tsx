import { TextInput, TextInputPassword } from "@components/atoms";
import useLogin from "../hooks/useLogin";
import AuthForm from "./AuthForm";

const LoginForm = () => {
  const { onLogin, handleSubmit, register, errors } = useLogin();
  const onSubmit = handleSubmit(onLogin);
  return (
    <AuthForm
      title="Sign in"
      titleHref="Don't have account?"
      href="/register"
      buttonLabel="Sign in"
      buttonHref="Sign up"
      onSubmit={onSubmit}
    >
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
    </AuthForm>
  );
};

export default LoginForm;
