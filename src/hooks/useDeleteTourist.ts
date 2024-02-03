import { Tourist } from "@infra/services/types/tourist";
import { useTouristStore } from "@infra/storage/store";
import { useState } from "react";

type Props = {
  refetchFn: () => void;
};

export default function useDeleteTourist({ refetchFn }: Props) {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const { setTempTourist, removeTempTourist } = useTouristStore();

  const onClickDelete = (tourist: Tourist.Item) => {
    setTempTourist(tourist, "delete");
    setShowDelete(true);
  };

  const onCloseDelete = () => {
    removeTempTourist();
    setShowDelete(false);
  };

  const onSuccessDelete = () => {
    removeTempTourist();
    refetchFn();
    setShowDelete(false);
  };

  return {
    showDelete,
    onCloseDelete,
    onClickDelete,
    onSuccessDelete,
  };
}
