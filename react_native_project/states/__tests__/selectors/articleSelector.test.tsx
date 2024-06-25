import { articleAtom } from "@/states/atoms/articleAtom";
import {
  articleTitleState,
  articleUrlState,
} from "@/states/selectors/articleSelector";
import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";
import { RecoilRoot, useRecoilValue } from "recoil";

// テスト用コンポーネント
const TestUrlComponent = () => {
  const url = useRecoilValue(articleUrlState);
  return <Text testID="url">{url}</Text>;
};

const TestTitleComponent = () => {
  const title = useRecoilValue(articleTitleState);
  return <Text testID="title">{title}</Text>;
};

describe("articleUrlState and articleTitleState selectors", () => {
  it("should return the correct default url from articleUrlState", () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <TestUrlComponent />
      </RecoilRoot>
    );

    expect(getByTestId("url").props.children).toBe("");
  });

  it("should return the correct default title from articleTitleState", () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <TestTitleComponent />
      </RecoilRoot>
    );

    expect(getByTestId("title").props.children).toBe("");
  });

  it("should return the updated url from articleUrlState", () => {
    const initialState = {
      articleAtom: {
        title: "Test Title",
        user: {
          id: "1",
          profileImageUrl: "https://example.com/image.jpg",
        },
        likesCount: 10,
        tags: ["test", "recoil"],
        created_at: new Date(),
        url: "https://example.com/article",
      },
    };

    const { getByTestId } = render(
      <RecoilRoot
        initializeState={({ set }) =>
          set(articleAtom, initialState.articleAtom)
        }
      >
        <TestUrlComponent />
      </RecoilRoot>
    );

    expect(getByTestId("url").props.children).toBe(
      "https://example.com/article"
    );
  });

  it("should return the updated title from articleTitleState", () => {
    const initialState = {
      articleAtom: {
        title: "Test Title",
        user: {
          id: "1",
          profileImageUrl: "https://example.com/image.jpg",
        },
        likesCount: 10,
        tags: ["test", "recoil"],
        created_at: new Date(),
        url: "https://example.com/article",
      },
    };

    const { getByTestId } = render(
      <RecoilRoot
        initializeState={({ set }) =>
          set(articleAtom, initialState.articleAtom)
        }
      >
        <TestTitleComponent />
      </RecoilRoot>
    );

    expect(getByTestId("title").props.children).toBe("Test Title");
  });
});
