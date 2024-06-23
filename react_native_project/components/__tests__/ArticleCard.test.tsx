// __tests__/ArticleCard.test.tsx
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { RecoilRoot } from "recoil";
import { Article } from "../../models/article";
import { ArticleCard } from "../ArticleCard";

const mockArticle: Article = {
  title: "Test Article",
  created_at: new Date(),
  tags: ["tag1", "tag2"],
  likesCount: 10,
  url: "https://example.com",
  user: {
    id: "user1",
    profileImageUrl: "https://example.com/profile.jpg",
  },
};

jest.mock("expo-router", () => ({
  Link: ({ children, onPress }: any) => (
    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  ),
}));

describe("ArticleCard", () => {
  it("should render article information", () => {
    const { getByText, getByRole } = render(
      <RecoilRoot>
        <ArticleCard article={mockArticle} />
      </RecoilRoot>
    );

    expect(getByText(mockArticle.title)).toBeTruthy();
    expect(getByText("tag1")).toBeTruthy();
    expect(getByText("tag2")).toBeTruthy();
    expect(getByText(mockArticle.user.id)).toBeTruthy();
    expect(getByText(mockArticle.likesCount.toString())).toBeTruthy();
    expect(getByRole("image")).toBeTruthy();
  });

  it("should handle modal link press", () => {
    const setArticleMock = jest.fn();
    jest
      .spyOn(recoil, "useRecoilState")
      .mockReturnValue([mockArticle, setArticleMock]);

    const { getByText } = render(
      <RecoilRoot>
        <ArticleCard article={mockArticle} />
      </RecoilRoot>
    );

    fireEvent.press(getByText(mockArticle.title));
    expect(setArticleMock).toHaveBeenCalledWith(mockArticle);
  });
});
