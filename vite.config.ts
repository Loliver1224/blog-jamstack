import { defineConfig } from "astro/config"
import path from "path"

export default defineConfig({
  vite: {
    // plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
})
