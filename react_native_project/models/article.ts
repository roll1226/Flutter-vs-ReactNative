import { ArticleResponse } from "@/utils/QiitaUtil";
import { User } from "./user";

export class Article {
  title: string;
  user: User;
  likesCount: number;
  tags: string[];
  created_at: Date;
  url: string;

  constructor(article: ArticleResponse) {
    this.title = article.title;
    this.user = new User(article.user);
    this.likesCount = article.likes_count;
    this.tags = article.tags.map((tag) => tag.name);
    this.created_at = new Date(article.created_at);
    this.url = article.url;
  }
}
