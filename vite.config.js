import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: loadEnv(mode, process.cwd(), "").VITE_APP_BASE_URL,
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 5173,
    },
    css: {
      postcss: "./postcss.config.js",
    },
  };
});
