import { SVGProps } from "react";

const IcPencil = (props: SVGProps<SVGSVGElement>) => {
  const { height, width, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.71 7.04C21.1 6.65 21.1 6 20.71 5.63L18.37 3.29C18 2.9 17.35 2.9 16.96 3.29L15.12 5.12L18.87 8.87L20.71 7.04ZM3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25Z"
        fill={fill}
      />
    </svg>
  );
};

IcPencil.defaultProps = {
  height: 24,
  width: 24,
  fill: "#68686F",
};

export default IcPencil;
