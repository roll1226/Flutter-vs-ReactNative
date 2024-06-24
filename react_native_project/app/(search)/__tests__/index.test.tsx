import { useSearchQiita } from "@/hooks/useSearchQiita";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import { RecoilRoot } from "recoil";
import SearchScreen from "../index";

// useSearchQiitaのモックを作成します
jest.mock("@/hooks/useSearchQiita");

describe("SearchScreen", () => {
  it("displays articles when search is performed", async () => {
    // Arrange
    const mockArticles = [
      {
        title: "Sample Article1",
        user: {
          id: "user1",
          profileImageUrl: "https://example.com/profile1.jpg",
        },
        likesCount: 5,
        tags: ["React Native"],
        created_at: new Date(),
        url: "https://example.com/article1",
      },
      {
        title: "Sample Article2",
        user: {
          id: "user2",
          profileImageUrl: "https://example.com/profile2.jpg",
        },
        likesCount: 10,
        tags: ["React Native"],
        created_at: new Date(),
        url: "https://example.com/article2",
      },
    ];
    const inputTitle = "Article";

    const mockSetTitle = jest.fn();
    const mockSearchQiitaHandler = jest.fn();

    // useSearchQiitaのモックを設定します
    (useSearchQiita as jest.Mock).mockReturnValue({
      title: inputTitle,
      setTitle: mockSetTitle,
      articles: mockArticles,
      searchQiitaHandler: mockSearchQiitaHandler,
    });

    const { getByPlaceholderText, getByText, getAllByText } = render(
      <RecoilRoot>
        <SearchScreen />
      </RecoilRoot>
    );

    // Act
    fireEvent.changeText(getByPlaceholderText("Qiita記事検索"), inputTitle);

    // 状態が更新されるのを待つ
    await waitFor(() => {
      expect(mockSetTitle).toHaveBeenCalledWith(inputTitle);
    });

    fireEvent.press(getByText("検索"));

    // Assert
    await waitFor(() => {
      expect(mockSearchQiitaHandler).toHaveBeenCalledWith(inputTitle);
      expect(getAllByText(/Sample Article/)).toHaveLength(2);
    });
  });
});
