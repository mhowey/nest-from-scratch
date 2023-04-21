import { IArticle } from "../classes/ArticleLister";

/** Emulate "Real Data"
 * ! Our Mock Data
 * :: This is meant to emulate "real data" that we would normally retrieve from
 * :: some sort of network call to a data store of some sort. I will be adding this
 * :: functionality in later - probably simply to SQLlite to start. Then I will
 * :: also genericize the database connector (not sure exactly how yet, perhaps,
 * :: I can integrate prisma or something? just thinking out loud here.)
 */

export const articles: IArticle[] = [
  {
    id: 1,
    title: "Article Number One",
    slug: "article-number-one",
    content: "This is the content for article one.",
  },
  {
    id: 2,
    title: "Article Number Two",
    slug: "article-number-two",
    content: "This is the content for article two.",
  },
  {
    id: 3,
    title: "Article Number Three",
    slug: "article-number-three",
    content: "This is the content for article three.",
  },
  {
    id: 4,
    title: "Article Number Four",
    slug: "article-number-four",
    content: "This is the content for article four.",
  },
  {
    id: 5,
    title: "Article Number Five",
    slug: "article-number-five",
    content: "This is the content for article five.",
  },
];
