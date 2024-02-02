import { FC, useCallback } from "react";
import { ModalProps } from "../Modal/Modal";
import { Modal as ModalFlowBite } from "flowbite-react";
import { Button } from "@components/atoms";

type Props = ModalProps;

const ModalDialog: FC<Props> = ({
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
    <div>
      <ModalFlowBite show={show} size={"md"} onClose={onClose}>
        <ModalFlowBite.Body>
          <div className="flex flex-col items-center justify-center text-center">
            {children}
            <p className="mb-5 text-lg font-semibold text-neutral-700">
              {title ?? "Are you sure?"}
            </p>
            <div className="flex gap-4">
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
            </div>
          </div>
        </ModalFlowBite.Body>
      </ModalFlowBite>
    </div>
  );
};

export default ModalDialog;
