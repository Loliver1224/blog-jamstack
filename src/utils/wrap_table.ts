import { load } from "cheerio"

// --- table要素にoverflow:scrollを適用するためにdivでwrapする ---
export const applyWrapTableElement = (content: string): string => {
  const cheerioObj = load(content)

  cheerioObj("table").each((_, elm) => {
    cheerioObj(elm).wrap('<div class="overflow-auto"></div>')
  })

  return cheerioObj.html()
}
