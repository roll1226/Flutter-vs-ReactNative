import { ArticleCard } from "@/components/ArticleCard";
import { Article } from "@/models/article";
import { articleAtom } from "@/states/atoms/articleAtom";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";

const mockArticle: Article = {
  title: "Test Article",
  user: { id: "testUser", profileImageUrl: "https://example.com/image.png" },
  likesCount: 10,
  tags: ["react", "typescript"],
  created_at: new Date("2023-01-01"),
  url: "https://example.com/test-article",
};

describe("ArticleCard", () => {
  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <RecoilRoot>
        <ArticleCard article={mockArticle} />
      </RecoilRoot>
    );

    expect(getByText("Test Article")).toBeTruthy();
    expect(getByText("2023/01/01")).toBeTruthy();
    expect(getByText("react")).toBeTruthy();
    expect(getByText("typescript")).toBeTruthy();
    expect(getByText("10")).toBeTruthy();
    expect(getByText("testUser")).toBeTruthy();
    expect(getByTestId("article-image").props.source.uri).toBe(
      "https://example.com/image.png"
    );
  });

  it("calls setArticleState when the link is pressed", () => {
    // Arrange
    const setArticle = jest.fn();
    const useRecoilStateMock = () => [null, setArticle];
    jest
      .spyOn(require("recoil"), "useRecoilState")
      .mockImplementation(useRecoilStateMock);

    const { getByTestId } = render(
      <RecoilRoot>
        <ArticleCard article={mockArticle} />
      </RecoilRoot>
    );

    const modalLink = getByTestId("modal-link");
    fireEvent.press(modalLink);

    // Recoil state update is an asynchronous operation, so wait for the state update
    waitFor(() => {
      const state = useRecoilState(articleAtom);
      expect(state[0]).toEqual(mockArticle);
    });
  });
});
