import { getOgpImageResponse } from "@/components/ogp"
import { getAllArticlesDetail, getArticleDetail } from "@/lib/client"
import type { APIRoute, GetStaticPaths } from "astro"

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getAllArticlesDetail({ fields: ["id"] })
  return articles.map((article) => ({ params: { articleId: article.id } }))
}

export const GET: APIRoute = async ({ params }) => {
  if (!params.articleId) {
    return { body: "Not Found", encoding: "utf8" }
  }

  const article = await getArticleDetail(params.articleId)

  return getOgpImageResponse({
    title: article.title,
  })
}
