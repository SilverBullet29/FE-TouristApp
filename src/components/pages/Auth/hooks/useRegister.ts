import { useCallback } from "react";
import { emailSchema, passwordSchema } from "@utils/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { authQueries } from "@infra/queries";
import { toast } from "react-toastify";
import { Auth } from "@infra/services/types";

const schema = z.object({
  email: emailSchema,
  name: z.string().min(4, "Name must be at least 4 characters"),
  password: passwordSchema,
});

interface FormData {
  email: string;
  name: string;
  password: string;
}

export default function useRegister() {
  const navigate = useNavigate();

  const onSuccess = useCallback((data: Auth.RegisterResponse) => {
    toast.success(
      "Sign up success. Please Sign in with your email and password",
      { position: "bottom-center" },
    );
    navigate("/login");
  }, []);

  const { mutate } = authQueries.useMutationRegister({
    onSuccess,
    onError: (error) => {
      toast.error(
        `Sorry, your email or password is invalid. Please try again. ${error.message}`,
        { position: "bottom-center" },
      );
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onRegis = useCallback(async (data: FormData) => {
    mutate(data);
  }, []);

  return {
    register,
    errors,
    onRegis,
    handleSubmit,
  };
}
