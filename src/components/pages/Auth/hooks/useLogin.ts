import { useCallback } from "react";
import { emailSchema, passwordSchema } from "@utils/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authQueries } from "@infra/queries";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Auth } from "@infra/services/types";
import {
  deleteSessionData,
  getSessionData,
} from "@infra/storage/local/handler";
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
  const { login } = useAuthStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSuccess = useCallback((data: Auth.LoginResponse) => {
    login(data.data);
    const tempPage = getSessionData("TEMP_PAGE");
    if (tempPage) {
      navigate(tempPage);
      deleteSessionData("TEMP_PAGE");
      return;
    }
    navigate("/");
  }, []);

  const { mutate } = authQueries.useQueryLogin({
    onSuccess,
    onError: (error) => {
      toast.error(
        `Sorry, your email or password is invalid. Please try again. ${error.message}`,
        { position: "bottom-center" },
      );
    },
  });

  const onLogin = useCallback(
    async (data: FormData) => {
      mutate(data);
    },
    [errors],
  );

  return {
    register,
    errors,
    onLogin,
    handleSubmit,
  };
}
