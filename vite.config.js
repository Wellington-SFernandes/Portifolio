import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Portifolio/", // Certifique-se de que o nome do repositório está correto
  plugins: [react()],
});
