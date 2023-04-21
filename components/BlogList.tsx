import { Article } from "../classes/Article";

const BlogList: React.FC = () => {
  const articles = new Article([{}]);
  return (
    <div>
      <h2>Blog Article List</h2>
      {articles.listArticle()}
    </div>
  );
};
