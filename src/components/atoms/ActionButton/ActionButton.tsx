import { FC, MouseEventHandler } from "react";
import { Icon } from "../Icon";
import { IconName } from "../Icon/Icon";

type ActionButtonProps = {
  icon: IconName;
  color?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

const ActionButton: FC<ActionButtonProps> = ({ onClick, icon, color }) => {
  return (
    <button className="rounded-full p-2 hover:bg-neutral-100" onClick={onClick}>
      <Icon name={icon} fill={color} />
    </button>
  );
};

export default ActionButton;
