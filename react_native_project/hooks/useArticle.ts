import { articleAtom } from "@/states/atoms/articleAtom";
import { articleSelector } from "@/states/selector/articleSelector";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const useArticle = () => {
  const article = useRecoilValue(articleSelector);
  const setArticle = useSetRecoilState(articleAtom);

  return {
    article,
    setArticle,
  };
};
