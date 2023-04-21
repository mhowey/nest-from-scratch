import { Article } from "../classes/Article";

export const articles: Article[] = [
  {
    created: new Date(),
    author: 1,
    title: "Article Number One",
    slug: "article-number-one",
    tags: ["general", "coding", "blog"],
    content: "This is the content for article one.",
  },
  {
    created: new Date(),
    author: 2,
    title: "Article Number Two",
    slug: "article-number-two",
    tags: ["general", "coding", "blog"],
    content: "This is the content for article two.",
  },
];
