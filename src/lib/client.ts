import { createClient } from "microcms-js-sdk"
import type { MicroCMSQueries } from "microcms-js-sdk"
import type {
  ArticleApiSchema,
  ArticlesApiSchema,
  CategoryApiSchema,
} from "@/types/api"

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
})

export const getAllArticles = async (queries?: MicroCMSQueries) => {
  return await client.get<ArticlesApiSchema>({
    endpoint: "articles",
    queries,
  })
}

export const getAllArticlesDetail = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents<ArticleApiSchema>({
    endpoint: "articles",
    queries,
  })
}

export const getArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<ArticleApiSchema>({
    endpoint: "articles",
    contentId,
    queries,
  })
}

export const getAllCategories = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents<CategoryApiSchema>({
    endpoint: "category",
    queries,
  })
}

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<CategoryApiSchema>({
    endpoint: "category",
    contentId,
    queries,
  })
}
