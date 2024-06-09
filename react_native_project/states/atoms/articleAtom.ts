import { Article } from "@/models/article";
import { atom } from "recoil";
import { ATOMS_KEY } from "../keys";

export const articleAtom = atom<Article>({
  key: ATOMS_KEY.ARTICLE,
  default: {
    title: "",
    user: {
      id: "",
      profileImageUrl: "",
    },
    likesCount: 0,
    tags: [],
    createdAt: new Date(),
    url: "",
  },
});
