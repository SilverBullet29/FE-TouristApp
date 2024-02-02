import { zodResolver } from "@hookform/resolvers/zod";
import { touristQueries } from "@infra/queries";
import { emailSchema } from "@utils/schema";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

const schema = z.object({
  tourist_email: emailSchema,
  tourist_name: z.string().min(4, "Name must be at least 4 characters"),
  tourist_location: z.string().min(3, "Name must be at least 3 characters"),
});

interface FormData {
  tourist_email: string;
  tourist_name: string;
  tourist_location: string;
}

type Params = {
  id: string;
  onSuccess: () => void;
  onError: () => void;
};

export default function useModalEdit({ id, onSuccess, onError }: Params) {
  const { mutate } = touristQueries.useQueryEdit({
    onSuccess: () => {
      onSuccess();
      toast.success("Tourist updated successfully", {
        position: "bottom-center",
      });
    },
    onError: (error) => {
      onError?.();
      toast.error(`"Something went wrong" ${error.message}`, {
        position: "bottom-center",
      });
    },
  });

  const onEdit = useCallback(
    (data: FormData) => {
      mutate({ id, ...data });
    },
    [id],
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, errors, onEdit, setValue };
}
