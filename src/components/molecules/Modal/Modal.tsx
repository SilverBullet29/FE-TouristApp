import { Button } from "@components/atoms";
import { Modal as ModalFlowBite } from "flowbite-react";
import { FC, useCallback } from "react";

export type ModalProps = {
  show: boolean;
  title?: string;
  cancelLabel?: string;
  proceedLabel?: string;
  isProceedDisabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onClose: () => void;
  onProceed?: () => void;
  onCancel?: () => void;
};

const Modal: FC<ModalProps> = ({
  show,
  title,
  children,
  proceedLabel,
  cancelLabel,
  isLoading,
  isProceedDisabled,
  onClose,
  onProceed,
  onCancel,
}) => {
  const handleCancel = useCallback(() => {
    onCancel?.();
    onClose();
  }, [onCancel]);

  return (
    <ModalFlowBite show={show} onClose={onClose}>
      <ModalFlowBite.Header>{title ?? "Title Modal"}</ModalFlowBite.Header>
      <ModalFlowBite.Body>{children}</ModalFlowBite.Body>
      <ModalFlowBite.Footer>
        <Button
          variant="secondary"
          color="gray"
          onClick={handleCancel}
          className="w-[100px]"
        >
          {cancelLabel ?? "Cancel"}
        </Button>
        <Button
          color="primary"
          onClick={onProceed}
          isLoading={isLoading}
          disabled={isProceedDisabled}
          className="w-[100px]"
          type="submit"
        >
          {proceedLabel ?? "Submit"}
        </Button>
      </ModalFlowBite.Footer>
    </ModalFlowBite>
  );
};

export default Modal;
