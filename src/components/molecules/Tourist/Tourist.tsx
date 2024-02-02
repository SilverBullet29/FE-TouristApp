import { Icon } from "@components/atoms";
import { IconName } from "@components/atoms/Icon/Icon";
import { Tourist as TouristType } from "@infra/services/types/tourist";
import { FC, MouseEventHandler, useCallback } from "react";

interface Props extends TouristType.Item {
  onClickEdit?: () => void;
  onClickDelete?: () => void;
  className?: string;
}

type ActionButtonProps = {
  icon: IconName;
  color?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

const Tourist: FC<Props> = ({
  onClickEdit,
  onClickDelete,
  tourist_profilepicture,
  tourist_name,
  tourist_email,
  tourist_location,
}) => {
  const handleClickEdit = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      onClickEdit?.();
    },
    [onClickEdit],
  );
  const handleClickDelete = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      onClickDelete?.();
    },
    [onClickDelete],
  );

  return (
    <div className="grid w-full transform cursor-pointer grid-cols-4 items-center rounded-lg border-b border-neutral-200 p-3 transition ease-in-out hover:bg-neutral-200">
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
    </div>
  );
};

//#region CHILD
const ActionButton: FC<ActionButtonProps> = ({ onClick, icon, color }) => {
  return (
    <button className="rounded-full p-2 hover:bg-neutral-100" onClick={onClick}>
      <Icon name={icon} fill={color} />
    </button>
  );
};
//#endregion

export default Tourist;
