import { TextInput } from "@components/atoms";
import { Modal } from "@components/molecules";
import { Tourist } from "@infra/services/types/tourist";
import { FC } from "react";
import useModalAction from "./hooks/useModalAction";

type Props = {
  initial?: Tourist.Item;
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const ModalActionTourist: FC<Props> = ({ show, onClose, onSuccess }) => {
  const { register, handleSubmit, errors, actionType, onSubmit } =
    useModalAction({
      onSuccess,
      onError: () => {
        onClose();
      },
    });

  return (
    <Modal
      title={actionType === "update" ? "Edit Tourist" : "Add Tourist"}
      show={show}
      onClose={onClose}
      cancelLabel="Cancel"
      onProceed={handleSubmit(onSubmit)}
      proceedLabel={actionType === "update" ? "Save" : "Add"}
    >
      <TextInput
        placeholder="Name..."
        label="Name"
        className="mb-4"
        errors={errors.tourist_name?.message}
        {...register("tourist_name")}
      />
      <TextInput
        placeholder="Email..."
        label="Email"
        className="mb-4"
        errors={errors.tourist_email?.message}
        {...register("tourist_email")}
      />
      <TextInput
        placeholder="Location..."
        label="Location"
        errors={errors?.tourist_location?.message}
        {...register("tourist_location")}
      />
    </Modal>
  );
};

export default ModalActionTourist;
