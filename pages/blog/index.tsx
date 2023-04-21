import { articles } from "../../mockData/mockArticles";
import { ArticleLister } from "../../classes/ArticleLister";
// import styles from "@components/styles/Home.module.css";

export default function Blog() {
  const articleList = new ArticleLister(articles);
  return <div>{articleList.renderList()}</div>;
}
