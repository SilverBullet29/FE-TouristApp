import { useCallback } from "react";
import { emailSchema, passwordSchema } from "@utils/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

interface FormData {
  email: string;
  password: string;
}

export default function useLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onLogin = useCallback(
    async (data: FormData) => {
      console.log(data);
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
