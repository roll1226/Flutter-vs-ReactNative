export const ATOMS_KEY = {
  ARTICLE: "articleState",
} as const;
export type ATOMS_KEY = (typeof ATOMS_KEY)[keyof typeof ATOMS_KEY];

export const SELECTOR_KEY = {
  ARTICLE_URL: "articleUrlSelector",
  ARTICLE_TITLE: "articleTitleSelector",
};
export type SELECTOR_KEY = (typeof SELECTOR_KEY)[keyof typeof SELECTOR_KEY];
