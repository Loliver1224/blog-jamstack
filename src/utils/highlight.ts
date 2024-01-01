import hljs from "highlight.js"
import type { HighlightResult } from "highlight.js"
import { load } from "cheerio"

// --- シンタックスハイライト適用 ---
// cf. https://codeseterpie.com/blog/e91oc4aaef58/
export const applySyntaxHighlighting = (content: string): string => {
  const cheerioObj = load(content)

  cheerioObj("div[data-filename]").each((_, elm) => {
    // data-filename属性の値を持つspanを
    // <div data-filename="{入力したファイル名}">の最初の子要素として追加
    cheerioObj(elm).prepend(
      `<span>${cheerioObj(elm).attr("data-filename")}</span>`,
    )
  })

  cheerioObj("pre code").each((_, elm) => {
    const lang = cheerioObj(elm).attr("class")
    let result: HighlightResult

    if (lang) {
      result = hljs.highlight(cheerioObj(elm).text(), {
        language: lang.replace("language-", ""),
      })
    } else {
      // 言語が選択されていない場合は自動判定
      result = hljs.highlightAuto(cheerioObj(elm).text())
    }
    cheerioObj(elm).html(result.value)
    cheerioObj(elm).addClass("hljs")
  })

  return cheerioObj.html()
}
