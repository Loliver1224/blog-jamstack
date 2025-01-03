import { codeToHtml } from "shiki"
import { load } from "cheerio"

// --- シンタックスハイライト適用 ---
// cf. https://codeseterpie.com/blog/e91oc4aaef58/
export const applySyntaxHighlighting = async (
  content: string,
): Promise<string> => {
  const cheerioObj = load(content)

  cheerioObj("div[data-filename]").each((_, elm) => {
    // data-filename属性の値を持つspanを
    // <div data-filename="{入力したファイル名}">の最初の子要素として追加
    cheerioObj(elm).prepend(
      `<span>${cheerioObj(elm).attr("data-filename")}</span>`,
    )
  })

  for (const elm of cheerioObj("pre code")) {
    // 言語を取得. 未指定の場合はplaintextとする
    const lang = cheerioObj(elm).attr("class") ?? "plaintext"
    const result = await codeToHtml(cheerioObj(elm).text(), {
      lang: lang.replace("language-", ""),
      theme: "one-dark-pro",
    })

    // 既存のpre code要素をshikiのもので上書き
    cheerioObj(elm).parent().replaceWith(result)
  }

  return cheerioObj.html()
}
