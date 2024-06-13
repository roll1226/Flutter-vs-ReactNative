import { selector } from "recoil";
import { articleAtom } from "../atoms/articleAtom";
import { SELECTOR_KEY } from "../keys";

export const articleUrlState = selector({
  key: SELECTOR_KEY.ARTICLE_URL,
  get: ({ get }) => {
    const article = get(articleAtom);
    return article.url;
  },
});

export const articleTitleState = selector({
  key: SELECTOR_KEY.ARTICLE_TITLE,
  get: ({ get }) => {
    const article = get(articleAtom);
    return article.title;
  },
});
