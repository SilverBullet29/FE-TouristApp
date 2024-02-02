import { Tourist } from "@infra/services/types/tourist";
import { useState } from "react";

type Props = {
  refetchFn: () => void;
};

export default function useDeleteTourist({ refetchFn }: Props) {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [selectedTourist, setSelectedTourist] = useState({} as Tourist.Item);

  const onClickDelete = (tourist: Tourist.Item) => {
    setSelectedTourist(tourist);
    setShowDelete(true);
  };

  const onCloseDelete = () => {
    setShowDelete(false);
  };

  const onSuccessDelete = () => {
    refetchFn();
    setShowDelete(false);
  };

  return {
    showDelete,
    onCloseDelete,
    onClickDelete,
    onSuccessDelete,
    selectedTourist,
  };
}
