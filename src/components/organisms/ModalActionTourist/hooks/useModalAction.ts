import { zodResolver } from "@hookform/resolvers/zod";
import { touristQueries } from "@infra/queries";
import { APIResponseError } from "@infra/services/types";
import { useTouristStore } from "@infra/storage/store";
import { emailSchema } from "@utils/schema";
import { useCallback, useEffect } from "react";
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
  onSuccess: () => void;
  onError: () => void;
};

export default function useModalAction({ onSuccess, onError }: Params) {
  const { actionType, tempTourist, removeTempTourist } = useTouristStore();
  const handleSuccess = useCallback(() => {
    onSuccess?.();
    toast.success("Tourist updated successfully", {
      position: "bottom-center",
    });
    removeTempTourist();
  }, [onSuccess, removeTempTourist]);

  const handleError = useCallback(
    (error: APIResponseError) => {
      onError?.();
      toast.error(`"Something went wrong" ${error.message}`, {
        position: "bottom-center",
      });
      removeTempTourist();
    },
    [onError, removeTempTourist],
  );

  const { mutate: mutateEdit } = touristQueries.useQueryEdit({
    onSuccess: handleSuccess,
    onError: handleError,
  });
  const { mutate: mutateAdd } = touristQueries.useQueryAdd({
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const onSubmit = useCallback(
    (data: FormData) => {
      if (actionType === "update") {
        mutateEdit({ id: tempTourist?.id ?? "", ...data });
      } else {
        mutateAdd(data);
      }
    },
    [tempTourist?.id],
  );

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (actionType === "update" && tempTourist) {
      setValue("tourist_name", tempTourist.tourist_name);
      setValue("tourist_email", tempTourist.tourist_email);
      setValue("tourist_location", tempTourist.tourist_location);
    } else {
      reset();
    }
  }, [
    tempTourist?.tourist_name,
    tempTourist?.tourist_email,
    tempTourist?.tourist_location,
    setValue,
    reset,
  ]);

  return { register, handleSubmit, errors, onSubmit, setValue, actionType };
}
