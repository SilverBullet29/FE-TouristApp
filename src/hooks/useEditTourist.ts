import { Tourist } from "@infra/services/types/tourist";
import { useState } from "react";

type Props = {
  refetchFn: () => void;
};

export default function useEditTourist({ refetchFn }: Props) {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [selectedTourist, setSelectedTourist] = useState({} as Tourist.Item);

  const onClickEdit = (tourist: Tourist.Item) => {
    setSelectedTourist(tourist);
    setShowEdit(true);
  };

  const onCloseEdit = () => {
    setShowEdit(false);
  };

  const onSuccessEdit = () => {
    refetchFn();
    onCloseEdit();
  };

  return {
    showEdit,
    onCloseEdit,
    onClickEdit,
    onSuccessEdit,
    selectedTourist,
  };
}
