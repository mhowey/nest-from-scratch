import { Lister } from "./Lister";
export class BlogLister extends Lister {
  constructor(public list: any[]) {
    super(list);
  }

  // TODO: determine return type to use when returning JSX
  outputList(startIndex: number, endIndex: number): any {
    return (
      <div>
        <h1>output list</h1>
      </div>
    );
  }
}
