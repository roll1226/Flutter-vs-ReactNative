import { Article } from "@/entities/article";
import { QiitaUtil } from "@/utils/QiitaUtil";
import { Dispatch, SetStateAction, useState } from "react";

type UseSearchQiitaReturn = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  article: Article[];
  searchQiitaHandler: () => Promise<void>;
};

type UseSearchQiita = () => UseSearchQiitaReturn;

export const useSearchQiita: UseSearchQiita = () => {
  const [title, setTitle] = useState<string>("roll1226");
  const [article, setArticle] = useState<Article[]>([]);

  const searchQiitaHandler = async (): Promise<void> => {
    const qiitaUtil = new QiitaUtil();
    const articles = await qiitaUtil.searchQiita(title);
    setArticle((v) => [
      ...v,
      ...articles.map(
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
  };

  return {
    title,
    setTitle,
    article,
    searchQiitaHandler,
  };
};
