import { User } from "./user";

export class Article {
  title: string;
  user: User;
  likesCount: number;
  tags: String[];
  createdAt: Date;
  url: string;

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
