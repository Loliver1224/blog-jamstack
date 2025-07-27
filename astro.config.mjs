import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

import icon from "astro-icon"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://blog.loliver.net",
  integrations: [
    sitemap({ changefreq: "daily", priority: 0.7 }),
    icon({
      include: {
        mdi: ["magnify", "clock-outline"],
        "fa-brands": ["twitter", "blogger", "github"],
        "simple-icons": ["feedly"],
      },
    }),
  ],
  vite: {
    resolve: { alias: { "@": "/src" } },
    plugins: [tailwindcss()],
  },
  image: { domains: ["images.microcms-assets.io"] },
  redirects: {
    "/2020/03/29/python-ceil_with_divfloor_operator":
      "/archive/python-ceil_with_divfloor_operator",
    "/2020/04/16/passed_g-exam": "/archive/passed_g-exam",
    "/2020/05/19/dotfiles～～～～": "/archive/dotfiles",
    "/2020/08/25/open-folder-cmd": "/archive/open-folder-cmd",
    "/2020/10/03/fe-exam-plan": "/archive/fe-exam-plan",
    "/2021/02/23/goland-import-github-module":
      "/archive/goland-import-github-module",
    "/2021/02/23/failed-ap": "/archive/failed-ap",
    "/2020/07/20/teraterm-auto-login": "/archive/teraterm-auto-login",
    "/2021/03/18/j-lang_pacman": "/archive/j-lang_pacman",
    "/2021/03/19/pkl2jld": "/archive/pkl2jld",
    "/2021/03/24/kusodeka-paren": "/archive/kusodeka-paren",
    "/2020/07/22/how2use-ssh-fs": "/archive/how2use-ssh-fs",
    "/2021/09/02/hash-mark": "/archive/hash-mark",
    "/2021/09/04/fixed-box": "/archive/fixed-box",
    "/2020/07/05/how2add-jupyterlab-shortcut":
      "/archive/how2add-jupyterlab-shortcut",
    "/2021/11/06/texlive_minimal_install": "/archive/texlive_minimal_install",
    "/2021/11/06/cluttex": "/archive/cluttex",
    "/2021/11/07/latex-workshop-build-twice":
      "/archive/latex-workshop-build-twice",
    "/2021/06/25/passed-ap": "/archive/passed-ap",
    "/2021/12/05/aquaskk-on-powerpoint": "/archive/aquaskk-on-powerpoint",
    "/2022/02/17/isp-wrong-choice": "/archive/isp-wrong-choice",
    "/2022/06/15/java-util-arrays": "/archive/java-util-arrays",
    "/2020/08/11/latex-tutorial-lengths": "/archive/latex-tutorial-lengths",
    "/2020/08/29/epsilon-varepsilon-diff": "/archive/epsilon-varepsilon-diff",
    "/2020/08/10/latex-tutorial-font": "/archive/latex-tutorial-font",
    "/2020/07/17/texlive-installation": "/archive/texlive-installation",
    "/2021/04/22/usage-own-latex-style": "/archive/usage-own-latex-style",
    "/2020/09/06/julia-mathematics": "/archive/julia-mathematics",
    "/2020/08/10/latex-tutorial-preamble": "/archive/latex-tutorial-preamble",
    "/2020/08/11/latex-tutorial-spaces_breaks":
      "/archive/latex-tutorial-spaces_breaks",
    "/2020/08/12/latex-tutorial-figures": "/archive/latex-tutorial-figures",
    "/2020/10/03/db-normalization": "/archive/db-normalization",
    "/2022/07/03/choice-mizuho-card": "/archive/choice-mizuho-card",
    "/2022/07/03/garbage-disposal": "/archive/garbage-disposal",
    "/2022/12/19/moving-record": "/archive/moving-record",
    "/2023/03/12/not-recommend-appliances": "/archive/not-recommend-appliances",
    "/2023/02/24/daily-necessities-recommend-list":
      "/archive/daily-necessities-recommend-list",
  },
})
