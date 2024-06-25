import { render } from "@testing-library/react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { articleAtom } from "@/states/atoms/articleAtom";
import React from "react";

// テスト用コンポーネント
const TestComponent = () => {
  const article = useRecoilValue(articleAtom);
  return (
    <div>
      <h1 data-testid="title">{article.title}</h1>
      <img
        data-testid="profileImageUrl"
        src={article.user.profileImageUrl}
        alt="profile"
      />
      <p data-testid="likesCount">{article.likesCount}</p>
      <p data-testid="tags">{article.tags.join(", ")}</p>
      <p data-testid="created_at">{article.created_at.toString()}</p>
      <p data-testid="url">{article.url}</p>
    </div>
  );
};

describe("articleAtom", () => {
  it("should have the correct default values", () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <TestComponent />
      </RecoilRoot>
    );

    expect(getByTestId("title").textContent).toBe("");
    expect(getByTestId("profileImageUrl").getAttribute("src")).toBe("");
    expect(getByTestId("likesCount").textContent).toBe("0");
    expect(getByTestId("tags").textContent).toBe("");
    expect(getByTestId("created_at").textContent).toBe(new Date().toString());
    expect(getByTestId("url").textContent).toBe("");
  });
});
