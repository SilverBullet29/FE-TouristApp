import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const aliases = {
  "@atoms": "/src/components/atoms",
  "@molecules": "/src/components/molecules",
  "@organisms": "/src/components/organisms",
  "@templates": "/src/components/templates",
  "@pages": "/src/components/pages",
  "@routes": "/src/routes",
  "@infra": "/src/infra/",
  "@provider": "/src/infra/storage/providers",
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: aliases,
    },
  };
});
