import { ArticleResponse } from "@/utils/QiitaUtil";
import { Article } from "../article";
import { User } from "../user";

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

describe("Article", () => {
  it("should create an Article object from ArticleResponse", () => {
    const expectedTitle = mockArticleResponse.title;
    const expectedUser = new User(mockArticleResponse.user);
    const expectedLikesCount = mockArticleResponse.likes_count;
    const expectedTags = mockArticleResponse.tags.map((tag) => tag.name);
    const expectedCreatedAt = new Date(mockArticleResponse.created_at);
    const expectedUrl = mockArticleResponse.url;

    const article = new Article(mockArticleResponse);

    expect(article.title).toBe(expectedTitle);
    expect(article.user).toEqual(expectedUser);
    expect(article.likesCount).toBe(expectedLikesCount);
    expect(article.tags).toEqual(expectedTags);
    expect(article.created_at.getTime()).toBe(expectedCreatedAt.getTime());
    expect(article.url).toBe(expectedUrl);
  });
});
