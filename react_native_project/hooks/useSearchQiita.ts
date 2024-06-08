import { Article } from "@/models/article";
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
            article.user,
            article.likesCount,
            article.tags,
            article.createdAt,
            article.url
          )
      ),
    ]);

    console.log(articles);
  };

  return {
    title,
    setTitle,
    articles,
    searchQiitaHandler,
  };
};
