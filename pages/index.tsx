import Link from "next/link";
import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi";
import { client } from "@/lib/client";
import { ArticlesApiSchema } from "@/types/api";

interface Props {
  articlesApiData: ArticlesApiSchema;
}

export default function Home({ articlesApiData }: Props) {
  return (
    <>
      <h2 className="text-2xl font-bold">新着記事</h2>
      {articlesApiData.contents.map((content) => (
        <Link href={"/articles/" + content.id} key={content.id}>
          <div className="bg-white flex flex-row gap-2 my-4 p-4 border rounded-md shadow-md">
            <div className="w-1/4">
              <Image
                src={content.eyecatch.url}
                alt="サムネイル"
                width={content.eyecatch.width}
                height={content.eyecatch.height}
              />
            </div>
            <div className="flex-auto">
              <h3
                className="text-xl"
                dangerouslySetInnerHTML={{ __html: content.title }}
              />
              <div className="flex flex-row items-center justify-end text-gray-600">
                <HiOutlineClock className="h-4 w-4" />
                {content.publishedAt.split("T")[0] || ''}
                <br />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const articlesApiData = await client.get<ArticlesApiSchema>({
    endpoint: "articles",
    queries: {
      limit: 3
    },
  });

  return {
    props: {
      articlesApiData,
    },
  };
};
