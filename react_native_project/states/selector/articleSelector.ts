import { selector } from "recoil";
import { articleAtom } from "../atoms/articleAtom";
import { SELECTOR_KEY } from "../keys";

export const articleSelector = selector({
  key: SELECTOR_KEY.ARTICLE,
  get: ({ get }) => {
    return get(articleAtom);
  },
});
