import type { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk"

export interface CategoryApiSchema extends MicroCMSDate {
  id: string
  name: string
}

export interface ContentApiSchema {
  fieldId: "html" | "richEditor"
  html?: string
  richEditor?: string
}

export interface ArticleApiSchema extends MicroCMSDate {
  id: string
  title: string
  // TODO: content一本化したらcontext定義削除してcontent必須化
  context?: string
  content?: ContentApiSchema[]
  eyecatch?: MicroCMSImage
  categories: CategoryApiSchema[]
}

export interface ArticlesApiSchema {
  contents: ArticleApiSchema[]
}
