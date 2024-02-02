import { TextInput } from "@components/atoms";
import { Modal } from "@components/molecules";
import { Tourist } from "@infra/services/types/tourist";
import { FC, useEffect } from "react";
import useModalEdit from "./hooks/useModalEdit";

type Props = {
  initial?: Tourist.Item;
  show: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

const ModalEditTourist: FC<Props> = ({ initial, show, onClose, onSuccess }) => {
  const { register, handleSubmit, errors, onEdit, setValue } = useModalEdit({
    id: initial?.id ?? "",
    onSuccess,
    onError: () => {
      onClose();
    },
  });

  useEffect(() => {
    if (initial) {
      setValue("tourist_name", initial.tourist_name);
      setValue("tourist_email", initial.tourist_email);
      setValue("tourist_location", initial.tourist_location);
    }
  }, [
    initial?.tourist_name,
    initial?.tourist_email,
    initial?.tourist_location,
    setValue,
  ]);

  return (
    <Modal
      title="Edit Tourist"
      show={show}
      onClose={onClose}
      cancelLabel="Cancel"
      onProceed={handleSubmit(onEdit)}
      proceedLabel="Save"
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

export default ModalEditTourist;
