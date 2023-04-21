import { useRouter } from "next/router";
import { articles } from "../../mockData/mockArticles";

export default function ShowArticle() {
  const router = useRouter();
  const currentSlug = router.query.article;
  const currentArticle = articles.filter(
    (article) => article.slug === currentSlug
  )[0];
  console.log("curretnArticle ==>", currentArticle);

  return (
    <div>
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.content}</p>
    </div>
  );
}
