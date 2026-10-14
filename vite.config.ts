import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Ignore transient/temp files that editors create (e.g. "file.png.~tmp").
      // Watching these can crash the dev server with EBUSY on Windows.
      ignored: ["**/*.~*", "**/*.tmp", "**/*.swp", "**/*.swx", "**/.~*"],
    },
  },
});
