import { ArticleResponse, QiitaUtil } from "../QiitaUtil";

jest.mock("@/ENV", () => ({
  ENV: {
    QIITA_ACCESS_TOKEN: "test_token",
  },
}));

const fetchMock = require("jest-fetch-mock");
fetchMock.enableMocks();

describe("QiitaUtil", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("searchQiita returns articles based on title", async () => {
    // Arrange
    const mockResponse: ArticleResponse[] = [
      {
        rendered_body: "<p>Test article</p>",
        body: "Test article",
        coediting: false,
        comments_count: 0,
        created_at: "2024-06-25T00:00:00+00:00",
        id: "test_id",
        likes_count: 10,
        private: false,
        reactions_count: 0,
        tags: [
          {
            name: "test",
            versions: ["1.0"],
          },
        ],
        title: "Test Article",
        updated_at: "2024-06-25T00:00:00+00:00",
        url: "https://qiita.com/test_id",
        user: {
          description: "Test user",
          facebook_id: "test_facebook",
          followees_count: 10,
          followers_count: 20,
          github_login_name: "test_github",
          id: "test_user",
          items_count: 5,
          linkedin_id: "test_linkedin",
          location: "Tokyo",
          name: "Test User",
          organization: "Test Organization",
          permanent_id: 1,
          profile_image_url: "https://example.com/profile.jpg",
          team_only: false,
          twitter_screen_name: "test_twitter",
          website_url: "https://example.com",
        },
        page_views_count: 100,
        team_membership: { name: "" },
        group: {
          created_at: "",
          description: "",
          name: "",
          private: false,
          updated_at: "",
          url_name: "",
        },
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const qiitaUtil = new QiitaUtil();

    // Act
    const articles = await qiitaUtil.searchQiita("Test");

    // Assert
    expect(articles).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://qiita.com/api/v2/items?per_page=10&query=title:Test",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer test_token`,
          "Content-Type": "application/json",
        },
      }
    );
  });

  it("throws an error when the API call fails", async () => {
    // Arrange
    fetchMock.mockReject(new Error("API call failed"));

    const qiitaUtil = new QiitaUtil();

    // Act & Assert
    await expect(qiitaUtil.searchQiita("Test")).rejects.toThrow(
      "API call failed"
    );
  });
});
