import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://blog.loliver.net",
  integrations: [
    sitemap({
      changefreq: "daily",
      priority: 0.7,
    }),
    tailwind(),
  ],
  image: {
    domains: ["images.microcms-assets.io"],
  },
})
