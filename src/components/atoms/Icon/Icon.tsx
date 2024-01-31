import { getTwColor } from "@utils/color";
import React, { FC, SVGProps, useMemo } from "react";
import IcEye from "./svg/IcEye";
import IcEyeOff from "./svg/IcEyeOff";

export type IconName = "eye" | "eye-off";

interface Props extends SVGProps<SVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

const EnumIcon: Record<IconName, React.FC> = {
  eye: IcEye,
  "eye-off": IcEyeOff,
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
