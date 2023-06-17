/** 記事ページ */
import { client } from "@/lib/client";
import { ArticleApiSchema, ArticlesApiSchema } from "@/types/api";

interface Props {
  articleApiData: ArticleApiSchema;
}

export default function Article({ articleApiData }: Props) {
  return (
    <article>
      <h1>{articleApiData.title}</h1>
      <div className="flex flex-row-reverse">
        {articleApiData.publishedAt.split("T")[0] || ""}
      </div>
      <hr className="my-4 bg-indigo-600 h-[2px]" />
      <div dangerouslySetInnerHTML={{ __html: articleApiData.context }} />
    </article>
  );
}

export async function getStaticProps(context: {
  params: { articleId: string };
}) {
  const id = context.params.articleId;

  const articleApiData = await client.get<ArticleApiSchema>({
    endpoint: "articles",
    contentId: id,
  });

  return {
    props: {
      articleApiData,
    },
  };
}

/** SSG用のパス一覧定義 */
export const getStaticPaths = async () => {
  const data = await client.get<ArticlesApiSchema>({
    endpoint: "articles",
  });

  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};
