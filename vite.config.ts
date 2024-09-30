import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "deepmerge",
      "prop-types",
      "react-display-name",
      "hoist-non-react-statics",
    ],
  },
});
