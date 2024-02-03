import { Icon } from "@components/atoms";
import { ModalDialog } from "@components/molecules";
import { FC, useCallback } from "react";
import { touristQueries } from "@infra/queries";
import { toast } from "react-toastify";
import { useTouristStore } from "@infra/storage/store";

type Props = {
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const ModalDeleteTourist: FC<Props> = ({ onClose, onSuccess, show }) => {
  const { tempTourist } = useTouristStore();
  const { mutate } = touristQueries.useQueryDelete({
    onSuccess: () => {
      toast.success("Tourist deleted successfully", {
        position: "bottom-center",
      });
      onSuccess();
    },
    onError: (error) => {
      toast.error(`"Something went wrong" ${error.message}`, {
        position: "bottom-center",
      });
      onClose();
    },
  });

  const onDelete = useCallback(() => {
    mutate({ id: tempTourist?.id ?? "" });
  }, [mutate, tempTourist?.id]);
  return (
    <ModalDialog
      title="Are you sure want to delete?"
      onClose={onClose}
      show={show}
      onCancel={onClose}
      onProceed={onDelete}
      proceedLabel="Delete"
    >
      <Icon name="warn" size={64} fill="error-500" className="mb-4" />
    </ModalDialog>
  );
};

export default ModalDeleteTourist;
