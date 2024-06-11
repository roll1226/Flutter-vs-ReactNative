import { User } from "./user";

type tag = {
  name: string;
};

export class Article {
  title: string;
  user: User;
  likes_count: number;
  tags: tag[];
  created_at: Date;
  url: string;

  constructor(
    title: string,
    user: User,
    likes_count: number,
    tags: tag[],
    created_at: Date,
    url: string
  ) {
    this.title = title;
    this.user = user;
    this.likes_count = likes_count;
    this.tags = tags;
    this.created_at = created_at;
    this.url = url;
  }
}
