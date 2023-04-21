import React from "react";
import { ListItem } from "./ListItem";

/** QUESTION about abastract class
 * ? Why is the Lister class an "abstract class"?
 */

// :: the Lister constructor receives an [Array of ListItems] as listItems
// :: the Array of ListItems will be available as this.listItems (note casing)
export abstract class Lister {
  abstract renderItem(item: ListItem): React.ReactElement;

  constructor(public listItems: ListItem[]) {}

  getTemplate({ children }: React.PropsWithChildren) {
    return <div className="children-container">{children}</div>;
  }
  /** Common Functionality
   * :: the renderList method has some common functionality across use-cases
   * :: mapping over the list is the primary one. You can see that
   */

  // TODO: Refactor the following to allow for a "template" to be fed in so that we can control what is around
  // TODO: each list item. So for instance if we want to wrap it in a <div> and a <Link> element
  // TODO: we can.
  renderList(): React.ReactElement {
    return (
      <div className="list-output">
        {this.listItems.map((item: ListItem) => {
          return <div key={item.id}>{this.renderItem(item)}</div>;
        })}
      </div>
    );
  }
}

/** ANSWER about abstract class
 * :: Lister is meant to be a generic class that can be a blueprint for
 * :: other implementations that have custom logic or fields needed. The first
 * :: example in this application is the ArticleLister class which implements
 * :: Lister. This means that ArticleLister inherits all of Listers fields and methods
 * :: and ArticleLister must also fulfill the contract to implement all necessary
 * :: fields and methods as required by the abastract Lister class it inherits from.
 */
