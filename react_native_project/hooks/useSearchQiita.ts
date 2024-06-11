import { Article } from "@/models/article";
import { User } from "@/models/user";
import { QiitaUtil } from "@/utils/QiitaUtil";
import { Dispatch, SetStateAction, useState } from "react";

type UseSearchQiitaReturn = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  articles: Article[];
  searchQiitaHandler: (title: string) => Promise<void>;
};

type UseSearchQiita = () => UseSearchQiitaReturn;

export const useSearchQiita: UseSearchQiita = () => {
  const [title, setTitle] = useState<string>("");
  const [articles, setArticles] = useState<Article[]>([]);

  const searchQiitaHandler = async (title: string): Promise<void> => {
    if (!title) return;

    const qiitaUtil = new QiitaUtil();
    const articlesByQiita = await qiitaUtil.searchQiita(title);

    setArticles((v) => [
      ...articlesByQiita.map(
        (article) =>
          new Article(
            article.title,
            new User(article.user.id, article.user.profile_image_url),
            article.likes_count,
            article.tags,
            article.created_at,
            article.url
          )
      ),
    ]);
  };

  return {
    title,
    setTitle,
    articles,
    searchQiitaHandler,
  };
};
