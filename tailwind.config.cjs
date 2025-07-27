/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Noto Sans JP Variable"],
      },
    },
  },
  plugins: [],
  darkMode: ["class", "darkmode"],
}
