import { Button, TextInput, TextInputPassword } from "@components/atoms";
import useRegister from "../hooks/useRegister";
import AccountQuestion from "./AccountQuestion";

const RegisterForm = () => {
  const { onRegis, handleSubmit, errors, register } = useRegister();
  return (
    <div className="z-10 flex h-fit w-1/3 flex-col items-start rounded-2xl bg-neutral-100 p-8">
      <p className="text-basic-900 mb-4 text-start font-semibold md:text-xl 2xl:text-2xl">
        Sign up
      </p>
      <form onSubmit={handleSubmit(onRegis)} className="w-full">
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
        <AccountQuestion
          href="/login"
          buttonLabel="Sign in"
          title="Already have account?"
        />
        <Button type="submit" isFull className="mt-6">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
