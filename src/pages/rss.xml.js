import rss from "@astrojs/rss"

import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts"
import { getAllArticles } from "@/lib/client"

export async function get(context) {
  const response = await getAllArticles({
    fields: ["id", "title", "publishedAt"],
  })
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: response.contents.map((article) => ({
      title: article.title,
      pubDate: article.publishedAt,
      // description: article.context,
      link: `/archive/${article.id}/`,
    })),
  })
}
