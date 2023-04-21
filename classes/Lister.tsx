import { BlogLister } from "./BlogLister";

interface Item {
  id: number;
  title: string;
  content: string;
}

export abstract class Lister {
  constructor(public list: BlogLister[]) {
    console.log(list);
  }

  abstract outputList(list: Item[]): any;
  abstract renderItem(item: Item): any; // returns a JSX element with current item
}
