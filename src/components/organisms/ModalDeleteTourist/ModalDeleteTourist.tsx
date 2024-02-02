import { Icon } from "@components/atoms";
import { ModalDialog } from "@components/molecules";
import { Tourist } from "@infra/services/types/tourist";
import { FC, useCallback } from "react";
import { touristQueries } from "@infra/queries";
import { toast } from "react-toastify";

type Props = {
  initial?: Tourist.Item;
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const ModalDeleteTourist: FC<Props> = ({
  onClose,
  onSuccess,
  show,
  initial,
}) => {
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
    mutate({ id: initial?.id ?? "" });
  }, [mutate, initial?.id]);
  return (
    <ModalDialog
      title="Are you sure want to delete?"
      onClose={onClose}
      show={show}
      onCancel={onClose}
      onProceed={onDelete}
    >
      <Icon name="warn" size={64} fill="error-500" className="mb-4" />
    </ModalDialog>
  );
};

export default ModalDeleteTourist;
