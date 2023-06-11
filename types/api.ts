interface DatatimeApiSchema {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export interface CategoryApiSchema extends DatatimeApiSchema {
  id: string;
  name: string;
}

export interface SubcategoryApiSchema extends DatatimeApiSchema {
  id: string;
  name: string;
  parent: {
    id: string;
  };
}

export interface ArticleApiSchema extends DatatimeApiSchema {
  id: string;
  title: string;
  context: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: CategoryApiSchema;
  subcategory: SubcategoryApiSchema;
}

export interface ArticlesApiSchema {
  contents: ArticleApiSchema[];
}
