import Link from "next/link";
import { HiOutlineClock } from "react-icons/hi";
import { client } from "@/lib/client";
import { ArticlesApiSchema } from "@/types/api";

interface Props {
  articlesApiData: ArticlesApiSchema;
}

/** アーカイブページ */
export default function Log({ articlesApiData }: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">記事一覧</h2>
      <div className="flex flex-row flex-wrap gap-6 justify-start max-md:justify-around">
        {articlesApiData.contents.map((content) => (
          <div
            className=" bg-white border border-gray-200 rounded-lg shadow w-72"
            key={content.id}
          >
            <Link href={"/articles/" + content.id}>
              <img
                src={content.eyecatch.url}
                alt="サムネイル"
                width="320"
                height="180"
                className="rounded-t-lg object-cover h-32 w-96"
              />
              <div className="p-5">
                <div
                  className="mb-2 text-xl font-bold tracking-tight text-gray-900"
                  dangerouslySetInnerHTML={{
                    __html: content.title,
                  }}
                ></div>
                <div className="flex flex-row items-center">
                  <HiOutlineClock className="h-4 w-4" />
                  {content.publishedAt.split("T")[0] || ""}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const articlesApiData = await client.get<ArticlesApiSchema>({
    endpoint: "articles",
    // queries: {
    //   limit: 3,
    // },
  });

  return {
    props: {
      articlesApiData,
    },
  };
};
