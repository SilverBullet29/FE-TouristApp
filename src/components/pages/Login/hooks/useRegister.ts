import { useCallback } from "react";
import { emailSchema, passwordSchema } from "@utils/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onRegis = useCallback(
    async (data: FormData) => {
      console.log(data);
    },
    [errors],
  );

  return {
    register,
    errors,
    onRegis,
    handleSubmit,
  };
}
