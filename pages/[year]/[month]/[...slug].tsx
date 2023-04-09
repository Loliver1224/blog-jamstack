/** 記事ページ */
import { useRouter } from "next/router";

// useRouter消してSSGにする
const Comment = () => {
  const router = useRouter();
  // query想定: /dd/記事名
  const slug = (router.query.slug as string[]) || [];

  return (
    <>
      <h1>Slug: {slug.join("/")}</h1>
    </>
  );
};

export default Comment;
