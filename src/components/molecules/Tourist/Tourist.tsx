import { ActionButton } from "@components/atoms";
import { Tourist as TouristType } from "@infra/services/types/tourist";
import { FC, MouseEventHandler, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AvatarIcon from "@assets/image/avatar.webp";

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
      navigate(`/tourist/${id}`);
    },
    [id, navigate],
  );

  return (
    <a
      className="flex w-full transform cursor-pointer grid-cols-4 flex-col items-start gap-x-10 gap-y-1 rounded-lg border-b border-neutral-200 py-3 pr-4 transition ease-in-out hover:bg-neutral-200 lg:grid lg:items-center"
      onClick={handleClickCard}
    >
      <div className="flex flex-row items-center gap-4">
        <img
          src={tourist_profilepicture ?? AvatarIcon}
          alt="tourist-pic"
          className="h-10 w-10 rounded-full bg-primary-400 object-cover"
        />
        <p className="mb-1 text-wrap text-sm font-semibold text-neutral-700">
          {tourist_name}
        </p>
      </div>
      <p className="text-wrap break-all text-xs text-neutral-700 lg:text-sm">
        {tourist_email}
      </p>
      <p className="text-wrap text-xs text-neutral-700 lg:text-sm">
        {tourist_location}
      </p>
      <div className="flex w-full items-center justify-end gap-x-4">
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
