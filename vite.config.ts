import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const aliases = {
  "@components": "/src/components/",
  "@routes": "/src/routes",
  "@infra": "/src/infra/",
  "@provider": "/src/infra/storage/providers",
  "@assets": "/src/assets",
  "@utils": "/src/utils/",
  "@style": "/src/style/",
};

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    plugins: [react()],
    resolve: {
      alias: aliases,
    },
  };
});
