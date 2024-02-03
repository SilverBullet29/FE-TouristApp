import { ActionButton } from "@components/atoms";
import { Tourist as TouristType } from "@infra/services/types/tourist";
import { FC, MouseEventHandler, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface Props extends TouristType.Item {
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  className?: string;
}

const Tourist: FC<Props> = ({
  onClickEdit,
  onClickDelete,
  tourist_profilepicture,
  tourist_name,
  tourist_email,
  tourist_location,
  id,
}) => {
  const navigate = useNavigate();
  const handleClickEdit = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.stopPropagation();
      onClickEdit?.();
    },
    [onClickEdit],
  );
  const handleClickDelete = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.stopPropagation();
      onClickDelete?.();
    },
    [onClickDelete],
  );

  const handleClickCard = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      e.stopPropagation();
      navigate(`/${id}`);
    },
    [id, navigate],
  );

  return (
    <a
      className="grid w-full transform cursor-pointer grid-cols-4 items-center rounded-lg border-b border-neutral-200 py-3 pr-4 transition ease-in-out hover:bg-neutral-200"
      onClick={handleClickCard}
    >
      <div className="flex flex-row items-center gap-4">
        <img
          src={tourist_profilepicture}
          alt="tourist-pic"
          className="h-10 w-10 rounded-full bg-primary-400 object-cover"
        />
        <div>
          <p className="mb-1 text-sm font-semibold text-neutral-700">
            {tourist_name}
          </p>
        </div>
      </div>
      <p className="text-sm text-neutral-700">{tourist_email}</p>
      <p className="text-sm text-neutral-700">{tourist_location}</p>
      <div className="flex items-center justify-end gap-x-4">
        <ActionButton
          icon="pencil"
          color="primary-500"
          onClick={handleClickEdit}
        />
        <ActionButton
          icon="trash"
          color="error-500"
          onClick={handleClickDelete}
        />
      </div>
    </a>
  );
};

export default Tourist;
