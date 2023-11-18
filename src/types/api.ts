import type { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk"

export interface CategoryApiSchema extends MicroCMSDate {
  id: string
  name: string
}

export interface SubcategoryApiSchema extends MicroCMSDate {
  id: string
  name: string
  parent: {
    id: string
  }
}

export interface ArticleApiSchema extends MicroCMSDate {
  id: string
  title: string
  context: string
  eyecatch: MicroCMSImage
  category: CategoryApiSchema
  subcategory: SubcategoryApiSchema
}

export interface ArticlesApiSchema {
  contents: ArticleApiSchema[]
}
