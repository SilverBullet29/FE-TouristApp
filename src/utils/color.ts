import colors from "@style/colors";
import { ColorVariant, ColorWeight } from "style/type";

export function getTwColor(color?: string) {
  if (!color) {
    return color;
  }
  if (color.includes("-")) {
    const colorName = color.split("-")[0] as ColorVariant;
    const colorWeight = parseInt(color.split("-")[1], 10) as ColorWeight;
    return colors[colorName][colorWeight];
  }

  return color;
}
