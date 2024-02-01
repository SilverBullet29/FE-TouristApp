import { TextInput, TextInputPassword } from "@components/atoms";
import useRegister from "../hooks/useRegister";
import AuthForm from "./AuthForm";

const RegisterForm = () => {
  const { onRegis, handleSubmit, errors, register } = useRegister();
  const onSubmit = handleSubmit(onRegis);
  return (
    <AuthForm
      title="Sign up"
      titleHref="Already have account?"
      href="/login"
      buttonHref="Sign in"
      buttonLabel="Sign up"
      onSubmit={onSubmit}
    >
      <TextInput
        label="Email"
        className="mb-4"
        placeholder="Email"
        errors={errors.email?.message}
        {...register("email", { required: "Email is required" })}
      />
      <TextInput
        label="Name"
        className="mb-4"
        placeholder="Name"
        errors={errors.name?.message}
        {...register("name", { required: "Name is required" })}
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

export default RegisterForm;
