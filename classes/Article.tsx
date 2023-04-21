// generic class for listing articles from a datasource
export class Article {
  created: Date;
  author: number;
  title: string;
  slug: string;
  tags: string[];
  content: string;

  constructor(public data: any[]) {
    this.created = new Date();
    this.author = 1;
    this.title = "";
    this.slug = "";
    this.tags = [""];
    this.content = "";
    this.listArticle;
  }

  listArticle() {
    return (
      <div>
        <h1>{this.title}</h1>
        <h2>{this.author}</h2>
        <p>{this.content}</p>
      </div>
    );
  }
}
