import { getTwColor } from "@utils/color";
import React, { FC, SVGProps, useMemo } from "react";
import IcEye from "./svg/IcEye";
import IcEyeOff from "./svg/IcEyeOff";
import IcTrash from "./svg/IcTrash";
import IcPencil from "./svg/IcPencil";
import IcWarn from "./svg/IcWarn";
import IcSignOut from "./svg/IcSignOut";

export type IconName =
  | "eye"
  | "eye-off"
  | "trash"
  | "pencil"
  | "warn"
  | "sign-out";

interface Props extends SVGProps<SVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

const EnumIcon: Record<IconName, React.FC> = {
  eye: IcEye,
  "eye-off": IcEyeOff,
  trash: IcTrash,
  pencil: IcPencil,
  warn: IcWarn,
  "sign-out": IcSignOut,
};

const Icon: FC<Props> = ({ name, size, fill, height, width, ...props }) => {
  const IconComponent = EnumIcon[name];
  const extendProps = useMemo(
    () => ({
      height: size || height,
      width: size || width,
      fill: getTwColor(fill as string | undefined),
      "data-testid": "my-icon",
    }),
    [fill, height, size, width],
  );
  return (
    <IconComponent {...props} {...extendProps}>
      Icon
    </IconComponent>
  );
};

export default Icon;
