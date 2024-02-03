import { useCallback } from "react";
import { emailSchema, passwordSchema } from "@utils/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authQueries } from "@infra/queries";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "@infra/services/types";
import { useAuthStore } from "@infra/storage/store";

const schema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

interface FormData {
  email: string;
  password: string;
}

export default function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;
  const { login } = useAuthStore();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSuccess = useCallback(
    (data: Auth.LoginResponse) => {
      login({ ...data?.data, password: getValues("password") });
      if (from) {
        navigate(from, { replace: true });
        return;
      }
      navigate("/", { replace: true });
    },
    [from, getValues],
  );

  const { mutate } = authQueries.useMutationLogin({
    onSuccess,
    onError: (error) => {
      toast.error(
        `Sorry, your email or password is invalid. Please try again. ${error.message}`,
        { position: "bottom-center" },
      );
    },
  });

  const onLogin = useCallback(async (data: FormData) => {
    mutate(data);
  }, []);

  return {
    register,
    errors,
    onLogin,
    handleSubmit,
  };
}
