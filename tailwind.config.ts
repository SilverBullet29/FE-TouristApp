import type { Config } from "tailwindcss";
const customColor = require("./src/style/colors");
const colors = require("tailwindcss/colors");
const config: Config = {
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      ...customColor,
      amber: colors.amber,
      green: colors.green,
      blue: colors.blue,
      red: colors.red,
      cyan: colors.cyan,
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
