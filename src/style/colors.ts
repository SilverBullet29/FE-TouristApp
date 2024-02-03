import { ColorVariant, ColorWeight } from "./type";

const colors: Record<ColorVariant, Record<ColorWeight, string>> = {
  primary: {
    700: "#0195a6",
    600: "#34aab8",
    500: "#4db5c1",
    400: "#80cad3",
    300: "#b3dfe4",
    200: "#cceaed",
    100: "#e6f4f6",
  },
  error: {
    700: "#C43766",
    600: "#EF437C",
    500: "#F26594",
    400: "#F587AB",
    300: "#F8A9C3",
    200: "#FBCADA",
    100: "#FDECF2",
  },
  warning: {
    700: "#D1A019",
    600: "#FFC31F",
    500: "#FFCE47",
    400: "#FFD970",
    300: "#FFE398",
    200: "#FFEEC0",
    100: "#FFF9E9",
  },
  success: {
    700: "#06A26E",
    600: "#07C586",
    500: "#34CF9C",
    400: "#60DAB2",
    300: "#8DE4C7",
    200: "#BAEFDD",
    100: "#E6F9F3",
  },
  neutral: {
    700: "#383842",
    600: "#68686F",
    500: "#919196",
    400: "#BABABD",
    300: "#E2E2E4",
    200: "#F7F7F7",
    100: "#FFFFFF",
  },
  custom: {
    100: "#EFF0F4",
    200: "#E2E3E8",
    300: "#EFF0F4",
    400: "#EFF0F4",
    500: "#EFF0F4",
    600: "#EFF0F4",
    700: "#EFF0F4",
  },
};

export default colors;
