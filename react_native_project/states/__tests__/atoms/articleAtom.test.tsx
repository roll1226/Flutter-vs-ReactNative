import { Article } from "@/models/article";
import { articleAtom } from "@/states/atoms/articleAtom";
import { ArticleResponse } from "@/utils/QiitaUtil";
import { render } from "@testing-library/react-native";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
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
    <View>
      <Text testID="title">{article.title}</Text>
      <Image
        testID="profileImageUrl"
        source={{ uri: article.user.profileImageUrl }}
        style={{ width: 100, height: 100 }}
      />
      <Text testID="likesCount">{article.likesCount}</Text>
      <Text testID="tags">{article.tags.join(", ")}</Text>
      <Text testID="created_at">{new Date(article.created_at).toString()}</Text>
      <Text testID="url">{article.url}</Text>
    </View>
  );
};

describe("articleAtom", () => {
  it("should have the correct default values", () => {
    const { getByTestId } = render(
      <RecoilRoot>
        <TestComponent />
      </RecoilRoot>
    );

    expect(getByTestId("title").props.children).toBe("Test Article");
    expect(getByTestId("profileImageUrl").props.source.uri).toBe(
      "https://example.com"
    );
    expect(getByTestId("likesCount").props.children).toBe(10);
    expect(getByTestId("tags").props.children).toBe("technology");
    expect(getByTestId("created_at").props.children).toBe(
      new Date("2024-06-23T12:00:00Z").toString()
    );
    expect(getByTestId("url").props.children).toBe(
      "https://example.com/test-article"
    );
  });
});
