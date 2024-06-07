import { User } from "./user";

export class Article {
  private title: string;
  private user: User;
  private likesCount: number;
  private tags: String[];
  private createdAt: Date;
  private url: string;

  constructor(
    title: string,
    user: User,
    likesCount: number,
    tags: String[],
    createdAt: Date,
    url: string
  ) {
    this.title = title;
    this.user = user;
    this.likesCount = likesCount;
    this.tags = tags;
    this.createdAt = createdAt;
    this.url = url;
  }
}
