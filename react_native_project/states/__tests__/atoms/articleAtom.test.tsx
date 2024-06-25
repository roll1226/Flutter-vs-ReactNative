import { Article } from "@/models/article";
import { articleAtom } from "@/states/atoms/articleAtom";
import { ArticleResponse } from "@/utils/QiitaUtil";
import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { RecoilRoot, useRecoilState } from "recoil";

const mockArticleResponse: ArticleResponse = {
  title: "Test Article",
  user: {
    id: "testUser",
    profile_image_url: "https://example.com",
    description: "",
    facebook_id: "",
    followees_count: 0,
    followers_count: 0,
    github_login_name: "",
    items_count: 0,
    linkedin_id: "",
    location: "",
    name: "",
    organization: "",
    permanent_id: 0,
    team_only: false,
    twitter_screen_name: "",
    website_url: "",
  },
  likes_count: 10,
  tags: [{ name: "technology", versions: [] }],
  created_at: "2024-06-23T12:00:00Z",
  url: "https://example.com/test-article",
  rendered_body: "",
  body: "",
  coediting: false,
  comments_count: 0,
  group: {
    created_at: "",
    description: "",
    name: "",
    private: false,
    updated_at: "",
    url_name: "",
  },
  id: "",
  private: false,
  reactions_count: 0,
  updated_at: "",
  page_views_count: 0,
  team_membership: {
    name: "",
  },
};

// テスト用コンポーネント
const TestComponent = () => {
  const [article, setArticle] = useRecoilState(articleAtom);

  useEffect(() => {
    const mockArticle = new Article(mockArticleResponse);
    setArticle(mockArticle);
  }, []);

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

    expect(getByTestId("title").textContent).toBe("Test Article");
    expect(getByTestId("profileImageUrl").getAttribute("src")).toBe(
      "https://example.com"
    );
    expect(getByTestId("likesCount").textContent).toBe("10");
    expect(getByTestId("tags").textContent).toBe("technology");
    expect(getByTestId("created_at").textContent).toBe(
      new Date("2024-06-23T12:00:00Z").toString()
    );
    expect(getByTestId("url").textContent).toBe(
      "https://example.com/test-article"
    );
  });
});
