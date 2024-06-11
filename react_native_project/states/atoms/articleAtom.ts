import { Article } from "@/models/article";
import { atom } from "recoil";
import { ATOMS_KEY } from "../keys";

export const articleAtom = atom<Article>({
  key: ATOMS_KEY.ARTICLE,
  default: {
    title: "",
    user: {
      id: "",
      profile_image_url: "",
    },
    likes_count: 0,
    tags: [],
    created_at: new Date(),
    url: "",
  },
});
