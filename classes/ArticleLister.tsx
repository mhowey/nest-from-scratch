/**
 * :: Because this interface for Article could is probably somewhat specific
 * :: to our implementation of Lister as  ArticleLister below, we define and
 * :: export the interface for the specific implementation here.
 *
 * :: Ultimately, this may not be an "Article", but it could be, let's say
 * :: "ProductLister" for an online store, either way it's an implementation
 * :: of the original Lister and therefore inherits the Lister's properties.
 */
import React from "react";
import { ListItem } from "../classes/ListItem";
import { Lister } from "./Lister";
import Link from "next/link";

/** QUESTION about extending the IList interface
 * ? Why are we extending IList here?
 */

export interface IArticle extends ListItem {
  slug: string;
  content: string;
}

/** ANSWER about extending the IList interface
 * :: We extend IList because it is the generic interface that is attached
 * :: to our generic Lister class.
 */

export class ArticleLister extends Lister {
  constructor(public list: IArticle[]) {
    super(list);
  }

  // TODO: Refactor props to have a specific type, avoid "any"
  template(props: any): React.ReactElement {
    const { children } = props;
    return <div>{children}</div>;
  }

  getListItem(article: IArticle): React.ReactElement {
    return (
      <div key={article.id}>
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </div>
    );
  }

  renderItem(item: IArticle): React.ReactElement {
    return (
      <div>
        <Link href={"blog/" + item.slug}>{item.title}</Link>
      </div>
    );
  }
}
