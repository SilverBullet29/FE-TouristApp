import { Tourist } from "@infra/services/types/tourist";
import { useTouristStore } from "@infra/storage/store";
import { useState } from "react";

type Props = {
  refetchFn: () => void;
};

export default function useEditTourist({ refetchFn }: Props) {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const { setTempTourist, removeTempTourist } = useTouristStore();

  const onClickEdit = (tourist: Tourist.Item) => {
    setTempTourist(tourist, "update");
    setShowEdit(true);
  };

  const onClickAdd = () => {
    setTempTourist(null, "add");
    setShowEdit(true);
  };

  const onCloseAction = () => {
    removeTempTourist();
    setShowEdit(false);
  };

  const onSuccessAction = () => {
    refetchFn();
    onCloseAction();
  };

  return {
    showEdit,
    onCloseAction,
    onSuccessAction,
    onClickEdit,
    onClickAdd,
  };
}
