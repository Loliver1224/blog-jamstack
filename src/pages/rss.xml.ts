import rss from "@astrojs/rss"

import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts"
import { getAllArticles } from "@/lib/client"

export async function GET(context: { site: any }) {
  const response = await getAllArticles({
    fields: ["id", "title", "publishedAt"],
  })
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: response.contents.map((article) => ({
      title: article.title,
      pubDate: new Date(article.publishedAt!),
      // description: article.context,
      link: `/archive/${article.id}/`,
    })),
  })
}
